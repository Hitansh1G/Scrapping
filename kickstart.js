const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://codingcompetitions.withgoogle.com/kickstart/schedule');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.schedule > .schedule-row__upcoming')).map((hack) => ({
        name: hack.querySelector('.schedule-row-cell').innerText.trim(),
        //isme sb khudd se likhna ha
        
    })));
    
    console.log(HackList);
    // fs.writeFileSync('./hackathonList.json', data);
    
    await browser.close();
    
})();