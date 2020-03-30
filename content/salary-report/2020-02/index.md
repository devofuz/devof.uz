---
title: Soʻrovnoma natijalari. 2020-yil fevral.
date: 2020-03-05T16:19:24+05:00
---

2020-yilning fevral oyida AT sohasidagi mutaxassislarning maoshlari boʻyicha soʻrovnoma oʻtkazildi. Bitly servisi orqali yaratilgan havola [bit.ly/uzb-it-salaries-2020-02](http://bit.ly/uzb-it-salaries-2020-02) _959 marta_ bosilgan. Bu havola Google Formsʼdagi soʻrovnomaga yoʻnaltirilgan.

Soʻrovnoma _428 ta_ javob oldi. Lekin ularning ichidan bir nechta takroriy (hamma javoblar bir xil va 1-2 minutning ichida yuborilgan), haqiqatdan yiroq boʻlganlari (oyiga _\$100 000_ kabi) va maosh haqidagi maʼlumotlar toʻldirilmaganlari olib tashlandi va _410 ta javob_ quyidagi statistika maʼlumotlarida foydalanildi.

Umid qilamiz, keyingi soʻrovnomada koʻproq odam qatnashadi va statistika haqiqatga yaqinlashib, bemalol suyanish mumkin boʻlgan manbaga aylanadi.

Eʼtibor berish lozim:

1. Maoshlar soddaroq koʻrinishi uchun AQSh dollarida keltirilyapti. Soʻmda koʻrsatilgan maoshlar ham oʻrtacha 9 500 soʻm shart bilan dollarga oʻtkazilgan.
2. Umumiy boʻlgan oʻrtacha maoshlar _mediana_ orqali hisoblangan (_oʻrta arifmetik_ emas!) [Mediana](https://en.wikipedia.org/wiki/Median) — statistika va ehtimollar nazariyasida ishlatiladigan, sonlar toʻplamini ikkiga (quyi va yuqori) qismlarga ajratadigan qiymat. Masalan, agar 5 odamdan 4 tasi maoshni $5 va 1 kishi $1000 koʻrsatganda oʻrta arifmetik $204 boʻladi, xuddi shu sonlarning medianasi esa $5.

## Ishtirokchi portreti

Ishtirokchilarning deyarli hammasi Toshkentda yashashi maʼlum boʻldi.

<canvas id="chart-regions"></canvas>

<script>
    var ctx = document.getElementById('chart-regions').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Andijon viloyati',
                'Buxoro viloyati',
                'Jizzax viloyati',
                'Qashqadaryo viloyati',
                'Navoiy viloyati',
                'Namangan viloyati',
                'Qoraqalpogʻiston Respublikasi',
                'Samarqand viloyati',
                'Surxandaryo viloyati',
                'Toshkent shahri',
                'Toshkent viloyati',
                'Fargʻona viloyati',
                'Xorazm viloyati'
            ],
            datasets: [{
                label: 'Ishtirokchilar',
                data: [4, 1, 2, 2, 1, 5, 2, 6, 2, 358, 10, 10, 7],
                borderWidth: 0,
                backgroundColor: '#708090'
            }]
        }
    });
</script>

Ishtirokchilarning _3 foizi_ ayollar:

<canvas id="chart-gender"></canvas>

<script>
    var ctx = document.getElementById('chart-gender').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Ayollar',
                'Erkaklar'
            ],
            datasets: [{
                label: 'Ishtirokchilar',
                data: [13, 397],
                borderWidth: 0,
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)']
            }]
        },
        options: {
            cutoutPercentage: 50
        }
    });
</script>

Ishtirokchilarning eng koʻpi 20–29 yosh oraligʻida:

<canvas id="chart-age-intervals"></canvas>

<script>
    var ctx = document.getElementById('chart-age-intervals').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                '10—19 yosh',
                '20—29 yosh',
                '30—39 yosh',
                '40—49 yosh'
            ],
            datasets: [{
                label: 'Ishtirokchilar',
                data: [11, 271, 121, 7],
                borderWidth: 0,
                backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
            }]
        },
        options: {
            cutoutPercentage: 50
        }
    });
</script>

Ingliz tilini bilish darajasi qisman maoshga taʼsir qilyapti:

<canvas id="chart-english-levels"></canvas>

<script>
    var ctx = document.getElementById('chart-english-levels').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Beginner',
                'Intermediate',
                'Upper Intermediate',
                'Advanced'
            ],
            datasets: [{
                label: 'Maosh',
                data: [589, 800, 1053, 1000],
                borderWidth: 0,
                backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
            }]
        }
    });
