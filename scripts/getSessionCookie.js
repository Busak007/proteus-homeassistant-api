const puppeteer = require('puppeteer');

const verificationLink = process.argv[2];

if (!verificationLink || !verificationLink.startsWith("http")) {
  console.error("? Chyba: Musíš zadat platný URL odkaz jako argument.");
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  let proteusSessionValue = null;

  // Sledujeme všechny response a hledáme Set-Cookie s proteus_session
  page.on('response', async (response) => {
    try {
      const setCookieHeader = response.headers()['set-cookie'];
      if (setCookieHeader) {
        // set-cookie může být string nebo pole stringů
        let cookies = [];
        if (Array.isArray(setCookieHeader)) {
          cookies = setCookieHeader;
        } else {
          cookies = [setCookieHeader];
        }

        for (const cookieStr of cookies) {
          if (cookieStr.includes('proteus_session=')) {
            // Extrahujeme hodnotu proteus_session
            const match = cookieStr.match(/proteus_session=([^;]+);/);
            if (match) {
              proteusSessionValue = match[1];
              console.log('?? Zachycena hodnota proteus_session:', proteusSessionValue);
            }
          }
        }
      }
    } catch (e) {
      // ignoruj chyby
    }
  });

  console.log("?? Otevírám URL:", verificationLink);
  await page.goto(verificationLink, { waitUntil: 'networkidle2' });

  // Počkáme ještě 5 sekund, aby všechny redirecty proběhly a cookie mohly přijít
  await page.waitForTimeout(5000);

  if (proteusSessionValue) {
    console.log('? Konečná hodnota proteus_session:', proteusSessionValue);
  } else {
    console.error('?? proteus_session cookie nebyla zachycena v žádném response.');
  }

  await browser.close();
})();
