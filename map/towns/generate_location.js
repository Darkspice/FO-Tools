
/**
 * Создает карту локации с объектами
 * @param {array} npc массив с НПЦ на локации
 * @param {array} bounds массив с границами
 * @param {string} path1 путь к картинки локации
 * @param {string} path2 путь к картинки локации без стен и крыши
 * @param {object} locations объект с переходами и выходами с локации
 */
function generateLocation(npc, bounds, path1, path2, locations) {

	let npcGrp = L.layerGroup();
		let npcPopup = null
		let popupOptions = {
			autoClose: false,
			closeOnClick: false,
			closeOnEscapeKey: false,
			closeButton: false,
			minWidth: 20
		}

		for (let index of npc) {
			if (Array.isArray(index.crds[0])) {
				for (coords of index.crds) {
					npcGrp.addLayer(
						npcPopup = L.popup(popupOptions)
							.setLatLng(coords)
							.setContent(`<b>${index.name}</b>`)
					)
				}
			} else {
				npcGrp.addLayer(
					npcPopup = L.popup(popupOptions)
						.setLatLng(index.crds)
						.setContent(`<b style ='color: white'>${index.name}</b>`)
				)
			}
		}

		let classicMap = L.imageOverlay(path1, bounds);
		let noRoofMap = L.imageOverlay(path2, bounds);

		let map = L.map('map', {
			crs: L.CRS.Simple,
			layers: [classicMap, npcGrp],
			attributionControl: false,
			zoomControl: false,
			doubleClickZoom: false,
			minZoom: -2,
			maxZoom: 3,
			maxBoundsViscosity: 1,
			maxBounds: [
				[-5000, 5000],
				[5000, -5000]
			],
		});
		map.fitBounds(bounds).on('click', onMapClick);

		let baseMaps = {
			"Стандартный вид": classicMap,
			"Без крыши и стен": noRoofMap,
		}
		let overlayMaps = {
			"Имена НПЦ": npcGrp,
		}

		L.control.layers(baseMaps, overlayMaps).addTo(map);

		function onExitGrid(e) {
			if (e.target.exit) {
				return window.location.href = '../../index.html';
			} else {
				return window.location.href = e.target.link;
			}
		}

		// Оформление сетки выхода
		let exitOptions = {
			color: 'red',
			opacity: 0.1,
		}
		// Оформление перехода на другую локацию
		let nextLocOptions = {
			color: 'green',
			opacity: 0.1,
		}

		for (let loc in locations) {
			if (locations[loc].isExit) {
				let locationObject = L.polygon(locations[loc].coords, exitOptions).addTo(map).on('click', onExitGrid)
				locationObject.exit = true
			} else {
				let locationObject = L.polygon(locations[loc].coords, nextLocOptions).addTo(map).on('click', onExitGrid)
				locationObject.link = locations[loc].link
			}
		}

		function onMapClick(e) {
			console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`)
		}

}