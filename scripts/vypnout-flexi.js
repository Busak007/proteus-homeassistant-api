const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setCookie({
    name: 'proteus_session',
    value: 'TVUJ_KLIC',
    domain: 'proteus.deltagreen.cz',
    path: '/',
    httpOnly: true,
    secure: true,
  });

  await page.goto('https://proteus.deltagreen.cz/cs/device/inverter/TVOJE_INVERTER_ID', {
    waitUntil: 'networkidle2'
  });

  const selector = 'body > main > div > div.w-full.overflow-x-auto > div > div.relative.min-h-96 > div > div:nth-child(1) > div.rounded-lg.bg-background.text-paragraph.dark\\:border-border-dark.dark\\:bg-neutral-black.dark\\:text-paragraph-dark.px-0.shadow-md.border.border-secondary.py-4.pt-5.sm\\:py-4.sm\\:pt-7 > div.flex.items-center.justify-between.px-4.sm\\:px-7 > button';

  await page.waitForSelector(selector, { visible: true, timeout: 10000 });

  await page.evaluate((sel) => {
    const btn = document.querySelector(sel);
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      btn.click();
      console.log('Kliknutí provedeno přes evaluate.');
    } else {
      console.log('Tlačítko nenalezeno.');
    }
  }, selector);

  await new Promise(resolve => setTimeout(resolve, 2000));

  await browser.close();
})();
