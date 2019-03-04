const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  // const browser = await puppeteer.launch({
  //   //headless: false
  // });

  const page = await browser.newPage();

  await page.goto('https://irek02.github.io/habit-tracker/#/calendar/2018/0');

  const r = await page.evaluate((sel) => {
    return document.querySelector(sel).innerHTML.search('january');
    // return document.querySelector(sel).innerHTML;
  }, 'body');

  console.log(r);

 // await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();

})();
