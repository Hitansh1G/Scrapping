const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/codingcompetitions/hacker-cup/');
    
    const HackList = await page.evaluate(() => Array.from(document.querySelectorAll('.gqu1rtix.in34rr1c.cnecu6bb.ok27frqb.netnrlqe.tsfmy497.t1z1sk43')).map((hack) => ({
        name: hack.querySelector('.ellipsis').innerText.trim(),
        // held_at: hack.querySelector('p').innerText.trim(),
        // link: hack.querySelector('li').innerText.trim(),
        // status: hack.querySelector('#text').innerText.trim(),
        // link: hack.querySelector('.riwfj454.hrg2soyd.del4fw6l.p1z4a5bx.nn3yqo3z.k4b72jed.pyqtz6db.shox2lqo.s4vssupd.m5g38c0b.q9e3x9z1.cdzyqxi1.ei1sk6y2.o9gppr3v.f2nhpvj7._3-8z').href
    })));
    
    console.log(HackList);
    // fs.writeFileSync('./hackathonList.json', data);
    
    await browser.close();
    
})();