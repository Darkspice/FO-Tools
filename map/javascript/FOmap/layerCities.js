// Расположение основных локаций в игре
const BIG_TOWN = 24; //Обычный город
const TOWN = 15; //Вествуд
const MEDIUM_TOWN = 12; //Собор, У15, Наварро, Сьерра
const SMALL_TOWN = 9; // ЦБиЗ, Старый АД
const TINY_TOWN = 7; // Аванпосты, драйфилд

let _cities = {
  0: {
    name: 'Руины',
    coords: [117, 51],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "2:1",
    descrip: 'Какие-то развалины. Здесь можно поживиться.',
    quests: {},
    caravans: [],
  },
  1: {
    name: 'Арройо',
    coords: [175, 125],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "3:2",
    descrip: 'В этом городе-саде запрещено брать оружие в руки, пытаться проносить взрывчатку или экипировать гранаты. Отсутствует вход на транспорте.',
    link: 'towns/arroyo/main.html',
    quests: {},
    caravans: [],
  },
  2: {
    name: 'ЦБиЗ',
    coords: [240, 90],
    style: {
      radius: SMALL_TOWN,
      color: 'green',
      fillColor: 'green'
    },

    place: "4:1",
    descrip: 'Церковь Брока и Зандера. Это святилище процветающей и многочисленной конфессии. На территории Церкви охраной запрещено использовать режим скрытности.',
    quests: {},
    caravans: [],

  },
  3: {
    name: 'Кламат',
    coords: [375, 125],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },

    place: "7:2",
    descrip: 'Город широко известен под другим своим названием - "Город траперов". Любой охотник сможет найти здесь себе работу, так как на севере пасутся огромные стада Гекконов.',
    link: 'towns/klamath/main.html',
    quests: {},
    caravans: [],
  },
  4: {
    name: 'Яма',
    coords: [475, 275],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "9:5",
    descrip: 'Город бандитов и наркоманов.',
    quests: {},
    caravans: [],
  },
  5: {
    name: 'Вествуд',
    coords: [275, 325],
    style: {
      radius: TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "5:6",
    descrip: 'Большой мирный город со своей Ареной, постом БС и районом мутантов. Запрещено носить оружие в руках и взрывчатку.',
    quests: {},
    caravans: [],
  },
  6: {
    name: 'Судно',
    coords: [17, 458],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "1:7",
    descrip: 'Очень опасное место, где обитают поклонники Ханов и ужасные животные.',
    quests: {},
    caravans: [],
  },
  7: {
    name: 'Примитивное племя',
    coords: [100, 589],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "2:11",
    descrip: 'Перед вами небольшое поселение.',
    quests: {},
    caravans: [],
  },
  8: {
    name: 'Реддинг',
    coords: [675, 525],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "13:10",
    descrip: 'Шахтерский городок.',
    quests: {},
    caravans: [],
  },
  9: {
    name: 'Старый АД',
    coords: [770, 466],
    style: {
      radius: SMALL_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "15:9",
    descrip: 'Руины старого Ада.',
    quests: {},
    caravans: [],
  },
  10: {
    name: 'Модок',
    coords: [925, 275],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "18:5",
    descrip: 'Небольшой фермерский городок. Выращивает браминов и сельскохозяйственную продукцию.',
    quests: {},
    caravans: [],
  },
  11: {
    name: 'Собор',
    coords: [931, 64],
    style: {
      radius: MEDIUM_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "18:1",
    descrip: 'Древнее сооружение охраняемое злобными Фанатиками.',
    quests: {},
    caravans: [],
  },
  12: {
    name: 'Город-Убежище',
    coords: [1225, 325],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "24:6",
    descrip: 'Первый город, построенный с помощью ГЭКК.',
    quests: {},
    caravans: [],
  },
  13: {
    name: 'Гекко',
    coords: [1275, 225],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "25:4",
    descrip: 'Город гулей. В нем расположена административная Атомная электростанция. Вблизи радиактивно.',
    quests: {},
    caravans: [],
  },
  14: {
    name: 'Аванпост Анклава',
    coords: [270, 743],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "5:14",
    descrip: 'Заброшенный аванпост.',
    quests: {},
    caravans: [],
  },
  15: {
    name: 'Наварро',
    coords: [160, 865],
    style: {
      radius: MEDIUM_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "3:17",
    descrip: 'Военная база анклава. В прошлом - сильнейшей организации, объявившей себя правительством США.',
    quests: {},
    caravans: [],
  },
  16: {
    name: 'Драйфилд',
    coords: [600, 837],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "11:16",
    descrip: 'Небольшое поселение. Заправка, мотель. По слухам где-то здесь база Охотников за Бандитами.',
    quests: {},
    caravans: [],
  },
  17: {
    name: 'Сьерра',
    coords: [914, 814],
    style: {
      radius: MEDIUM_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "18:16",
    descrip: 'Военная база. Опасно.',
    quests: {},
    caravans: [],
  },
  18: {
    name: 'Нью-Рено',
    coords: [925, 925],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "18:18",
    descrip: 'Город казино, наркотиков и разврата.',
    quests: {},
    caravans: [],
  },
  19: {
    name: 'Бандитский склад',
    coords: [925, 956],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "18:19",
    descrip: 'Перевалочная база для бандитской контрабанды из Города-Убежище.',
    quests: {},
    caravans: [],
  },
  20: {
    name: 'Брокен Хиллс',
    coords: [1175, 875],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "23:17",
    descrip: 'Город, объединяющий в себе людей, гулей и супермутантов.',
    quests: {},
    caravans: [],
  },
  21: {
    name: 'Аванпост БХ',
    coords: [1330, 927],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "26:18",
    descrip: 'Заброшенный аванпост.',
    quests: {},
    caravans: [],
  },
  22: {
    name: 'Атолл',
    coords: [309, 1364],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "6:27",
    descrip: 'Странная жестяная конструкция на сваях. Похоже, на ней кто-то живет.',
    quests: {},
    caravans: [],
  },
  23: {
    name: 'Сан-Франциско',
    coords: [475, 1320],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "9:26",
    descrip: 'Крупнейший город США. Это центр торговли и технологий. Имеет свою электростанцию и занимается разработкой новых видов вооружения и защиты.',
    quests: {},
    caravans: [],
  },
  24: {
    name: 'Марипоза',
    coords: [675, 1425],
    style: {
      radius: MEDIUM_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "13:28",
    descrip: 'Военная база Марипоза. Вход завален. Скопление мутантов и большой интерес Анклава.',
    quests: {},
    caravans: [],
  },
  25: {
    name: 'Аванпост Мутантов',
    coords: [910, 1270],
    style: {
      radius: TINY_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "18:25",
    descrip: 'Заброшенный аванпост.',
    quests: {},
    caravans: [],
  },
  26: {
    name: 'НКР',
    coords: [1125, 1425],
    style: {
      radius: BIG_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "22:28",
    descrip: 'Город одного из новых государств, возникших после развала США. Образован людьми из убежищ 13 и 15. Полон аристократии.',
    quests: {},
    caravans: [],
  },
  27: {
    name: 'Убежище 15',
    coords: [1275, 1425],
    style: {
      radius: MEDIUM_TOWN,
      color: 'green',
      fillColor: 'green'
    },
    place: "25:28",
    descrip: 'На месте убежища теперь опорный пункт Братства Стали.',
    quests: {},
    caravans: [],
  },
}
let _layer = {};
// Добавляем города в группу слоев
let layerCities = L.layerGroup();
for (let i in _cities) {
  layerCities.addLayer(
    _layer[i] = new L.circle(xy(_cities[i].coords[0], _cities[i].coords[1]), {
      radius: _cities[i].style.radius,
      color: _cities[i].style.color,
      fillColor: _cities[i].style.color,
    })
      .bindTooltip(_cities[i].name, { direction: 'top' })
      .on({ mouseover: highlight, mouseout: resetHighlight, click: setFocus, dblclick: goIntoTown })
  );
  _layer[i].info = _cities[i];
  _layer[i].info.type = 'City';
}