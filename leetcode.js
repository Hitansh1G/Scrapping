const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://leetcode.com/contest/');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.contest-cards.row')).map((hack) => ({
        name: hack.querySelector('div.card-title').innerText.trim(),
        time: hack.querySelector('div.intro').innerText.trim(),
        // status: hack.querySelector('i').innerText.trim(),
        link: "https://leetcode.com/contest/"
    })));
    
    console.log(HackList);
    // fs.writeFileSync('./hackathonList.json', data);
    
    await browser.close();
    
})();