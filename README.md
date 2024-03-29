Kullanılan Frameworkler

Gauge (JavaScript) + Taiko 

https://docs.gauge.org/getting_started/installing-gauge.html?os=windows&language=javascript&ide=vscode

https://docs.taiko.dev/

ide - VS Code

Case 3 için enuygun web sitesindeki etkisi en yüksek olan nokta olarak ödeme işleminin yapılamaması olarak düşündüm.
Ancak canlı ortamda test caseleri oluşturduğum için denemelerimi yapamayacaktım. 
Bu yüzden ödeme işleminden sonra etkisi en yüksek olan bilinen bir rotada hiç bir uçuşun bulunamaması case'ini gerçekleştirdim.
Case içerisinde uçuş olduğunu kesin olarak bildiğimiz bir rotada(örneğin İstanbul-Ankara) arama yapılıyor.
Arama sonucunda sayfada "Üzgünüz, bu tarih için uçuş yok ya da tüm uçuşlar dolu!" yazısının olup olmadığı kontrol ediliyor.
Case'i kontrol edebilmek için de gerçekten uçuş olmadığını bildiğimiz bir rotada(örneğin Balıkesir-İzmir aynı gün gidiş dönüş) arama yapılıp sonucunda hata verdiği görülmektedir.


Quality Assurance Engineer
Case Study

İlk senaryomuzda senden www.enuygun.com altındaki Uçak Bileti ürünümüz üzerinde otomatik bir
test süreci hazırlamanı istiyoruz.
Bu süreci hazırlarken istediğin test kütüphanesini seçebilirsin.
Kullanacağın yazılım dili konusunda da tamamen özgürsün.
Hazırlayacağın test sürecinde aşağıdaki adımlarını takip etmeni bekliyoruz;

Case 1
1) İstanbul Ankara arası gidiş dönüş uçuş aratılmalı (tarih ve rota parametrik yapılmalı)
2) Uçuşların listelendiği sayfada Gidiş kalkış varış saatleri filtresinden kalkış saati 10:00 ile 18:00 arası
seçilmeli
3) Uçuşların kalkış saatlerinin 10:00 ile 18:00 arasında olduğu kontrol edilmeli

Case 2
1) İstanbul Ankara arası gidiş dönüş uçuş aratılmalı (tarih ve rota parametrik yapılmalı)
2) Uçuşların listelendiği sayfada Gidiş kalkış varış saatleri filtresinden kalkış saati 10:00 ile 18:00 arası
seçilmeli
3) Listelenen uçuşlarda Türk hava yolları uçuşları fiyatlarının sıralamasının artan şekilde geldiği
kontrol edilmeli

Case 3
1) Enuygun web sitesinde sıkıntı yaşanırsa impacti en yüksek olabileceğini düşündüğünüz noktayı
belirleyip bir otomasyon case'i hazırlanmalı


NOT: Arama ekranındaki alanların dışardan istenilen rotaya, tarihe, yolcu sayısına ve uçak sınıfına
göre seçilebiliyor olması gerekmektedir.

Gereksinimler
Raporlama tool’u kullanılacak.
Case’in nasıl çalıştırıldığı hakkında read.me dosyası yazılı olmalı
OOP yapısını kullanmanı önemsiyoruz.
Başarılar,

