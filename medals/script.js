let tables = document.querySelectorAll('table');
let selectedTr;
let counter = 0;

for (table of tables) {
	table.addEventListener('mousemove', onMouseMove);
	table.addEventListener('click', onMouseClick);
}

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