var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PetaKecamatanPati_0 = new ol.format.GeoJSON();
var features_PetaKecamatanPati_0 = format_PetaKecamatanPati_0.readFeatures(json_PetaKecamatanPati_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaKecamatanPati_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetaKecamatanPati_0.addFeatures(features_PetaKecamatanPati_0);var lyr_PetaKecamatanPati_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaKecamatanPati_0, 
                style: style_PetaKecamatanPati_0,
    title: 'Peta Kecamatan Pati<br />\
    <img src="styles/legend/PetaKecamatanPati_0_0.png" /> Rendah<br />\
    <img src="styles/legend/PetaKecamatanPati_0_1.png" /> Sedang<br />\
    <img src="styles/legend/PetaKecamatanPati_0_2.png" /> Sangat tinggi<br />'
        });

lyr_PetaKecamatanPati_0.setVisible(true);
var layersList = [baseLayer,lyr_PetaKecamatanPati_0];
lyr_PetaKecamatanPati_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kambing': 'Kambing', });
lyr_PetaKecamatanPati_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kambing': 'TextEdit', });
lyr_PetaKecamatanPati_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kambing': 'inline label', });
lyr_PetaKecamatanPati_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});