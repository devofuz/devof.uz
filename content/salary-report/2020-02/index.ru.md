---
title: Результаты опроса. Февраль 2020-го года.
date: 2020-03-05T16:19:24+05:00
---

В феврале 2020-го года проводили опрос по зарплатам ИТ-специалистов. _959 раз_ проходили по [ссылке](http://bit.ly/uzb-it-salaries-2020-02) Bitly. Это ссылка перенаправляет пользователя на опрос созданный с помощью сервиса Google Forms.

Опрос получил _428 ответов_. Некоторые ответы были дупликатами, некоторые были далеки от реальности (_100 000 \$ зарплата_) и некоторые были просто пустыми. Они были удалены и остались _410 ответов_ на котором основан этот опрос.

Надеемся что в следующий раз участников будут больше и получим более реальные данные.

Внимание:

1. Чтобы почти все не стали миллионерами и показать зарплаты в более простой форме все зарплаты переведены на доллары США по курсу 9 500 сум.
2. Для вычисление средних зарплат используется [медиана](<https://ru.wikipedia.org/wiki/Медиана_(статистика)>), а не среднее арифметическое. Например, если из 5 человек 4 указали зарплату как 5 $ и один из них 1000 $ то среднее арифметическое равно 204 $, а медиана равна 5 $. Медиана позволяет отсечь слишком высокие и низкие значения.

## Портрет участника

Почти все участники живут в Ташкенте.

<canvas id="chart-regions"></canvas>

<script>
    var ctx = document.getElementById('chart-regions').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Андижанская область',
                'Бухарская область',
                'Джизакская область',
                'Кашкадарьинская область',
                'Навоийская область',
                'Наманганская область',
                'Республика Каракалпакстан',
                'Самаркандская область',
                'Сурхандарьинская область',
                'Ташкент',
                'Ташкентская область',
                'Ферганская область',
                'Хорезмская область'
            ],
            datasets: [{
                label: 'Участники',
                data: [4, 1, 2, 2, 1, 5, 2, 6, 2, 358, 10, 10, 7],
                borderWidth: 0,
                backgroundColor: '#708090'
            }]
        }
    });
</script>

Женщины — _3 процента_ из участников:

<canvas id="chart-gender"></canvas>

<script>
    var ctx = document.getElementById('chart-gender').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Женщины',
                'Мужчины'
            ],
            datasets: [{
                label: 'Участники',
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

Возрасть многих участников между 20 и 29 (включительно):

<canvas id="chart-age-intervals"></canvas>

<script>
    var ctx = document.getElementById('chart-age-intervals').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                '10—19 лет',
                '20—29 лет',
                '30—39 лет',
                '40—49 лет'
            ],
            datasets: [{
                label: 'Участники',
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

Знание английского немного влияет на зарплату:

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
                label: 'Зарплата',
                data: [589, 800, 1053, 1000],
                borderWidth: 0,
                backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
            }]
        }
    });
</script>

Прямого связа зарплаты и образование не существует:

<canvas id="chart-education"></canvas>

<script>
    var ctx = document.getElementById('chart-education').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Среднее',
                'Колледж',
                'Незаконченное высшее',
                'Высшее'
            ],
            datasets: [
                {
                    label: 'Участники',
                    data: [17, 34, 85, 274],
                    borderWidth: 0,
                    backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
                },
                {
                    label: 'Зарплата',
                    data: [1053, 500, 632, 905],
                    borderWidth: 0,
                    backgroundColor: ['rgb(54, 162, 235)', 'rgba(75, 192, 192)', 'rgba(153, 102, 255)', 'rgba(255, 159, 64)']
                }
            ]
        }
    });
</script>

## Зарплата и опыт работы

Зарплату получают:

- 240 человек в сумах;
- 170 человек в долларах США.

Количество участников по должностям и зарплаты:

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
                    label: 'Участники',
                    data: [1, 1, 1, 20, 8, 2, 30, 4, 3, 2, 2, 4, 13, 15, 258, 4, 14, 28],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                },
                {
                    label: 'Зарплата',
                    data: [316, 526, 632, 1434, 895, 395, 1389, 1000, 1474, 1132, 868, 1105, 1053, 526, 795, 820, 487, 1126],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                }
            ]
        }
    });
</script>

Уровень, возрасть и зарплаты участников (оба медианы):

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
                    label: 'Участники',
                    data: [76, 188, 108, 35],
                    borderWidth: 0,
                    backgroundColor: '#E55934'
                },
                {
                    label: 'Возрасть',
                    data: [23, 25, 30, 32],
                    borderWidth: 0,
                    backgroundColor: '#7871AA'
                },
                {
                    label: 'Зарплата',
                    data: [316, 750, 1298, 1600],
                    borderWidth: 0,
                    backgroundColor: '#5BC0EB'
                }
            ]
        }
    });
