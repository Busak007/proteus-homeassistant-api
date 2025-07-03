const puppeteer = require('puppeteer');

(async () => {
  // Načti session key z argumentu
  const sessionKey = process.argv[2];

  if (!sessionKey) {
    console.error("? Chybí session key jako argument.");
    process.exit(1);
  }

  // Očisti klíč – odstraní bílé znaky a nové řádky
  const cleanSessionKey = sessionKey.trim();

  console.log("?? Raw sessionKey:", JSON.stringify(sessionKey));
  console.log("?? Čistý session key:", cleanSessionKey);

  // Spusť prohlížeč
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Nejprve otevři doménu – aby šla cookie správně přiřadit
  await page.goto('https://proteus.deltagreen.cz', { waitUntil: 'domcontentloaded' });

  // Nastav cookie
  await page.setCookie({
    name: 'proteus_session',
    value: cleanSessionKey,
    domain: 'proteus.deltagreen.cz',
    path: '/',
    httpOnly: true,
    secure: true,
  });

  console.log("?? Cookie nastavena.");

  // Otevři cílovou stránku
  const targetUrl = 'https://proteus.deltagreen.cz/cs/device/inverter/clwhov40a000h68eaxope0qk3';
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });
  console.log("?? Načtena stránka:", targetUrl);

  // Selektor tlačítka
  const selector = 'body > main > div > div.w-full.overflow-x-auto > div > div.relative.min-h-96 > div > div:nth-child(1) > div.rounded-lg.bg-background.text-paragraph.dark\\:border-border-dark.dark\\:bg-neutral-black.dark\\:text-paragraph-dark.px-0.shadow-md.border.border-secondary.py-4.pt-5.sm\\:py-4.sm\\:pt-7 > div.flex.items-center.justify-between.px-4.sm\\:px-7 > button';

  // Najdi a klikni na tlačítko
  try {
    await page.waitForSelector(selector, { visible: true, timeout: 10000 });

    await page.evaluate((sel) => {
      const btn = document.querySelector(sel);
      if (btn) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        btn.click();
        console.log('? Kliknutí provedeno.');
      } else {
        console.log('?? Tlačítko nenalezeno.');
      }
    }, selector);
  } catch (error) {
    console.error("?? Chyba při čekání na tlačítko:", error);
  }

  // Nech stránku 2s otevřenou a zavři
  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
})();
