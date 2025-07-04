const puppeteer = require('puppeteer');

(async () => {
  const sessionKey = process.argv[2];
  if (!sessionKey) {
    console.error('? Chybí session token jako argument! Spusť např.: node script.js tvuj_session_token');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

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

  const selector = 'body > main > div > div.w-full.overflow-x-auto > div > div.relative.min-h-96 > div > div:nth-child(2) > div > div:nth-child(13) > div.flex.w-full.items-start.justify-between.gap-8.px-3.py-3\\.5.sm\\:items-center.sm\\:px-6.sm\\:py-6.sm\\:pr-7.\\33 xl\\:pr-10 > span > button';

  await page.waitForSelector(selector, { visible: true, timeout: 10000 });

  await page.evaluate((sel) => {
    const btn = document.querySelector(sel);
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      btn.click();
      console.log('Kliknutí na tlačítko provedeno.');
    } else {
      console.log('Tlačítko nenalezeno.');
    }
  }, selector);

  await new Promise(resolve => setTimeout(resolve, 2000));

  await browser.close();
})();
