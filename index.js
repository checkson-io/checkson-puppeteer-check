const puppeteer = require('puppeteer');
const fs = require('fs');

const {CHECKSON_DIR} = process.env;

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 720 });

    const website_url = 'https://www.google.com';

    await page.goto(website_url, { waitUntil: 'networkidle0' });

    const attachmentsDir = `${CHECKSON_DIR}/attachments`;
    if (!fs.existsSync(attachmentsDir)){
        fs.mkdirSync(attachmentsDir);
    }

    await page.screenshot({
        path: `${attachmentsDir}/screenshot.jpg`,
    });

    // Close the browser instance
    await browser.close();
})();
