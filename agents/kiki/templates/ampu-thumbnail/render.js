const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:720},deviceScaleFactor:+process.argv[3]||1});
await p.goto('file://'+process.cwd()+'/'+(process.argv[4]||'ampu-v2.html')+'');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
await p.screenshot({path:process.argv[2]});await b.close();})();
