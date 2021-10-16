const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://atcoder.jp/');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.panel.panel-default')).map((hack) => ({
        name: hack.querySelector('.panel-title').innerText.trim(),
        organizer: hack.querySelector('p').innerText.trim(),
        link: hack.querySelector('li').innerText.trim(),
        // status: hack.querySelector('li.a').innerText.trim(),
        // link: hack.querySelector('a').href
    })));
    
    console.log(HackList);
    // fs.writeFileSync('./hackathonList.json', data);
    
    await browser.close();
    
})();