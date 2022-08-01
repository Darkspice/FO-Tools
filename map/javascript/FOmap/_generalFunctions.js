// Преобразование координат
let yx = L.latLng;
/*
		Картинка у нас 1400 на 1500
		Делаем точку отсчета верхний левый угол как в фолаче
*/
// leaflet means first - latitude, second - longitude
let xy = function (x, y) {
	if (L.Util.isArray(x)) {    // When doing xy([x, y]);
		return yx(1500 - x[1], x[0]);
	}
	return yx(1500 - y, x);  // When doing xy(x, y);
};

// GeoJSON means first - longitude, second - latitude
let xyGeoJson = function (x) {
	if (L.Util.isArray(x)) {
		return [x[0], 1500 - x[1]];
	}

};

// Подстветка по наведению
let oldOptions = {};
let activeLayer = {};

function highlight(e) {
	let layer = e.target;
	if (activeLayer.focused !== undefined && activeLayer.focused === true) return;
	layer.highlighted = true;
	info.update(layer);
	oldOptions = {};
	Object.assign(oldOptions, layer.options);
	layer.setStyle(
		{
			opacity: 1,
			color: '#3388ff',
			weight: 3,
		}
	);
}
function resetHighlight(e) {
	let layer = e.target;
	if (activeLayer.focused !== undefined && activeLayer.focused === true) return;
	// info.update();
	if (layer.highlighted !== undefined && layer.highlighted !== false) {
		layer.setStyle(oldOptions);
		oldOptions = {};
		layer.highlighted = false;
	}
}

function setFocus(e) {
	let layer = e.target;
	if (!activeLayer.focused) {
		activeLayer = layer;
		activeLayer.focused = true;
		layer.setStyle(
			{
				opacity: 1,
				color: '#3388ff',
				weight: 3,
			}
		);
		return;
	}
	activeLayer.focused = false;
	activeLayer.setStyle(oldOptions);
	highlight(e);
}

function goIntoTown(e) {
	let layer = e.target;
	if (layer.info.link) {
		window.location.href = layer.info.link;
	}
}

function SetZone(x, y, table, difficulty, terrain, chance) {
	_mapCell[x][y].info.table = Tables[table];
	_mapCell[x][y].info.difficulty = difficulty;
	_mapCell[x][y].info.terrain = terrain;
	_mapCell[x][y].info.chance = chance;
}

/* TEST START */

/* let popup = L.popup();
function onMapClick(e) {
		popup
				.setLatLng(e.latlng)
				.setContent(e.latlng.toString())
				.openOn(map);
}
map.on('click', onMapClick);
*/


/* map.on('click', function(ev) {
		alert(`${ev.latlng.lng} ${1500 - ev.latlng.lat} `); // ev is an event object (MouseEvent in this case)
});
 */
/* TEST END */