const adventuresTR = [
    {
        "id": 1,
        "title": "Fethiye Yamaç Paraşütü",
        "rating": 5,
        "description": "Fethiye, özellikle Babadağ'dan yapılan yamaç paraşütü ile ünlüdür. Dünyanın en iyi yamaç paraşütü noktalarından biri olarak kabul edilen bu yer, adrenalin tutkunları için eşsiz bir deneyim sunar. Ölüdeniz'in muhteşem manzarası eşliğinde 2000 metre yükseklikten yapılan uçuşlar, hem yerli hem de yabancı turistlerin ilgisini çeker.",
        "image": "https://example.com/fethiyeparagliding.jpg",
        "country": "TR",
        "reviews": 4700
    },
    {
        "id": 2,
        "title": "Kaş Dalış",
        "rating": 5,
        "description": "Kaş, Türkiye'nin en popüler dalış noktalarından biridir. Kristal berraklığındaki denizi, su altı mağaraları ve batıkları ile dalış meraklıları için unutulmaz bir deneyim sunar. Özellikle MS 4. yüzyıldan kalma batıklar ve antik amforalar dalgıçların ilgisini çeker. Hem profesyonel hem de yeni başlayanlar için uygun dalış okulları ve rehberler mevcuttur.",
        "image": "https://example.com/kasdiving.jpg",
        "country": "TR",
        "reviews": 5200
    },
    {
        "id": 3,
        "title": "Kapadokya Balon Turu",
        "rating": 5,
        "description": "Kapadokya'nın eşsiz peribacaları ve doğal oluşumları, dünyanın en ünlü sıcak hava balonu destinasyonlarından biridir. Sabahın erken saatlerinde düzenlenen balon turları, güneşin doğuşu sırasında bölgenin büyüleyici manzarasını yukarıdan izleme fırsatı sunar. Macera ve doğa tutkunları için unutulmaz bir deneyimdir.",
        "image": "https://example.com/cappadociaballoon.jpg",
        "country": "TR",
        "reviews": 6000
    },
    {
        "id": 4,
        "title": "Kaçkar Dağları Trekking",
        "rating": 5,
        "description": "Kaçkar Dağları, Türkiye'nin kuzeydoğusunda yer alan ve trekking severler için bir cennettir. Bölgedeki doğa yürüyüşleri, yemyeşil ormanlar, göller ve buzul vadilerinin muhteşem manzarası eşliğinde yapılır. Kaçkar Dağları Milli Parkı'nda çeşitli zorluk seviyelerinde yürüyüş rotaları bulunur ve macera tutkunları için doğanın içinde keşif dolu bir deneyim sunar.",
        "image": "https://example.com/kackartrekking.jpg",
        "country": "TR",
        "reviews": 4300
    },
    {
        "id": 5,
        "title": "Rize Rafting",
        "rating": 4,
        "description": "Rize'nin Fırtına Deresi, Türkiye'nin en popüler rafting noktalarından biridir. Karadeniz'in yağmurlu doğası ile beslenen nehirde, özellikle bahar aylarında adrenalin dolu rafting turları düzenlenir. Hem profesyonel hem de amatör raftingciler için uygun parkurlar mevcuttur ve bölge, doğa ve macera tutkunlarını cezbetmektedir.",
        "image": "https://example.com/rizerafting.jpg",
        "country": "TR",
        "reviews": 3800
    },
    {
        "id": 6,
        "title": "Likya Yolu Yürüyüşü",
        "rating": 5,
        "description": "Türkiye'nin en uzun yürüyüş rotalarından biri olan Likya Yolu, Fethiye'den Antalya'ya kadar uzanan 540 kilometrelik bir parkurdur. Tarihi ve doğal güzellikleri bir arada sunan bu rota, antik Likya kalıntıları, Akdeniz manzarası ve doğa ile iç içe geçen patikalarıyla yürüyüş severler için ideal bir macera sunar.",
        "image": "https://example.com/likyayolu.jpg",
        "country": "TR",
        "reviews": 4500
    },
    {
        "id": 7,
        "title": "Olympos Dağcılık",
        "rating": 4,
        "description": "Antalya'da yer alan Olympos Dağı, hem doğal güzellikleri hem de mitolojik geçmişi ile dikkat çeker. Dağın eteklerinde doğa yürüyüşü ve tırmanış rotaları bulunur. Olimpos'un zirvesine tırmanarak, Toros Dağları ve Akdeniz manzarasının keyfini çıkarabilirsiniz. Ayrıca, bölgedeki antik Olympos kenti de keşfedilecek önemli yerler arasında yer alır.",
        "image": "https://example.com/olympostrekking.jpg",
        "country": "TR",
        "reviews": 3400
    },
    {
        "id": 8,
        "title": "Gölcük Gölü Kampı",
        "rating": 4,
        "description": "Bolu'nun Gölcük Gölü, kamp ve doğa severler için sakin ve huzurlu bir kaçış noktasıdır. Göl çevresinde yürüyüş yapabilir, çadır kurarak doğanın tadını çıkarabilirsiniz. Macera severler için çeşitli yürüyüş ve keşif rotaları bulunan bu bölge, dört mevsim boyunca farklı güzellikler sunar.",
        "image": "https://example.com/golcukcamp.jpg",
        "country": "TR",
        "reviews": 3000
    },
    {
        "id": 9,
        "title": "Aladağlar Dağcılık ve Kaya Tırmanışı",
        "rating": 5,
        "description": "Türkiye'nin en önemli dağcılık merkezlerinden biri olan Aladağlar, Niğde ve Kayseri arasında yer alır. Yüksek zirveleri ve zorlu parkurlarıyla dağcıların ilgisini çeken bu bölge, kaya tırmanışı, trekking ve kampçılık için ideal bir destinasyondur. Özellikle Demirkazık zirvesi, dağcıların gözdesidir.",
        "image": "https://example.com/aladaglarclimbing.jpg",
        "country": "TR",
        "reviews": 4600
    },
    {
        "id": 10,
        "title": "Dalaman Nehri Kano",
        "rating": 4,
        "description": "Muğla'da bulunan Dalaman Nehri, kano ve rafting sporları için Türkiye'nin en popüler noktalarından biridir. Nehir boyunca yapılan kano turları, hem doğanın hem de maceranın keyfini çıkarmak isteyenler için mükemmel bir aktivite sunar. Bahar aylarında su seviyesi yükseldiğinde adrenalin dolu bir deneyim yaşanır.",
        "image": "https://example.com/dalamankano.jpg",
        "country": "TR",
        "reviews": 3500
    }
]
