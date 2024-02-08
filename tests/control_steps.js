/* globals gauge*/
"use strict";
const path = require('path');
const {
    screenshot,
    $,
    text
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


step("Control times", async function() {

    var strFirst= '//*[@id="flight-0"]/div[1]/div[1]/div/div[3]/div[1]/div[1]'
    var departureTimeStr = await $(strFirst).text()
    var str  = ''
    var str1 = '//*[@id="flight-'
    var str2 = '"]/div/div[1]/div/div[3]/div[1]/div[1]'
    var str3 = '"]/div/div[2]/div/div[3]/div[1]/div[1]'
    var strLast = ''

    var i=1
    var continueFlag=true

    // Ekranda çıkan tüm uçuşların kalkış saatlerinin alınabilmesi ve girdiğimiz saat filtresine uygun olduğunu kontrol edebilmek için do-while yapısı kullanıldı
    // Alınan xPath'lere göre belirli bir pattern oluşturabilmek için do-while içerisinde string birleştirmeler kullanıldı
    // xPath içerisindeki id ile flight-0, flight-1, flight-n şeklinde bir pattern oluşturuldu

    do {

        var departureTime=(parseInt(departureTimeStr))

        departureTimeAssertAndLog(i, departureTime, departureTimeStr)
        
        str =str1 + i.toString() + str2

        if (await $(str).exists()) {
            i++
            departureTimeStr = await $(str).text()

        }else{
            strLast = str1 + i.toString() + str3

            if (await $(strLast).exists()) {
                i++
                departureTimeStr = await $(strLast).text()

                departureTimeAssertAndLog(i, departureTime, departureTimeStr)
            }
            continueFlag=false
        }
            
    } while (continueFlag);
    
    async function departureTimeAssertAndLog(i, departureTime, departureTimeStr) {

        await assert.ok(departureTime>=10 && departureTime<=18)
        console.log(i +". uçuş saati "+ departureTimeStr)
        return 0
        
    }
  

});


step("Control prices", async function() {
	
    var strFirst = '//*[@id="flight-0"]/div[1]/div[1]/div/div[4]/div/span[1]'
    var str  = ''
    var str1 = '//*[@id="flight-'
    var str2 = '"]/div/div[1]/div/div[4]/div/span[1]'
    var str3 = '"]/div/div[2]/div/div[4]/div/span[1]'
    var strLast = ''

    var priceStr = (await $(strFirst).text()).replace('.','')
    var price1 = (parseInt(priceStr))
    var price2 = price1
    
    var i=1
    var continueFlag=true

    priceAssertAndLog(i, price1, price2)

    // Ekranda çıkan tüm uçuşların ücret bilgilerinin alınabilmesi ve ücretlerin sıralamasının artan şekilde olduğunu kontrol edebilmek için do-while yapısı kullanıldı
    // Alınan xPath'lere göre belirli bir pattern oluşturabilmek için do-while içerisinde string birleştirmeler kullanıldı
    // xPath içerisindeki id ile flight-0, flight-1, flight-n şeklinde bir pattern oluşturuldu
    // İlk uçuş ücreti ile altındaki ücret <= ile kontrol edildi, sıra bir altındaki ücretin kontrolü ile devam etti

    do {
        
        str =str1 + i.toString() + str2

        if (await $(str).exists()) {
            i++
            priceStr = (await $(str).text()).replace('.','')
            
            price2=(parseInt(priceStr))
            priceAssertAndLog(i, price1, price2)

        }else{
            
            strLast = str1 + i.toString() + str3
            
            if (await $(strLast).exists()) {
                i++
                priceStr = (await $(strLast).text()).replace('.','')
                
                price2=(parseInt(priceStr))
                priceAssertAndLog(i, price1, price2)
                
            }
            continueFlag=false
            
        }
        price1=price2
        
    } while (continueFlag);

    async function priceAssertAndLog(i, price1, price2) {

        await assert.ok(price1<=price2)
        console.log(i +". uçuş ücreti "+ price2 + ',99 TL')
        return 0
    }


});

step("Control flights", async function() {
	var flights= await text('bu tarih için uçuş yok').exists()
    // Sayfada 'Üzgünüz, bu tarih için uçuş yok ya da tüm uçuşlar dolu!' şeklinde bir hata veriliyor. bu text'in bir kısmı ile assert yapıldı

    await assert.ok(!flights)

});