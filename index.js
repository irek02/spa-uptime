const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  // const browser = await puppeteer.launch({
  //   //headless: false
  // });

  const page = await browser.newPage();

  await page.goto('http://codingbootcamponline.com/signup/');

  const r = await page.evaluate((sel) => {
    return document.querySelector(sel).innerHTML.search('Once enough people sign up');
  }, 'body');

  console.log(r);

 // await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();

})();
