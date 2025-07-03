const puppeteer = require('puppeteer');

(async () => {
  const sessionKey = process.argv[2]; // <-- vezme argument z příkazové řádky

  if (!sessionKey) {
    console.error("? Session key is missing.");
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

  const selector = 'body > main > div > div.w-full.overflow-x-auto > div > div.relative.min-h-96 > div > div:nth-child(1) > div.rounded-lg.bg-background.text-paragraph.dark\\:border-border-dark.dark\\:bg-neutral-black.dark\\:text-paragraph-dark.px-0.py-5.shadow-md.sm\\:py-7.border-2.border-primary > div > button';

  await page.waitForSelector(selector, { visible: true, timeout: 10000 });

  await page.evaluate((sel) => {
    const btn = document.querySelector(sel);
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      btn.click();
      console.log('?? Kliknutí na flexi tlačítko provedeno.');
    } else {
      console.log('? Flexi tlačítko nenalezeno.');
    }
  }, selector);

  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
})();