</script>

Maʼlumot esa topiladigan daromadga toʻgʻridan-toʻgʻri taʼsir qilmayapti:

<canvas id="chart-education"></canvas>

<script>
    var ctx = document.getElementById('chart-education').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Oʻrta',
                'Kollej',
                'Yakunlanmagan oliy',
                'Oliy'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [17, 34, 85, 274],
                    borderWidth: 0,
                    backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
                },
                {
                    label: 'Maosh',
                    data: [1053, 500, 632, 905],
                    borderWidth: 0,
                    backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
                }
            ]
        }
    });
</script>

## Maosh va tajriba

Maosh olinadigan valyuta:

- 240 ta odam — soʻmda;
- 170 ta — AQSh dollarida.

Lavozim boʻyicha ishtirokchilar va ularning mediana maoshlari:

<canvas id="chart-positions-and-salaries" style="height: 600px"></canvas>

<script>
    var ctx = document.getElementById('chart-positions-and-salaries').getContext('2d');
    var backgroundColors = ['#C09BD8', '#E6E4CE', '#646881', '#686963', '#EED7C5', '#E2856E', '#CDACA1', '#CD8987', '#F1BB87', '#ABE188', '#5B8E7D', '#564256', '#7BA098', '#423B0B', '#BFB7B6', '#2C0703', '#DA9F93', '#07393C'];
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Automation Engineer',
                'Business Analyst',
                'CIO',
                'CTO, Director of Engineering',
                'Data Scientist',
                'Database Administrator',
                'Designer',
                'DevOps Engineer',
                'ERP/CRM',
                'Hardware Engineer',
                'Network Engineer',
                'Product Manager',
                'Project Manager',
                'QA Engineer',
                'Software Engineer',
                'System Administrator',
                'System Architect',
                'Team Lead'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [1, 1, 1, 20, 8, 2, 30, 4, 3, 2, 2, 4, 13, 15, 258, 4, 14, 28],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                },
                {
                    label: 'Maosh',
                    data: [316, 526, 632, 1434, 895, 395, 1389, 1000, 1474, 1132, 868, 1105, 1053, 526, 795, 820, 487, 1126],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                }
            ]
        }
    });
</script>

Ishtirokchilarning darajasi (level), yoshi va shunga mos maoshlari:

<canvas id="chart-levels-and-salaries"></canvas>

<script>
    var ctx = document.getElementById('chart-levels-and-salaries').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Junior',
                'Middle',
                'Senior',
                'Lead'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [76, 188, 108, 35],
                    borderWidth: 0,
                    backgroundColor: '#E55934'
                },
                {
                    label: 'Yosh',
                    data: [23, 25, 30, 32],
                    borderWidth: 0,
                    backgroundColor: '#7871AA'
                },
                {
                    label: 'Maosh',
                    data: [316, 750, 1298, 1600],
                    borderWidth: 0,
                    backgroundColor: '#5BC0EB'
                }
            ]
        }
    });
</script>

Umumiy ish tajribasi (yillarda), ishtirokchilar soni va maoshlar:

<canvas id="chart-experience-and-salaries"></canvas>

<script>
    var ctx = document.getElementById('chart-experience-and-salaries').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                '<1',
                '1-3',
                '3-5',
                '5-7',
                '7-10',
                '>10'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [41, 135, 81, 46, 52, 55],
                    borderWidth: 0,
                    backgroundColor: '#E55934'
                },
                {
                    label: 'Maosh',
                    data: [316, 526, 947, 1076, 1316, 1579],
                    borderWidth: 0,
                    backgroundColor: '#5BC0EB'
                }
            ]
        }
    });
</script>

Joriy ish joyidagi tajriba (yillarda) va ishtirokchilar:

<canvas id="chart-experience-at-current-company"></canvas>

<script>
    var ctx = document.getElementById('chart-experience-at-current-company').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                '<1',
                '1-3',
                '3-5',
                '5-7',
                '7-10',
                '>10'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [168, 153, 45, 17, 19, 8],
                    borderWidth: 0,
                    backgroundColor: '#E55934'
                },
                {
                    label: 'Maosh',
                    data: [526, 1000, 1158, 1579, 1000, 1053],
                    borderWidth: 0,
                    backgroundColor: '#5BC0EB'
                }
            ]
        }
    });
</script>

Foydalanilayotgan texnologiyalar:

<canvas id="chart-technologies" style="height: 700px"></canvas>

