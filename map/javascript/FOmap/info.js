let info = L.control({ position: 'bottomleft' });
let search = L.control({ position: 'topleft' });
let link = L.control({ position: 'topleft' });

// Поиск стычки
function find(element) {
  if (element.value.length > 2) {
    layerMapCell.eachLayer(function (layer) {
      if (layer.info.table?.encs) {
        let arrEncs = layer.info.table.encs
        // Достаточно найти хотя бы 1 совадение в массиве энок данной клетки
        // красим клетку, переходим к другой
        for (let index of arrEncs) {
          if (~(msg[index.strNum].toUpperCase()).indexOf((element.value).toUpperCase())) {
            layer.setStyle({
              fillOpacity: 0.2,
              fillColor: '#3388ff',
            })
            break;
            // Совпадений нет? Возвращаем стиль клетки
          } else {
            layer.setStyle(mapCellOptions);
          }
        }
      }
    });
  } else {
    layerMapCell.eachLayer(function (layer) {
      layer.setStyle(mapCellOptions);
    })
  }
}
// На главную
link.onAdd = function (map) {
  link = L.DomUtil.create('a', 'link');
  link.href = '../index.html';
  link.textContent = 'На главную'
  link.style.cursor = 'pointer';
  return link;
}

// Добавляем элемент input (поиск)
search.onAdd = function (map) {
  input = L.DomUtil.create('input', 'search');
  input.type = "search";
  input.placeholder = "Поиск стычки...";
  input.setAttribute("oninput", "find(this)");
  return input;
}

// Добавляем панель info
info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
}

