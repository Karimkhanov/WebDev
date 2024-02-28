import { Category } from "./categories";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
    imgURL: string;
    link: string;
    category: Category;
    likes: number;
  }

  export const products: Product[] = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro 128Gb серый",
      price: 527239,
      description: "технология NFC: Да\n" +
        "цвет: серый\n" +
        "тип экрана: OLED, Super Retina XDR display\n" +
        "диагональ: 6.1 дюйм\n" +
        "размер оперативной памяти: 8 ГБ\n" +
        "процессор: 6-ядерный Apple A17 Pro\n" +
        "объем встроенной памяти: 128.0 ГБ\n" +
        "емкость аккумулятора: 3279.0 мАч",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h07/h01/83559618117662.png?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/2",
      category: { name: "Телефон" },
      likes: 296,
    },
    {
      id: 2,
      name: "Смарт-часы Apple Watch SE 2 Gen (2022) 40 мм starlight-бежевый",
      price: 133201,
      description: "поддержка платформ: iOS\n" +
        "материал корпуса: алюминий\n" +
        "цвет корпуса: starlight\n" +
        "форма корпуса: прямоугольная\n" +
        "интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n" +
        "технология экрана: OLED\n" +
        "объем встроенной памяти: 32 Гб",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/3",
      category: { name: "Часы" },
      likes: 80,
    },
    {
      id: 3,
      name: "Apple iPhone 13 128Gb зеленый",
      price: 298743,
      description: "технология NFC: Да\n" +
        "цвет: зеленый\n" +
        "тип экрана: OLED, Super Retina XDR\n" +
        "диагональ: 6.1 дюйм\n" +
        "размер оперативной памяти: 4 ГБ\n" +
        "процессор: 6-ядерный Apple A15 Bionic\n" +
        "объем встроенной памяти: 128.0 ГБ\n" +
        "емкость аккумулятора: 3095.0 мАч",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/6",
      category: { name: "Телефон" },
      likes: 619,
    },
    {
      id: 4,
      name: "Смарт-часы Huawei Watch GT 4 41 мм золотистый",
      price: 21898,
      description: "поддержка платформ: Android, iOS\n" +
        "материал корпуса: нерж. сталь\n" +
        "цвет корпуса: золотистый\n" +
        "форма корпуса: круглая\n" +
        "интерфейсы: Bluetooth\n" +
        "технология экрана: AMOLED\n" +
        "время работы: до 5 дней",
      rating: 5,
      url: "https://kaspi.kz/shop/p/huawei-watch-gt-4-41-mm-zolotistyi-113400057/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h07/he9/83879550779422.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/10",
      category: { name: "Часы" },
      likes: 228,
    },
    {
      id: 5,
      name: "Зарядное устройство Ugreen CD226 40747 100W черный",
      price: 302300,
      description: "Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/ugreen-cd226-40747-100w-chernyi-102692835/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/ha5/h21/84757131493406.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/8",
      category: { name: "Телефон" },
      likes: 44,
    },
    {
      id: 6,
      name: "Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный",
      price: 59674,
      description: "поддержка платформ: Android\n" +
        "материал корпуса: алюминий\n" +
        "цвет корпуса: черный\n" +
        "форма корпуса: круглая\n" +
        "интерфейсы: Bluetooth, ,NFC",
      rating: 5,
      url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/9",
      category: { name: "Часы" },
      likes: 197,
    },
    {
      id: 7,
      name: "Книга Жолдыбайұлы Қ.: Кемел адам",
      price: 5899,
      description: "iSBN: 978-601-7629-44-1\n" +
        "возраст: 16+\n" +
        "язык издания: казахский\n" +
        "переплет: твердый переплет\n" +
        "жанр: психология популярная",
      rating: 5,
      url: "https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/11",
      category: { name: "Книга" },
      likes: 505,
    },
    {
      id: 8,
      name: "Наушники Apple AirPods Max синий",
      price: 274747,
      description: "тип: гарнитура\n" +
        "вид: накладные\n" +
        "подключение: беспроводное\n" +
        "тип акустического оформления: закрытые\n" +
        "тип крепления: оголовье\n" +
        "система активного шумоподавления: Да\n" +
        "микрофон: Да",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h64/hfe/64217007554590.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/12",
      category: { name: "Наушники" },
      likes: 63,
    },
    {
      id: 10,
      name: "Смарт-часы Smart Baby Watch Z6 GPS зеленый",
      price: 4344,
      description: "поддержка платформ: Android, ,iOS\n" +
        "материал корпуса: пластик\n" +
        "цвет корпуса: зеленый\n" +
        "форма корпуса: многогранная\n" +
        "интерфейсы: USB\n" +
        "технология экрана: AMOLED",
      rating: 5,
      url: "https://kaspi.kz/shop/p/smart-baby-watch-z6-gps-zelenyi-101910569/?c=750000000",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h88/h10/64165178507294.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/14",
      category: { name: "Часы" },
      likes: 118,
    },
    {
      id: 11,
      name: "Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый",
      price: 128340,
      description: "технология NFC: Да\n" +
        "цвет: серый\n" +
        "тип экрана: цветной AMOLED, сенсорный\n" +
        "диагональ: 6.67 дюйм\n" +
        "размер оперативной памяти: 8 ГБ\n" +
        "процессор: 8-ядерный Qualcomm Snapdragon 732G\n" +
        "объем встроенной памяти: 256.0 ГБ\n" +
        "емкость аккумулятора: 5020.0 мАч",
      rating: 5,
      url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h94/h74/64487156645918.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/15",
      category: { name: "Телефон" },
      likes: 649,
    },
    {
      id: 12,
      name: "Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый",
      price: 694740,
      description: "технология NFC: Да\n" +
        "цвет: фиолетовый\n" +
        "тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n" +
        "диагональ: 6.7 дюйм\n" +
        "размер оперативной памяти: 6 ГБ\n" +
        "процессор: 6-ядерный Apple A16 Bionic\n" +
        "объем встроенной памяти: 256.0 ГБ\n" +
        "емкость аккумулятора: 4300.0 мАч",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/16",
      category: { name: "Телефон" },
      likes: 1253,
    },
    {
      id: 13,
      name: "Amazfit Bip U Pro",
      price: 25368,
      description: "Безрамочный дизайн часов Amazfit Bip U Pro оборудованы экраном AMOLED с диагональю 1.43 дюйма и разрешением 320x302 пикселя, обеспечивающим превосходное визуальное отображение, благодаря которому все входящие звонки, сообщения и напоминания становятся предельно четкими.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h68/33549396967454/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/17",
      category: { name: "Часы" },
      likes: 30,
    },
    {
      id: 14,
      name: "Джордж Оруэлл 1984",
      price: 1984,
      description: "Культовый роман Джорджа Оруэлла в новом, полном, без цензуры и купюр, переводе Дарьи Целовальниковой. «1984» — одна из трех знаменитых антиутопий XX века.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/oruell-dzh-1984-105221802/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h57/51390686887966/oruell-dz-1984-105221802-1.jpg",
      link: "https://t.me/angularwebdev2023/18",
      category: { name: "Книга" },
      likes: 14,
    },
    {
      id: 15,
      name: "Книга Коэльо П.: Алхимик\n" +
        " (45 отзы",
      price: 2539,
      description: "iSBN: 9785170879212\n" +
        "возраст: 16+\n" +
        "язык издания: русский\n" +
        "переплет: мягкий переплет\n" +
        "жанр: современная мировая проза",
      rating: 5,
      url: "https://kaspi.kz/shop/p/koel-o-p-alhimik-26018156/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hbd/h62/63771481407518.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/19",
      category: { name: "Книга" },
      likes: 10,
    },
    {
      id: 16,
      name: "Айзексон Уолтер: Стив Джобс",
      price: 5740,
      description: "В основу этой биографии легли беседы с самим Стивом Джобсом, а также с его родственниками, друзьями, врагами, соперниками и коллегами.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/aizekson-u-stiv-dzhobs-26006223/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h8b/hb5/63813489098782.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/19",
      category: { name: "Книга" },
      likes: 22,
    },
    {
      id: 17,
      name: "Эрих Мария Ремарк: Триумфальная Арка",
      price: 1750,
      description: "«Триумфальная арка» – пронзительная история любви всему наперекор, любви, приносящей боль, но и дарующей бесконечную радость.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/remark-e-m-triumfal-naja-arka-26025852/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hd0/h7d/63803844821022.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/20",
      category: { name: "Книга" },
      likes: 21,
    },
    {
      id: 18,
      name: "Apple AirPods 3",
      price: 95675,
      description: "Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg",
      link: "https://t.me/angularwebdev2023/21",
      category: { name: "Наушники" },
      likes: 7,
    },
    {
      id: 19,
      name: "Apple AirPods",
      price: 68480,
      description: "AirPods настраиваются в одно касание. Автоматически включаются и устанавливают соединение. Пользоваться ими невероятно легко.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/22",
      category: { name: "Наушники" },
      likes: 11,
    },
    {
      id: 20,
      name: "Apple AirPods Pro",
      price: 103176,
      description: "AirPods Pro — уникальные наушники с технологией активного шумоподавления, которые непрерывно оптимизируют звучание с учётом формы вашего уха и положения вкладышей.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/23",
      category: { name: "Наушники" },
      likes: 263,
    },
    {
      id: 21,
      name: "Apple EarPods",
      price: 7916,
      description: "тип: наушники\n" +
        "вид: внутриканальные\n" +
        "подключение: с проводом\n" +
        "тип акустического оформления: открытые\n" +
        "тип крепления: без крепления\n" +
        "система активного шумоподавления: Нет\n" +
        "микрофон: Да",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium",
      link: "https://t.me/angularwebdev2023/24",
      category: { name: "Наушники" },
      likes: 1277,
    }
  ];


  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