<script>
    var ctx = document.getElementById('chart-technologies').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'PHP',
                'Frontend Development (JavaScript/TypeScript)',
                'Web (HTML/CSS)',
                'C#/.NET',
                'Java/Scala',
                'iOS (Swift/Objective C)',
                'C/C++',
                'Game Development (Unity/Unreal Engine)',
                'SQL/PL-SQL',
                'Python',
                'Selenium',
                'Cordova',
                'Ionic',
                '1C',
                'Vue.js',
                'AWS',
                'Ruby',
                'Delphi',
                'Android (Kotlin/Java)',
                'MERN',
                'Golang',
                'React',
                'React Native',
                'Flutter',
                'Cisco',
                'Node.js',
                'ActionScript3',
                'ABAP',
                'Clojure',
                'Dart',
                'IIS',
                'Yii 2',
                'Django',
                'Qt Framework'
            ],
            datasets: [
                {
                    label: 'Ovozlar',
                    data: [92, 141, 158, 56, 91, 34, 34, 3, 102, 75, 1, 1, 1, 1, 1, 1, 1, 3, 63, 1, 12, 4, 2, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1],
                    borderWidth: 0,
                    backgroundColor: '#7F96FF'
                }
            ]
        }
    });
</script>

## Kompaniya (ish joyi)

Ish joyi va maoshlar:

- ofishda ishlovchilar _343 ta_ va ularning mediana maoshi _\$800_;
- masofadan ishlovchilar _67 ta_ va mediana maoshi _\$1 500_.

Asosiy ofisning mamlakati boʻyicha ishtirokchilar va maoshlar:

<canvas id="chart-office-locations-and-salaries"></canvas>

<script>
    var ctx = document.getElementById('chart-office-locations-and-salaries').getContext('2d');
    var backgroundColors = ['#C09BD8', '#E6E4CE', '#646881', '#686963', '#EED7C5', '#E2856E', '#CDACA1', '#CD8987', '#F1BB87', '#ABE188', '#5B8E7D'];
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Freelance', 
                'Yevropa', 
                'Isroil', 
                'Malaysia', 
                'BAA', 
                'Rossiya Federatsiyasi', 
                'Singapur', 
                'MDH', 
                'AQSh', 
                'Oʻzbekiston', 
                'Janubiy Koreya'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [1, 30, 1, 7, 1, 23, 2, 3, 40, 298, 4],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                },
                {
                    label: 'Maosh',
                    data: [1579, 1487, 900, 900, 1000, 1200, 1705, 1474, 1842, 658, 1050],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                }
            ]
        }
    });
</script>

Xuddi shu kabi kompaniya (ish joyi) turlari bo'yicha:

<canvas id="chart-company-type-and-salaries"></canvas>

<script>
    var ctx = document.getElementById('chart-company-type-and-salaries').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Outsourcing', 
                'Outstaffing', 
                'Davlat tashkiloti', 
                'Mahsulotga yoʻnaltirilgan', 
                'Xizmat koʻrsatuvchi', 
                'Startap'
            ],
            datasets: [
                {
                    label: 'Ishtirokchilar',
                    data: [71, 25, 75, 134, 18, 87],
                    borderWidth: 0,
                    backgroundColor: '#685762'
                },
                {
                    label: 'Maosh',
                    data: [1200, 842, 632, 903, 579, 800],
                    borderWidth: 0,
                    backgroundColor: '#9B9987'
                }
            ]
        }
    });
</script>

Kompaniyalar nimalarni taklif qiladi?

<canvas id="chart-benefits"></canvas>

<script>
    var ctx = document.getElementById('chart-benefits').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Ofisda kofe, choy, pechenye',
                'Zarur texnika kompaniya hisobidan qoplanadi',
                'Yoʻlkira haqi qoplanadi: ommaviy transport yoki benzin',
                'Tugallangan loyihalardan bonus beriladi',
                'Ofisda ovqatlanish (tushlik)',
                'Masofadan ishlash imkoniyati',
                'Sportga chiqimlar qoplanadi (fitnes, basseyn)',
                'Aksiya yoki opsionlar beriladi',
                'Boshqa shahar yoki davlatga koʻchish uchun yordam beriladi'
            ],
            datasets: [
                {
                    label: 'Ovozlar',
                    data: [196, 229, 39, 115, 96, 141, 53, 45, 46],
                    borderWidth: 0,
                    backgroundColor: '#F68E5F'
                }
            ]
        }
    });
</script>

## Izohlar

Turli unchalik foydasiz boʻlgan “zoʻr”, “omad”, “yaxshi”, “ok” kabi izohlardan tozalangan fikrlar quyida.