// При клике по чекбоксу показываем путь
function showPath(elem) {
  let index = elem.value;
  if (elem.checked) {
    // Запоминаем состояние чекбокса
    activeLayer.info.caravans[index] = true;
    CITY[index].addTo(map);
  } else {
    activeLayer.info.caravans[index] = false;
    CITY[index].remove();
  }

}
// Добавляем чекбоксы с путями караванов
function setCarWay(layer) {
  let townName = layer.info.name;
  let stringWay = '';
  switch (townName) {
    case 'Кламат':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      // Передаем в массив CITY индекс через value. Смотри caravans.js.
      for (let i = 0; i < 8; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Яма':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 8; i < 16; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Модок':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 16; i < 25; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Город-Убежище':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 25; i < 33; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Гекко':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 33; i < 41; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Реддинг':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 41; i < 50; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Нью-Рено':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 50; i < 59; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Брокен Хиллс':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 59; i < 68; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'НКР':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 68; i < 77; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    case 'Сан-Франциско':
      stringWay += '<hr>' + '<b>Караваны Рипоста</b><br/>'
      for (let i = 77; i < 86; i++) {
        stringWay += `<input type = "checkbox" value = "${i}"
				${layer.info.caravans[i] !== undefined && layer.info.caravans[i] ? 'checked' : ''}
				onchange = "showPath(this)"><span>${carPathNames[i]}</span><br>`
      }
      break;
    default:
      break;
  }
  return stringWay;
}

// При наведении на клетку
info.update = function (layer) {

  // Инфа городов
  if (layer?.info.type === 'City') {
    this._div.innerHTML = '<h4>Выберите объект</h4>' + (layer?.info ?
      '<b>Координаты: </b>' + layer.info.place + ' - ' +
      layer.info.coords[0] + ':' + layer.info.coords[1] + '<br/>' +
      '<b>Название города: </b>' + layer.info.name + '<br/>' +
      '<b>Описание: </b>' + layer.info.descrip + '<br/>' +
      // Ссыдка на карту города
      (layer.info.link ? `<a href = "${layer.info.link}">На карту города</a>` : '') +
      setCarWay(layer)

      : 'Нет информации');
    // Инфа энок
  } else if (layer?.info.type === 'Encounter') {
    this._div.innerHTML = '<h4>Выберите объект</h4>' + (layer?.info ?
      '<b>Координаты: </b>' + layer.info.coords + '<br/>' +
      '<b>Тип местности: </b>' + layer.info.terrain + '<br/>' +
      '<b>Сложность: </b>' + layer.info.difficulty + '<br/>' +
      '<b>Частота встреч: </b>' + layer.info.chance + '%' + '<br/>'
      : 'Нет информации')
      + '<b><span style="color:BlueViolet">Уникальные встречи: </b>';
    // Уникальные встречи
    if (layer.info.table?.encs) {
      for (let key of layer.info.table.encs) {
        if (key.special && specialNames[key.locationPid] !== undefined) {
          this._div.innerHTML += `${specialNames[key.locationPid]}; `;
        }
      }
    }
    // Мирные встречи
    this._div.innerHTML += '<br/><b><span style ="color:green">Мирные втречи: </span></b>';
    if (layer.info.table?.encs) {
      for (let key of layer.info.table.encs) {
        if (key.special === false && key.fightings.length === 0) {
          for (let groupNumber of key.groups) {
            if (groupNumber.groupNumber !== -1 && groupNumber.groupNumber !== 78 && groupNumber.groupNumber !== 114 && groupNumber.groupNumber !== 64 && groupNumber.groupNumber !== 108) {
              this._div.innerHTML += `${groupNames[groupNumber.groupNumber]}; `;
            }
          }
        }
      }
    }
    // Враждебные встречи
    this._div.innerHTML += '<br/><b><span style="color:red">Вражденбные встречи: </span></b>';
    if (layer.info.table?.encs) {
      let playerGroup = 0;
      let playerEnemies = [];
      n = 0;
      // Проходимся по энкам
      for (let encounter of layer.info.table.encs) {
        // Если есть драки на энках и они не квестовые
        if (encounter.fightings.length !== 0) {
          // Проходимся по группам
          for (let i = 0; i < encounter.groups.length; i++) {
            // Группа игрока под каким номером?
            if (encounter.groups[i].groupNumber === -1) {
              playerGroup = i;
              playerEnemies[n] = [];
              // Записываем враждебные к игроку группы
              for (let fight of encounter.fightings) {
                if (fight[1] === playerGroup) {
                  playerEnemies[n].push(groupNames[encounter.groups[fight[0]].groupNumber]);
                }
              }
              n++;
            }
          }
          // Если группа враждебна, но нет метода Fighting
        } else if (encounter.fightings.length === 0) {
          let wereEnemy = false;
          playerEnemies[n] = [];
          // Проходимся по группам
          for (let group of encounter.groups) {
            // Есть одинокие агресивные группы? Заносим в массив
            if (group.groupNumber === 78 ||
              group.groupNumber === 114 ||
              group.groupNumber === 64 ||
              group.groupNumber === 108) {
              playerEnemies[n].push(groupNames[group.groupNumber]);
              wereEnemy = true;
            }
          }
          // Если групп не было
          if (wereEnemy) {
            n++;
          }
        }
      }
      // Массив не пустой
      if (playerEnemies.length > 0) {
        for (let enemy of playerEnemies) {
          // Если группа одна - записываем
          if (enemy.length == 1) {
            this._div.innerHTML += `${enemy[0]}; `
          } else if (enemy.length > 1) {
            // Если групп несколько, перечисляем с "и", а последнюю закрываем ";"
            for (let i = 0; i < enemy.length; i++) {
              if (i == (enemy.length - 1)) {
                this._div.innerHTML += `${enemy[i]}; `
              } else {
                this._div.innerHTML += `${enemy[i]} и `
              }
            }
          }
        }
      }
    }
    // Стычки
    this._div.innerHTML += '<br/><b><span style="color:Peru">Стычки: </span></b>';
    if (layer.info.table?.encs) {
      let playerOnEnc = false;
      let playerGroup = 0;
      let mobsFight = [];
      n = 0;
      // Проходимся по энкам
      for (let encounter of layer.info.table.encs) {
        // Если есть драки на энках и они не квестовые
        if (encounter.fightings.length !== 0) {
          // Проходимся по группам на энке
          for (let i = 0; i < encounter.groups.length; i++) {
            // Игрок учавствует в драке на энке?
            if (encounter.groups[i].groupNumber === -1) {
              npcGroupsFight = 0;
              mobsFight[n] = [];
              playerOnEnc = true;
              playerGroup = i;
              // Записываем группы, учавствующие в стычке между собой, но агрессивны к игроку
              for (let fight of encounter.fightings) {
                if (fight[1] !== playerGroup) {
                  npcGroupsFight++;
                  for (let index of fight) {
                    mobsFight[n].push(groupNames[encounter.groups[index].groupNumber]);
                  }
                }
              }
              // Были стычки НПЦ между друг другом?
              if (npcGroupsFight !== 0) {
                n++;
              }
            }
          }
          // Если на энке деруться НПЦ, но игрока не трогают
          if (!playerOnEnc) {
            let simGroup = false;
            let currentGroup = '';
            mobsFight[n] = [];
            // Количество драк на энке
            for (let fights of encounter.fightings) {
              // Пройдемся по айди групп кто дерется
              for (let f of fights) {
                currentGroup = groupNames[encounter.groups[f].groupNumber];
                // Еще нет никого? Добавим первую группу в массив
                if (mobsFight[n].length === 0) {
                  mobsFight[n].push(currentGroup);
                } else {
                  // Если есть, проверим не совпадают ли группы
                  for (let ind of mobsFight[n]) {
                    if (ind === currentGroup) {
                      simGroup = true;
                      break;
                    }
                  }
                  // Похожих групп нет? Добавляем
                  if (!simGroup) {
                    mobsFight[n].push(currentGroup);
                  }
                }
              }
            }
            n++;
          }
        }
        playerOnEnc = false;
      }
      // Массив не пустой
      if (mobsFight.length > 0) {
        for (let fight of mobsFight) {
          // Если группа одна - записываем
          if (fight.length == 1) {
            this._div.innerHTML += `${fight[0]}; `
          } else if (fight.length > 1) {
            // Если групп несколько, перечисляем с "и", а последнюю закрываем ";"
            for (let i = 0; i < fight.length; i++) {
              if (i == (fight.length - 1)) {
                this._div.innerHTML += `${fight[i]}; `
              } else {
                this._div.innerHTML += `${fight[i]} и `
              }
            }
          }
        }
      }
    }
    if (layer.info.table?.encs) {
      for (let key of layer.info.table.encs) {
        if (key.locationPid === 198) {
          this._div.innerHTML += '<br/><b><span style="color:blue">Есть довоенный форт</span></b>';
        }
      }
    }

    // Квестовые локации
    this._div.innerHTML += '<br/><b><span style="color:purple">Квестовые локации: </span></b>';
    if (layer.info.table?.encs) {
      for (let key of layer.info.table.encs) {
        if (key.locationPid === 82 ||
          key.locationPid === 84 ||
          key.locationPid === 85 ||
          key.locationPid === 86 ||
          key.locationPid === 87) {
          this._div.innerHTML += `${questsName[key.locationPid]}; `
        }
      }
    }
    this._div.innerHTML += '<br/><b><span style="font-size:small">Опыт за энки = (100 - скиталец - сложность*2) (от 5 до 95) </span></b>';
  } else {
    this._div.innerHTML = '<h4>Выберите объект</h4>' + 'Нет информации';
  }

}
link.addTo(map);
info.addTo(map);
search.addTo(map);