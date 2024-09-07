const foodsTR = [
    {
        "id": 1,
        "title": "Nusr-Et Steakhouse",
        "rating": 5,
        "description": "Nusr-Et Steakhouse, ünlü şef Nusret Gökçe'nin sahip olduğu ve dünya çapında tanınan bir et restoran zinciridir. Etleri tuzlama şekliyle ünlü olan Nusret, bu sunumuyla sosyal medyada fenomen olmuştur. İstanbul Etiler'deki orijinal şubesinde sunduğu yüksek kaliteli biftekler, kuzu pirzolalar ve özel tatlarla tanınır. Restoran, hem yerel hem de uluslararası ünlülerin uğrak noktasıdır.",
        "image": "https://example.com/nusret.jpg",
        "country": "TR",
        "reviews": 5000
    },
    {
        "id": 2,
        "title": "Mikla",
        "rating": 5,
        "description": "Mikla, İstanbul'un en ünlü fine dining restoranlarından biri olup, modern Türk mutfağını İskandinav dokunuşlarıyla birleştirir. Restoranın sahibi ve şefi Mehmet Gürs, Mikla'yı uluslararası alanda tanınan bir marka haline getirmiştir. İstanbul'un çarpıcı manzarasına sahip olan Mikla, zengin şarap menüsü ve özgün yemek sunumlarıyla dikkat çeker.",
        "image": "https://example.com/mikla.jpg",
        "country": "TR",
        "reviews": 4700
    },
    {
        "id": 3,
        "title": "Ciya Sofrası",
        "rating": 4,
        "description": "Ciya Sofrası, İstanbul'un Kadıköy semtinde bulunan ve geleneksel Anadolu mutfağının en güzel örneklerini sunan bir restoran. Şef Musa Dağdeviren, Anadolu'nun dört bir yanından unutulmaya yüz tutmuş yemek tariflerini bu restoranda yaşatıyor. Menüde, farklı bölgelere özgü kebaplar, dolmalar ve pilavlar gibi otantik lezzetler yer alıyor.",
        "image": "https://example.com/ciya.jpg",
        "country": "TR",
        "reviews": 3800
    },
    {
        "id": 4,
        "title": "Pandeli",
        "rating": 4,
        "description": "İstanbul'daki tarihi Mısır Çarşısı'nda yer alan Pandeli, 1901'den beri hizmet veren ikonik bir restorandır. Osmanlı ve Türk mutfağının klasik tatlarını sunan Pandeli, sultanlara layık yemek sunumlarıyla bilinir. Özellikle kuzu tandır, hünkar beğendi ve güveçleri oldukça popülerdir.",
        "image": "https://example.com/pandeli.jpg",
        "country": "TR",
        "reviews": 2700
    },
    {
        "id": 5,
        "title": "Zubeyir Ocakbaşı",
        "rating": 5,
        "description": "Zubeyir Ocakbaşı, İstanbul'un Beyoğlu semtinde yer alan ve lezzetli kebaplarıyla ünlü olan bir restorandır. Restoranda, etler geleneksel ocakbaşında pişirilir ve yanında Türk mutfağının mezeleri sunulur. Zubeyir, İstanbul'da kebap sevenlerin ilk tercihlerinden biridir.",
        "image": "https://example.com/zubeyir.jpg",
        "country": "TR",
        "reviews": 3300
    },
    {
        "id": 6,
        "title": "Beyti",
        "rating": 5,
        "description": "Beyti, İstanbul'da 1945 yılında kurulan ve Türk mutfağının en klasik kebap restoranlarından biri olarak bilinir. Restoranın adını taşıyan Beyti kebabı, restoranın en ünlü yemeğidir. Beyti'nin menüsü geleneksel Türk yemekleri ve kebaplar üzerine kurulmuştur.",
        "image": "https://example.com/beyti.jpg",
        "country": "TR",
        "reviews": 4500
    },
    {
        "id": 7,
        "title": "Asitane",
        "rating": 4,
        "description": "Asitane, İstanbul'da Osmanlı Saray mutfağını deneyimleyebileceğiniz eşsiz bir restorandır. Restoranda sunulan yemekler, 15. ve 19. yüzyıllar arasında Osmanlı İmparatorluğu'nun saraylarında yapılan tariflere dayanmaktadır. Kuzu yemekleri, hünkar beğendi ve tatlılar, menünün öne çıkan lezzetlerindendir.",
        "image": "https://example.com/asitane.jpg",
        "country": "TR",
        "reviews": 2900
    },
    {
        "id": 8,
        "title": "Güney Restaurant",
        "rating": 4,
        "description": "Güney Restaurant, İstanbul'un Galata semtinde yer alan, geleneksel Türk yemekleri sunan tarihi bir mekandır. Et ve deniz ürünleri menüsünde yer alan lezzetler, yerel malzemeler kullanılarak hazırlanır. Restoranın özellikle karides güveci ve iskender kebabı öne çıkar.",
        "image": "https://example.com/guney.jpg",
        "country": "TR",
        "reviews": 2200
    },
    {
        "id": 9,
        "title": "Karaköy Lokantası",
        "rating": 5,
        "description": "Karaköy Lokantası, modern bir Türk meyhanesi atmosferi sunan ve lezzetli mezeleriyle tanınan popüler bir restorandır. Hem yerel halk hem de turistler için favori bir durak olan bu mekanda, deniz ürünleri ve et yemekleri öne çıkar. Restoranın dekorasyonu ve atmosferi de geleneksel ile moderni bir araya getirir.",
        "image": "https://example.com/karakoy.jpg",
        "country": "TR",
        "reviews": 3500
    },
    {
        "id": 10,
        "title": "7 Mehmet",
        "rating": 5,
        "description": "Antalya'da yer alan 7 Mehmet, bölgenin en ünlü restoranlarından biridir ve yerel Akdeniz mutfağının en güzel örneklerini sunar. Taze deniz ürünleri, zeytinyağlılar ve bölgesel kebaplar, menünün öne çıkan lezzetleridir. Antalya'da gurme bir deneyim arayanlar için 7 Mehmet, kaçırılmaması gereken bir yerdir.",
        "image": "https://example.com/7mehmet.jpg",
        "country": "TR",
        "reviews": 4100
    },
    {
        "id": 11,
        "title": "Uludağ Kebapçısı Cemal & Cemil Usta",
        "rating": 5,
        "description": "Bursa'da yer alan bu ünlü kebap restoranı, İskender kebabının en otantik halini sunan mekanlardan biridir. Uludağ Kebapçısı, kuzu eti ve tereyağı ile hazırlanan bu klasik yemeği sunmakta uzun yıllara dayanan bir geleneğe sahiptir.",
        "image": "https://example.com/uludagkebap.jpg",
        "country": "TR",
        "reviews": 3200
    },
    {
        "id": 12,
        "title": "Hünkar",
        "rating": 4,
        "description": "Hünkar, İstanbul'da geleneksel Türk mutfağını yaşatan bir restoran olup, Osmanlı döneminden gelen tariflerle hazırlanan yemekleri sunar. Özellikle hünkar beğendi ve fırında kuzu gibi klasik Türk yemekleriyle ünlüdür.",
        "image": "https://example.com/hunkar.jpg",
        "country": "TR",
        "reviews": 2800
    },
    {
        "id": 13,
        "title": "Hatay Medeniyetler Sofrası",
        "rating": 4,
        "description": "Hatay mutfağının zengin lezzetlerini İstanbul'a taşıyan Hatay Medeniyetler Sofrası, kebaplar, mezeler ve tatlılarıyla ünlüdür. Özellikle zahter salatası, humus ve tepsi kebabı gibi Hatay'a özgü tatlar menünün yıldızları arasındadır.",
        "image": "https://example.com/hataymedeniyetler.jpg",
        "country": "TR",
        "reviews": 3400
    },
]
