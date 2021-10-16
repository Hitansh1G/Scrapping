const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://codeforces.com/contests');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.datatable > div:nth-chils(6) > table > tbody > tr')).map((hack) => ({
        // name: hack.querySelector('td:nth-child(1)').innerText.trim(),
        name: hack.querySelector('.left').innerText.trim(),
        // startDate: hack.querySelector('a.href').innerText.trim(),
        // status: hack.querySelector('.eDdfhl').innerText.trim(),
        // length: hack.querySelector('a').innerText.trim(),
        // link: hack.querySelector('.hcmcER').href
    })));
    
    console.log(HackList);
    // fs.writeFileSync('./hackathonList.json', data);
    
    await browser.close();
    
})();