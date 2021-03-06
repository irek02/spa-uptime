const puppeteer = require('puppeteer');

const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ping', async (req, res) => res.json(await ping(req)));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const ping = async (req) => {

  console.log(req.query.url);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  const page = await browser.newPage();

  await page.goto('https://irek02.github.io/habit-tracker/#/calendar/2018/0');

  const r = await page.evaluate((sel) => {
    return document.querySelector(sel).innerHTML.search('january');
    // return document.querySelector(sel).innerHTML;
  }, 'body');

  const r2 = await page.metrics();

  await browser.close();

  return r2;

};