</script>

Общий опыт работы, количество участников и зарплаты:

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
                    label: 'Участники',
                    data: [41, 135, 81, 46, 52, 55],
                    borderWidth: 0,
                    backgroundColor: '#E55934'
                },
                {
                    label: 'Зарплата',
                    data: [316, 526, 947, 1076, 1316, 1579],
                    borderWidth: 0,
                    backgroundColor: '#5BC0EB'
                }
            ]
        }
    });
</script>

Опыт работы в текущей компании:

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
                    label: 'Участники',
                    data: [168, 153, 45, 17, 19, 8],
                    borderWidth: 0,
                    backgroundColor: '#E55934'
                },
                {
                    label: 'Зарплата',
                    data: [526, 1000, 1158, 1579, 1000, 1053],
                    borderWidth: 0,
                    backgroundColor: '#5BC0EB'
                }
            ]
        }
    });
</script>

Языки программирования и технологии:

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
                    label: 'Количество голосов',
                    data: [92, 141, 158, 56, 91, 34, 34, 3, 102, 75, 1, 1, 1, 1, 1, 1, 1, 3, 63, 1, 12, 4, 2, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1],
                    borderWidth: 0,
                    backgroundColor: '#7F96FF'
                }
            ]
        }
    });
</script>

## Компания (место работы)

Место (тип) работы и зарплаты:

- _343 человек_ работают в офисе и их медианная зарплата _\$800_;
- _67 человек_ работают удаленно и их медианная зарплата _\$1 500_.

Расположение основного офиса и зарплаты:

<canvas id="chart-office-locations-and-salaries"></canvas>

<script>
    var ctx = document.getElementById('chart-office-locations-and-salaries').getContext('2d');
    var backgroundColors = ['#C09BD8', '#E6E4CE', '#646881', '#686963', '#EED7C5', '#E2856E', '#CDACA1', '#CD8987', '#F1BB87', '#ABE188', '#5B8E7D'];
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Фриланс',
                'Европа', 
                'Израиль', 
                'Малайзия', 
                'ОАЭ',
                'Российская Федерация', 
                'Сингапур',
                'СНГ',
                'США', 
                'Узбекистан', 
                'Южная Корея'
            ],
            datasets: [
                {
                    label: 'Участники',
                    data: [1, 30, 1, 7, 1, 23, 2, 3, 40, 298, 4],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                },
                {
                    label: 'Зарплата',
                    data: [1579, 1487, 900, 900, 1000, 1200, 1705, 1474, 1842, 658, 1050],
                    borderWidth: 0,
                    backgroundColor: backgroundColors
                }
            ]
        }
    });
</script>

По типу компаний:

<canvas id="chart-company-type-and-salaries"></canvas>

<script>
    var ctx = document.getElementById('chart-company-type-and-salaries').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Outsourcing', 
                'Outstaffing', 
                'Государственное учреждение', 
                'Продуктовая', 
                'Сервисная', 
                'Стартап'
            ],
            datasets: [
                {
                    label: 'Участники',
                    data: [71, 25, 75, 134, 18, 87],
                    borderWidth: 0,
                    backgroundColor: '#685762'
                },
                {
                    label: 'Запрлата',
                    data: [1200, 842, 632, 903, 579, 800],
                    borderWidth: 0,
                    backgroundColor: '#9B9987'
                }
            ]
        }
    });
</script>

Что предлагают компании:

<canvas id="chart-benefits"></canvas>

<script>
    var ctx = document.getElementById('chart-benefits').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Кофе, чай, печеньки в офисе',
                'Предоставление необходимой техники за счёт компании или выделение средств на её приобретение',
                'Компенсация проезда или затрат на бензин',
                'Бонусы от завершённых проектов',
                'Питание в офисе (обеды)',
                'Возможность удалённой работы',
                'Компенсация затрат на спорт (фитнес, бассейн)',
                'Акции, опционы (equity)',
                'Возможность переезда в другой город или страну'
            ],
            datasets: [
                {
                    label: 'Количество голосов',
                    data: [196, 229, 39, 115, 96, 141, 53, 45, 46],
                    borderWidth: 0,
                    backgroundColor: '#F68E5F'
                }
            ]
        }
    });
</script>

## Комментарии

Если убрать стандартные ответы вроде «хорошо», «ок», «ждем» и т.д. то вот комментарии и пожелания:

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

## Выводы

Некоторые недочеты и пожелания будут учтены в следующих опросах и еще вопросы будут улучшены.

Резултаты доступны как CSV-файл на Гитхабе: [github.com/devofuz/salary-reports/blob/master/2020-02.csv](https://github.com/devofuz/salary-reports/blob/master/2020-02.csv)