- I filled up the form based on my job experience which I quitted recently because they refused to pay me the amount I requested.They underestimate QA Engineers and testers in most software companies in Uzbekistan which is why the quality of software products are low.
- На сколько изменилась зарплата - не понятно как поставить ответ на 10%
- Работодатели в США не только хорошо платят но ещё ценят твою работу, благодарят за неё (appreciate)
- yaxshi so'rovnoma, manimcha kompaniyalar uchun ham shunaqa so'rovnomalar qilish kerak
- Sizlarga bu nega kerak, tushunmadim
- O'zbekistonda dasturchilar maoshi ko'ngildagiday emas.
- Добавь девопс и инженеров
- "Soʻnggi 12 oy ichida maoshingiz qanchaga oʻzgardi?" deganda so'nggi 12 oyda maoshingiz qanchalik ortdi deb tarjima qilsa bo'ladimi? Shu joyi sal tushunarsiz bo'lib qolgan
- Hammasi 1 tiyin. Hammayoqda poraxo‘rlik. Tanish~bilish davlatni o‘marish. Olg‘a O‘zbekiston
- Umuman olganda so'rovnoma va undan ko'zlangan maqsadga gap-so'z bo'lishi mumkin emas, ajoyib. Qo'shimcha qilib bir narsani aytmoqchiman. Software Engineering deb berilgan field ni yanada sub-field larga bo'lish mumkin. Shunda yanada aniqroq va foydaliroq natija bo'ladi deb o'ylayman.
- 4 oy bolyapti ishlab boshlaganimga
- O'zbekistonda programmistlar uchun maosh minimal 1000\$ bo'lishi kerak
- Еще бы учесть доход от доли в компании и тех, кто работает в различных компаниях одновременно. К примеру, меня мест работы 7: 3 гос, 2 частные фирмы, 2 своих проекта
- Local kompaniyalarda oldin yaxwi oylik tolawmasdi. Fido Biznesda yaxwi tulawvoti
- зарплаты низкие, думаю уезжать из страны
- Сделать возможность выбора нескольких должностей, бывают совмещения должностей
- ВМнинг 2013 йил 25 январдаги 18 сон карори хамда Президентнинг 2018 йил 19 февралдаги ПФ-5349-сон карори ижроси барча ташкилотларда тулик ижро этилмаяпти. Яни АКТ сохаси деганда имтиёз, устама ойлик маошларини оширишда фақат дастурчи ходимлар назарда тутиляпти. Лекин IT йуналиши, тармоқларни ташкил этиш ва бошқариш, ахборот хавфсизлигини таъминлаш йўналишлари назардан четда колмоқда. Ахир булар бўлмаса дастурчи ишлаб чиккан дастур каерда ва кандай ишлайди. Сервер, администраторлар куну-тун дастурлар узилиб қолишини назорат қиладику. Буни хеч ким кўрамаяпти.
  IT йўналиши, тармоқларни ташкил этиш ва бошқариш, ахборот хавфсизлигини таъминлаш йуналишларида ишлайдиган ходимларни иши хам дастурчи ходимнинг ишидан кўра оғир, масъулиятли, хажм жихатдан кўп бўлса кўпки, кам эмас деб ўйлайман. Шу билан бирга яратилган дастурни ўрнатиш, ишга тушириш, фойдаланувчига ўргатиш, компьютерда тегишли созлаш ишларини бажариш ва бошқалар жойларда АКТнинг юқоридаги сохаларида ишлаётган ходимлар зиммасига тушмоқда. Лекин, натижа факат дастурчиларга берилмокда.
  Хозирги кунда манимча Узбекистонда локал ва корпоратив тармоқ ташкил этмаган сохалар, ташкилотлар этилганлардан кўпроқ. Улар учун хали дастур ёзиш у ёкда турсин. Олдин дастурларни ишлатиш учун тармоқларни, шароитларни ташкил этиш керак.
  Бунинг учун АКТ сохасида ишловчиларни дастур ёзувчиларга нисбатан ажратмаслик керак. Улар хам дастурчилардек маош, устама ва имтиёзларга эга бўлиши керак.
