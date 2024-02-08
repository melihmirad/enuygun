/* globals gauge*/
"use strict";
const path = require('path');
const {
    screenshot,
    click,
    button,
    toRightOf,
    write,
    press
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


step("Select flight <arg0>", async function(flightType) {
	if (flightType!='Tek yön') {
        await click(flightType);
    }
});


step("Select flight from <arg0>", async function(from) {
	await click('Nereden');
    await write(from)
    await press('Enter')
});

step("Select flight where <arg0>", async function(where) {
	await click('Nereye');
    await write(where)
    await press('Enter')
});


step("Select flight when <arg0> and <arg1>", async function(departureDate, returnDate) {
	await click('Gidiş Tarihi')
    await click(departureDate)
    if (returnDate!=0) {
        await click('Dönüş Tarihi')
        await click(returnDate)
    }
    
});


step("Select flight traveler number <arg0>", async function(passenger) {
	if (passenger>1) {
        await click("Yolcu Sayısı, Kabin")
        for (let i = 1; i < passenger; i++) {
            await click(button(toRightOf(i.toString())))
        }
    }

});

step("Select flight cabin type <arg0>", async function(cabinType) {
	if (cabinType=="Business") {
        await click("Yolcu Sayısı, Kabin")
        await click(cabinType)
    }
    
});

step("Search flight", async function() {
	await click('Ucuz bilet bul', {waitForEvents: ['DOMContentLoaded']})
});