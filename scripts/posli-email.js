// NA ŘÁDKU 12 VYPLŇ SVŮJ EMAIL MÍSTO ZDE_EMAIL
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' }); // použij { headless: false } pro ladění
  const page = await browser.newPage();

  await page.goto('https://proteus.deltagreen.cz/cs/auth/login', { waitUntil: 'networkidle2' });

  // Zadej email do inputu podle placeholderu
  await page.waitForSelector('input[placeholder="Zde zadejte váš email"]');
  await page.type('input[placeholder="Zde zadejte váš email"]', 'ZDE_EMAIL');

  // Klikni na tlačítko „Odeslat přihlašovací odkaz“
  await page.waitForSelector('form button[type="submit"]'); // bezpečnější než CSS cesta
  await page.click('form button[type="submit"]');

  // Volitelně čekej na potvrzení nebo zpracování požadavku
  await page.waitForTimeout(5000);

  await browser.close();
})();
