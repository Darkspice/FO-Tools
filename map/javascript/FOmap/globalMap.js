// Добавляем координаты клеток в группу слоев
let _mapCell = {};
let layerMapCell = L.layerGroup();
let mapCellOptions = {
    opacity: 0,
    fillOpacity: 0,
}
for (let i = 0; i < 28; i++) {
    _mapCell[i] = {};
    for (let j = 0; j < 30; j++) {
        layerMapCell.addLayer(
            _mapCell[i][j] = new L.rectangle([xy([50 * i, 50 * j]), xy([50 * i + 50, 50 * j + 50])], mapCellOptions)
                .on({ mouseover: highlight, mouseout: resetHighlight, click: setFocus})
        );
        _mapCell[i][j].info = {};
        _mapCell[i][j].info.type = 'Encounter';
        _mapCell[i][j].info.coords = `${[i]} : ${[j]}`;
    }
}
// Добавляем сетку в группу слоев
let layerGrid = L.layerGroup();
let gridOptions = {
    color: '#7a6814',
    weight: 0.8,
    lineCap: "butt",
    lineJoin: "butt",
}
for (let i = 0; i <= 1500; i += 50) {
    layerGrid.addLayer(
        L.polyline([xy([0, i]), xy([1400, i])], gridOptions)
    );
}
for (let i = 0; i <= 1400; i += 50) {
    layerGrid.addLayer(
        L.polyline([xy([i, 0]), xy([i, 1500])], gridOptions)
    );
}


let bounds = [[0, 0], [1500, 1400]];
let classicMap = L.imageOverlay('wm.png', bounds);
let reliefMap = L.imageOverlay('relief.png', bounds);
let mapCells = L.imageOverlay('MapCells.png', bounds, { opacity: 0.5 });

let map = L.map('map', {
    crs: L.CRS.Simple,
    layers: [classicMap, layerMapCell, layerCities],
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
map.fitBounds(bounds);
let baseMaps = {
    "Стандартная карта": classicMap,
    "Рельеф": reliefMap,
}
let overlayMaps = {
    "Города": layerCities,
    "Клетки": layerMapCell,
    "Сетка": layerGrid,
    "Координаты": mapCells,
}
L.control.layers(baseMaps, overlayMaps).addTo(map);