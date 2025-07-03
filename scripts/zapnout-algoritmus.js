const puppeteer = require('puppeteer');

// Načti session key z argumentu
const sessionKey = process.argv[2];

if (!sessionKey) {
  console.error("? Chybí session key jako argument.");
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Nastav cookie s dynamickým session tokenem
  await page.setCookie({
    name: 'proteus_session',
    value: sessionKey,
    domain: 'proteus.deltagreen.cz',
    path: '/',
    httpOnly: true,
    secure: true,
  });

  await page.goto('https://proteus.deltagreen.cz/cs/device/inverter/clwhov40a000h68eaxope0qk3', {
    waitUntil: 'networkidle2'
  });

  const selector = 'body > main > div > div.w-full.overflow-x-auto > div > div.relative.min-h-96 > div > div:nth-child(1) > div.rounded-lg.bg-background.text-paragraph.dark\\:border-border-dark.dark\\:bg-neutral-black.dark\\:text-paragraph-dark.px-0.py-5.shadow-md.sm\\:py-7.border-2.border-primary > div.flex.items-center.justify-between.px-4.sm\\:px-7 > button';

  try {
    await page.waitForSelector(selector, { visible: true, timeout: 10000 });

    await page.evaluate((sel) => {
      const btn = document.querySelector(sel);
      if (btn) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        btn.click();
        console.log('? Kliknutí na tlačítko provedeno.');
      } else {
        console.log('?? Tlačítko nenalezeno.');
      }
    }, selector);
  } catch (err) {
    console.error('? Chyba při hledání tlačítka nebo klikání:', err.message);
  }

  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
})();
