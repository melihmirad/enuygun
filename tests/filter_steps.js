/* globals gauge*/
"use strict";
const path = require('path');
const {
    screenshot,
    click,
    checkBox,
    below,
    above,
    $
} = require('taiko');
const assert = require("assert");



// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};


step("Select Departure / arrival times filter", async function() {
	await click($('//*[@id="SearchRoot"]/div[2]/div[1]/div[3]/div[2]/div[1]/span'))
    await click('Gidiş kalkış / varış saatleri')

});

step("Select Departure times filter", async function() {
	await click($('//*[@id="SearchRoot"]/div[2]/div[1]/div[3]/div[2]/div[1]/span'))
    await click('Kalkış / varış saatleri')
});

step("Select time <arg0> and <arg1>", async function(time1, time2) {
	
    // Fullscreen properties
    //await click({x : 520, y : 610})
    //await click({x : 600, y : 610})

    // 1440*900 properties
    await click({x : 270, y : 610})
    await click({x : 350, y : 610})

});


step("Select Airlines <arg0>", async function(airlines) {
	await click('Havayolları')

    if (airlines=='Türk Hava Yolları' || airlines=='THY') {
        await checkBox({id:'TKairlines'}).check()

    }else if (airlines=='Pegasus' || airlines=='PGS') {
        await checkBox({id:'PCairlines'}).check()
        
    }else if (airlines=='AnadoluJet' || airlines=='AJ') {
        await checkBox({id:'AJairlines'}).check()
    }
    
});


