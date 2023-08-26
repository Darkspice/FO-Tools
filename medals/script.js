let tables = document.querySelectorAll('table');
let selectedTr;
let counter = 0;
const mobTable = document.querySelector('#mobs')

const COEFFS = [1, 2, 4, 8, 15, 30]

const MOBS = {
  BT_MEN: {
    name: 'Мужчины',
    value: 10,
  },
  BT_WOMEN: {
    name: 'Женщины',
    value: 10,
  },
  BT_CHILDREN: {
    name: 'Дети',
    value: 0,
  },
  BT_SUPER_MUTANT: {
    name: 'Супер Мутанты',
    value: 4,
  },
  BT_GHOUL: {
    name: 'Гули',
    value: 10,
  },
  BT_BRAHMIN: {
    name: 'Брамины',
    value: 0,
  },
  BT_RADSCORPION: {
    name: 'Радскорпионы',
    value: 10,
  },
  BT_RAT: {
    name: 'Крысы',
    value: 10
  },
  BT_FLOATER: {
    name: 'Летатели',
    value: 5,
  },
  BT_CENTAUR: {
    name: 'Пвсевдо-кентавры',
    value: 5,
  },
  BT_ROBOT: {
    name: 'Роботы',
    value: 3,
  },
  BT_DOG: {
    name: 'Собаки',
    value: 10,
  },
  BT_MANTI: {
    name: 'Мантисы',
    value: 10,
  },
  BT_DEADCLAW: {
    name: 'Когти смерти',
    value: 8,
  },
  BT_PLANT: {
    name: 'Хищные цветки',
    value: 0,
  },
  BT_GECKO: {
    name: 'Ящеры',
    value: 10,
  },
  BT_ALIEN: {
    name: 'Чужие',
    value: 5,
  },
  BT_GIANT_ANT: {
    name: 'Муравьи',
    value: 5,
  },
  BT_BIG_BAD_BOSS: {
    name: 'Большие боссы',
    value: 1,
  },
  BT_GIANT_BEETLE: {
    name: 'Большие жуки',
    value: 0,
  },
  BT_GIANT_WASP: {
    name: 'Большие осы',
    value: 0,
  },
}

for (table of tables) {
  table.addEventListener('mousemove', onMouseMove);
  table.addEventListener('click', onMouseClick);
}

for (const { name, value } of Object.values(MOBS)) {
  if (value === 0) {
    continue;
  }

  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.textContent = name

  tr.append(td);

  for (coef of COEFFS) {
    const td = document.createElement('td');
    td.textContent = String(coef * value);

    tr.append(td);
  }

  mobTable.tBodies[0].append(tr);
}

console.log(mobTable.tBodies)

function onMouseMove(event) {

  //Деструктируем таргет из ивента
  let { target } = event;

  //Берем родителя или сам элемент
  let td = event.target.closest('td');
  let tr = target.closest('tr');

  // Если кликнули не внутри ячейки td
  if (!td) {
    highlight(tr, td);
    return;
  }

  // Если кликнули в строке tr
  if (tr) highlight(tr, td);
}
function onMouseClick(event) {
  let { target } = event;

  let td = event.target.closest('td');
  let tr = target.closest('tr');

  if (!td) {
    toggleHighlight(tr, td);
    return;
  }

  if (tr) toggleHighlight(tr, td);

  countMedal();
}
function countMedal() {
  // Считаем все подсвеченные ячейки
  counter = document.querySelectorAll('.toggle_hover').length;
  document.querySelector('.counter').textContent = 'Медалей: ' + counter;
}

function toggleHighlight(tr, td) {

  // Если клик не на td
  if (!td) {
    for (child of tr.children) {
      child.classList.remove('toggle_hover');
    }
    countMedal();
    return;
  }

  let isLast = false;

  // Перебираем все ячейки в строке
  for (child of tr.children) {
    // Если ячейка не td
    if (child.tagName != 'TD') continue;
    // Если ушли за пределы таргета
    if (isLast) {
      child.classList.remove('toggle_hover');
    } else {
      child.classList.add('toggle_hover');
    }
    // Если ячейка пустая
    if (!child.textContent) {
      child.classList.remove('toggle_hover');
    }
    // Если дошли до таргета - все остальное после него не красим
    if (child === td) {
      isLast = true;
    }
  }
}
function highlight(tr, td) {

  // Если выделенный tr не наш предыдущий - снимаем покрас
  if (selectedTr) {
    for (child of selectedTr.children) {
      if (child.tagName != 'TD') continue;
      child.classList.remove('hover');
    }
  }

  if (!td) return;

  selectedTr = tr;
  let isLast = false;

  for (child of selectedTr.children) {
    if (child.tagName != 'TD') continue;
    if (isLast) {
      child.classList.remove('hover');
    } else {
      child.classList.add('hover');
    }
    if (!child.textContent) {
      child.classList.remove('hover');
    }
    if (child === td) {
      isLast = true;
    }
  }
}