- Я хотел бы работать на лучшее условие и с хорошей зп
- IT sohasidagilarni qadriga yetishmidi haliyam oson koʻrinadi bularni koʻziga. 12 soatlab kompyuterni oldida kod yozish nimaligini bilishmaydi
- Oʼzbekistondagi bujjet tashkilotlarda IT mutahasislariga kam maosh toʼlashadi
- In Uzbekistan, the salary of IT workers is small
- Oyliklarni AKT sohasida davlat tashkilotlarida oshirish masalasi ko'rib chiqilishi kerak, agar davlat tashkiloti biror bir firma bilan 1 mlrd. so'm shartnoma qilinsa to'lashda muammo yo'q, xodimga oylik maoshini 1 mln so'mga oshirishda esa muammolar tiqilib yotibdi
- IT ni davlat tashkilotlarida rivojlantrish va oilik maoshlarini kotarish kerak.
- Men hozirgi kunda ishlamayman. Bu natijalar mening oxirgi ish joyimga bog'liq. Hissa qo'shay degan edim.
- Не бывает уровень знания колледж
- O'zbekistonda AT sohasini yanada rivoklantirish borasidagi barcha ishlar yanada ko'paytirilihsini va IT xodimlar darajasini oshirishga katta e'tibor qaratilishini xohlayman
- Davlat korxonalarida dasturchilar oyligi aancha past
- O'zbekistonda ham boshqa mamlakatlardagidek AKT mutaxassislariga e'tiborni kuchaytirish kerak
- Oylikni ko`tarish kerak
- Bu loyiha juda kerakli edi shuningdek kerakli vaqtda amalga osgirilmoqda. Bundan juda xursandman. Chunki hozirgi ishimga o'tishimda oylik maosh borasida ish beruvchi bilan mavhumlik yuz berdi. Shunday vaziyatda nimaga asoslanishni bilmay qoldim. Ushbu loyihani amalga oshirishda tashkilotchilarga muvaffaqiyat tilayman.
- Ищу работу в городе Наваи (по семейным обстоятельством)
- Dasturlash sohasi texnologiyalari to'xtovsiz rivojlanib boradi. Shuni inobatga olgan holda dasturchiga o'z ustida ishlashi, bilimini to'xtovsiz kuchaytirib borishiga imkoniyat qilib berilishi kerak deb hisoblayman. Uzoq muddat ishlagan dasturchilarda tajriba ko'p bo'lsa ham yangoi texnologiyalar haqida bilim yetmay qolishi mumkin.
- Что отмечать в пункте про позиции фулл стэк разрабам? Ни одного из perks пока что. Думаю, что стоит добавить пункт "ничего, кроме зарплаты"
- Вы забыли вопрос про дни работы)
- Этот опрос не имеет значение. Как было так и будет
- Pythonni rivojlantirish kerak. Dasturlash tillar markazi kabi joylar ochish shart(O’quv markazi emas)
- Bir tiyinga qimmat IT bozor
- Sayt haqida fikrim yaxshi! Yanaqa yaxshiroq takomillashtirish kerak. Ko'p sohalarni ichiga olsa undan ham yaxshi! Umuman olganda g'oya zo'r! Ishlarizga oma
- O'zbekistonda IT sohasida maoshlar kamligi kop vaqtlardan buyon muammo bolib kelmoqda lekin bunga buni kopchilik bilasada negadir etibor qaratishmaydi
- Не смотря что дефицит специалистов в IT у нас слишком низкие цены... В том числе и QA...
- Thanks for the efforts made for the prosperity of highlighted area in our country!!!
- Oylikni ko'rsatish joylarida man uchun muammo bo'ladi. Oyligim kam lekin % olaman tasischi sifatida. :)
- Juda ajoyib ishni boshlabsilar omad men ham chet el saytlarini muntazam kuzatib borar edim va bu fikr manda ham paydo bolgandi faqat bilim kamli qilgandi
- Многие только начинающие программисты долго думают как продолжить эту профессию или как найти работу, при такой ситуации кодерам нужен в полне действующий сайт фрилансера! Рынок где девелопер может представить свои услуги, а те кто просто бизнесом занимаются найти хороших программистов и т.д. Спасибо за внимание! Удачи во всех начинаниях!
- Tekinga ishlatadiganlar juda ko'p beginner va middle darajadagilarni
- Лучше когда вопрос сумму заработка будет стоять вместо поля ввода а варианты от и до
- Urganchda Toshkentdagiday sharoit va oylik maosh bo'lsa shu yerda ishlar edim :)

## Xulosa

Yuqoridagi izohlarning koʻpchiligi keyingi soʻrovnomada hisobga olinadi. Soʻrovnomadagi savollar yaxshilanadi va hisobotni tayyorlashda tugʻilgan qiyinchiliklar ham tuzatiladi.

Natijalarni toʻliqroq oʻrganuvchilar CSV-faylni GitHubʼdan yuklab olishlari mumkin: [github.com/devofuz/salary-reports/blob/master/2020-02.csv](https://github.com/devofuz/salary-reports/blob/master/2020-02.csv).
