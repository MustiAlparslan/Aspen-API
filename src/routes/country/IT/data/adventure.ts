const adventuresIT = [
    {
        "id": 1,
        "title": "Dolomitler Dağcılık",
        "rating": 5,
        "description": "İtalya'nın kuzeyinde yer alan Dolomitler, dünya çapında tanınan dağcılık ve trekking destinasyonlarından biridir. Muhteşem manzaralar, derin vadiler ve yüksek zirvelerle dolu bu dağlar, hem deneyimli dağcılar hem de doğa yürüyüşü severler için harika parkurlar sunar. Yaz aylarında dağcılık ve kaya tırmanışı, kış aylarında ise kayak yapma imkanı bulunur.",
        "image": "https://example.com/dolomitesclimbing.jpg",
        "country": "IT",
        "reviews": 500
    },
    {
        "id": 2,
        "title": "Cinque Terre Trekking",
        "rating": 5,
        "description": "Cinque Terre, İtalya'nın kuzeybatı kıyısında yer alan beş köyden oluşan bir bölgedir. Tepelerde yer alan bu köyler arasında uzanan trekking parkurları, Akdeniz'in eşsiz manzarasıyla yürüyüş severlere unutulmaz bir deneyim sunar. Renkli evler ve dik yamaçlar arasında yapılan yürüyüşler, doğa ve kültürün mükemmel bir birleşimidir.",
        "image": "https://example.com/cinqueterretrekking.jpg",
        "country": "IT",
        "reviews": 450
    },
    {
        "id": 3,
        "title": "Toskana Bisiklet Turları",
        "rating": 4,
        "description": "Toskana, İtalya'nın en güzel kırsal bölgelerinden biri olup, bisiklet turları için mükemmel bir yerdir. Yeşil tepeler, üzüm bağları ve zeytin ağaçları ile dolu bu bölgede bisiklet sürmek, hem manzaranın hem de Toskana'nın eşsiz mutfağının tadını çıkarma imkanı sunar. Ayrıca, bölgedeki tarihi köyleri ve şatoları keşfetmek bisikletle çok daha keyiflidir.",
        "image": "https://example.com/toscanabiking.jpg",
        "country": "IT",
        "reviews": 300
    },
    {
        "id": 4,
        "title": "Amalfi Kıyısı Yürüyüş Turları",
        "rating": 5,
        "description": "Amalfi Kıyısı, İtalya'nın en ünlü sahil bölgelerinden biridir ve yürüyüş turları için harika parkurlara sahiptir. Dik yamaçlar boyunca uzanan patikalar, Akdeniz'in büyüleyici manzarası eşliğinde yürüyüş severlere muhteşem bir deneyim sunar. Positano, Amalfi ve Ravello gibi ünlü köyleri geçerek deniz manzarasının tadını çıkarabilirsiniz.",
        "image": "https://example.com/amalfihiking.jpg",
        "country": "IT",
        "reviews": 375
    },
    {
        "id": 5,
        "title": "Sardinya Kaya Tırmanışı",
        "rating": 5,
        "description": "Sardinya Adası, İtalya'nın en güzel kaya tırmanış destinasyonlarından biridir. Adanın kuzeydoğusunda bulunan Cala Gonone bölgesi, kristal berraklığındaki denizi ve dramatik kaya oluşumlarıyla ünlüdür. Deniz manzarası eşliğinde kaya tırmanışı yapmak, macera severler için unutulmaz bir deneyim sunar.",
        "image": "https://example.com/sardiniaclimbing.jpg",
        "country": "IT",
        "reviews": 400
    },
    {
        "id": 6,
        "title": "Etna Yanardağı Tırmanışı",
        "rating": 5,
        "description": "Etna, Avrupa'nın en aktif yanardağıdır ve macera tutkunları için heyecan verici bir tırmanış rotası sunar. Sicilya'nın doğusunda yer alan bu volkan, hem deneyimli dağcılar hem de doğa severler için farklı zorluk seviyelerinde parkurlar sunmaktadır. Zirveye tırmandığınızda, Akdeniz'in ve lav akıntılarının nefes kesen manzarası sizi bekliyor.",
        "image": "https://example.com/etnaclimb.jpg",
        "country": "IT",
        "reviews": 425
    },
    {
        "id": 7,
        "title": "Garda Gölü Su Sporları",
        "rating": 4,
        "description": "İtalya'nın en büyük gölü olan Garda Gölü, su sporları tutkunları için mükemmel bir destinasyondur. Rüzgar sörfü, yelken ve kano gibi aktiviteler için ideal olan bu gölde, aynı zamanda kıyı boyunca bisiklet sürmek ve yürüyüş yapmak da mümkündür. Gölün etrafındaki doğal güzellikler ve tarihi köyler, spor yaparken keşfetmek için harika fırsatlar sunar.",
        "image": "https://example.com/gardalakewatersports.jpg",
        "country": "IT",
        "reviews": 380
    },
    {
        "id": 8,
        "title": "Aosta Vadisi Kayak",
        "rating": 5,
        "description": "Aosta Vadisi, Alpler'in eteklerinde yer alan İtalya'nın en popüler kayak destinasyonlarından biridir. Kış aylarında Avrupa'nın dört bir yanından kayak severler buraya akın eder. Courmayeur ve Cervinia gibi kayak merkezleri, geniş pistleri ve modern tesisleri ile bilinir. Ayrıca, vadi boyunca yürüyüş ve bisiklet parkurları da bulunmaktadır.",
        "image": "https://example.com/aostaskiresort.jpg",
        "country": "IT",
        "reviews": 500
    },
    {
        "id": 9,
        "title": "Stromboli Yanardağı Tırmanışı",
        "rating": 4,
        "description": "Stromboli, Akdeniz'in ortasında yer alan aktif bir volkan adasıdır. Geceleri zirveye yapılan tırmanışlar, lav püskürmelerinin yarattığı ışık gösterisi ile unutulmaz bir deneyim sunar. Bu heyecan verici tırmanış, macera severler için Akdeniz'in en özel doğa deneyimlerinden biridir.",
        "image": "https://example.com/stromboliclimbing.jpg",
        "country": "IT",
        "reviews": 300
    },
    {
        "id": 10,
        "title": "Puglia Bisiklet Turu",
        "rating": 4,
        "description": "İtalya'nın güneyinde yer alan Puglia bölgesi, bisiklet turları için mükemmel bir yerdir. Zeytin ağaçları ve üzüm bağları ile kaplı kırsal bölgeler arasında sürülen bisiklet, bölgedeki tarihi köyleri ve muhteşem sahil şeridini keşfetmek için harika bir yoldur. Puglia'nın geleneksel lezzetlerini de keşfetmek, bu turu daha da özel kılar.",
        "image": "https://example.com/pugliabiking.jpg",
        "country": "IT",
        "reviews": 320
    }
]
