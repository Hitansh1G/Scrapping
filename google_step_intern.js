const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://buildyourfuture.withgoogle.com/internships/');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.h-c-grid__col.h-c-grid__col--6.h-c-grid__col-l--4')).map((hack) => ({
        name: hack.querySelector('h3').innerText.trim(),
        company_name: hack.querySelector('.pas-metadata.pas-metadata--horizontal').innerText.trim(),
        link: hack.querySelector('a').href
    })));
    
    console.log(HackList);
    // fs.writeFileSync('./hackathonList.json', data);
    
    await browser.close();
    
})();