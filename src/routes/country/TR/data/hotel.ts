const hotelsTR = [
    {
        "id": 1,
        "title": "Çırağan Palace Kempinski",
        "rating": 5,
        "description": "İstanbul Boğazı'nın kıyısında yer alan Çırağan Palace Kempinski, lüks ve ihtişamın simgesidir. 19. yüzyılda Osmanlı sarayı olarak inşa edilen bu otel, günümüzde dünyanın en prestijli otelleri arasında yer alır. Misafirlerine krallara layık bir konaklama deneyimi sunan Çırağan Palace, aynı zamanda dünya çapında bilinen restoranları ve spa olanakları ile de ünlüdür.",
        "image": "https://example.com/ciragan.jpg",
        "country": "TR",
        "reviews": 1500
    },
    {
        "id": 2,
        "title": "The Marmara Taksim",
        "rating": 4,
        "description": "İstanbul'un kalbi Taksim Meydanı'nda bulunan The Marmara Taksim, modern konforu ve merkezi konumu ile iş ve tatil amaçlı seyahat edenlerin tercih ettiği bir oteldir. Geniş odaları, boğaz manzaralı restoranı ve spa olanakları ile misafirlerine rahatlatıcı bir konaklama deneyimi sunar. Ayrıca, Taksim'deki canlı sosyal yaşam ve alışveriş merkezlerine yakınlığı ile dikkat çeker.",
        "image": "https://example.com/marmara.jpg",
        "country": "TR",
        "reviews": 1200
    },
    {
        "id": 3,
        "title": "D-Hotel Maris",
        "rating": 5,
        "description": "Muğla'nın Marmaris ilçesinde yer alan D-Hotel Maris, Ege ve Akdeniz'in kesiştiği noktada, doğa ile iç içe bir konumda bulunmaktadır. Lüks villaları, özel plajları ve muhteşem manzarası ile tanınan otel, hem huzurlu bir tatil hem de deniz sporları aktiviteleri için ideal bir yerdir. Michelin yıldızlı restoranları ve spa hizmetleri de otelin sunduğu ayrıcalıklar arasındadır.",
        "image": "https://example.com/dhotelmaris.jpg",
        "country": "TR",
        "reviews": 950
    },
    {
        "id": 4,
        "title": "Four Seasons Hotel Istanbul at Sultanahmet",
        "rating": 5,
        "description": "İstanbul'un tarihi yarımadasında, Sultanahmet Meydanı'na yürüme mesafesinde yer alan Four Seasons Hotel, lüks ve tarihi dokunun birleştiği bir konaklama deneyimi sunar. Osmanlı dönemi mimarisine sahip bu otel, misafirlerine Ayasofya ve Sultanahmet Camii'nin muhteşem manzarasını sunar. Ayrıca restoranları, sanat eserleriyle bezeli lobisi ve spa hizmetleri ile bilinir.",
        "image": "https://example.com/fourseasons.jpg",
        "country": "TR",
        "reviews": 1100
    },
    {
        "id": 5,
        "title": "Maxx Royal Kemer Resort",
        "rating": 5,
        "description": "Antalya Kemer'de yer alan Maxx Royal Kemer Resort, ultra lüks bir tatil köyüdür. Kendine ait özel plajı, geniş villaları ve lüks spa hizmetleri ile öne çıkan otel, aynı zamanda çocuklu aileler için sunduğu kapsamlı eğlence ve aktivite olanaklarıyla bilinir. Otelin sunduğu dünya mutfaklarından lezzetler ve özel golf sahası da misafirlerin ilgisini çeken unsurlar arasındadır.",
        "image": "https://example.com/maxxroyal.jpg",
        "country": "TR",
        "reviews": 1400
    },
    {
        "id": 6,
        "title": "Raffles Istanbul",
        "rating": 5,
        "description": "Zorlu Center'da yer alan Raffles Istanbul, modern mimarisi ve eşsiz manzarası ile şehrin lüks otellerinden biridir. Büyük odaları, kişiye özel hizmet anlayışı ve sanatsal dekorasyonları ile dikkat çeker. Oteldeki restoranlar, spa hizmetleri ve boğaz manzaralı teraslar, Raffles Istanbul'u özel kılan başlıca özelliklerdendir.",
        "image": "https://example.com/raffles.jpg",
        "country": "TR",
        "reviews": 1350
    },
    {
        "id": 7,
        "title": "Argos in Cappadocia",
        "rating": 5,
        "description": "Nevşehir Kapadokya'da yer alan Argos in Cappadocia, tarihi bir manastırın restore edilmesiyle otel haline getirilmiş eşsiz bir konaklama yeridir. Mağara odaları ve benzersiz manzarasıyla ünlü otel, misafirlerine sıra dışı bir deneyim sunar. Özellikle doğa ve tarih severler için ideal bir yerdir.",
        "image": "https://example.com/argos.jpg",
        "country": "TR",
        "reviews": 1150
    },
    {
        "id": 8,
        "title": "Six Senses Kaplankaya",
        "rating": 5,
        "description": "Muğla Bodrum'da yer alan Six Senses Kaplankaya, doğa ile lüksün buluştuğu bir tatil köyüdür. Ege Denizi'ne bakan muhteşem manzarası, organik yaşam felsefesi ve geniş spa hizmetleriyle tanınır. Sağlık odaklı bir tatil arayanlar için kapsamlı programlar sunan bu otel, çevre dostu bir tatil deneyimi yaşatır.",
        "image": "https://example.com/sixsenses.jpg",
        "country": "TR",
        "reviews": 1050
    },
    {
        "id": 9,
        "title": "Swissôtel The Bosphorus",
        "rating": 5,
        "description": "İstanbul Boğazı'na bakan Swissôtel The Bosphorus, geniş odaları ve lüks hizmetleri ile şehirde konaklamak isteyenlerin favori otellerinden biridir. Otelin sunduğu boğaz manzaralı restoranları, açık hava havuzları ve geniş spa merkezi, konuklarına üst düzey bir deneyim sunar.",
        "image": "https://example.com/swissotel.jpg",
        "country": "TR",
        "reviews": 1300
    },
    {
        "id": 10,
        "title": "Titanic Deluxe Golf Belek",
        "rating": 4,
        "description": "Antalya Belek'te yer alan Titanic Deluxe Golf Belek, lüks golf sahaları, büyük havuzları ve geniş odaları ile dikkat çeken bir tatil köyüdür. Hem golf severler hem de aileler için kapsamlı olanaklar sunan otel, denize sıfır konumu ve çocuklar için sunduğu aktivitelerle popülerdir.",
        "image": "https://example.com/titanicbelek.jpg",
        "country": "TR",
        "reviews": 1000
    }
]
