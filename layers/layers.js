var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Monorail_3 = new ol.format.GeoJSON();
var features_Monorail_3 = format_Monorail_3.readFeatures(json_Monorail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monorail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monorail_3.addFeatures(features_Monorail_3);
var lyr_Monorail_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monorail_3, 
                style: style_Monorail_3,
                interactive: true,
                title: '<img src="styles/legend/Monorail_3.png" /> Monorail'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4 = format_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1225568 101.6342516'
            });
var format_PINCoord312255681016342516Jalan1713_5 = new ol.format.GeoJSON();
var features_PINCoord312255681016342516Jalan1713_5 = format_PINCoord312255681016342516Jalan1713_5.readFeatures(json_PINCoord312255681016342516Jalan1713_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord312255681016342516Jalan1713_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord312255681016342516Jalan1713_5.addFeatures(features_PINCoord312255681016342516Jalan1713_5);
var lyr_PINCoord312255681016342516Jalan1713_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord312255681016342516Jalan1713_5, 
                style: style_PINCoord312255681016342516Jalan1713_5,
                interactive: true,
                title: '<img src="styles/legend/PINCoord312255681016342516Jalan1713_5.png" /> PIN:  Coord: 3.1225568 101.6342516 (Jalan 17/13)'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6 = format_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1705264 101.696063'
            });
var format_PINCoord31705264101696063wayunknow_7 = new ol.format.GeoJSON();
var features_PINCoord31705264101696063wayunknow_7 = format_PINCoord31705264101696063wayunknow_7.readFeatures(json_PINCoord31705264101696063wayunknow_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord31705264101696063wayunknow_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord31705264101696063wayunknow_7.addFeatures(features_PINCoord31705264101696063wayunknow_7);
var lyr_PINCoord31705264101696063wayunknow_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord31705264101696063wayunknow_7, 
                style: style_PINCoord31705264101696063wayunknow_7,
                interactive: true,
                title: '<img src="styles/legend/PINCoord31705264101696063wayunknow_7.png" /> PIN:  Coord: 3.1705264 101.696063 (way unknow)'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8 = format_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1601126 101.6959692'
            });
var format_PINCoord316011261016959692wayunknow_9 = new ol.format.GeoJSON();
var features_PINCoord316011261016959692wayunknow_9 = format_PINCoord316011261016959692wayunknow_9.readFeatures(json_PINCoord316011261016959692wayunknow_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord316011261016959692wayunknow_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord316011261016959692wayunknow_9.addFeatures(features_PINCoord316011261016959692wayunknow_9);
var lyr_PINCoord316011261016959692wayunknow_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord316011261016959692wayunknow_9, 
                style: style_PINCoord316011261016959692wayunknow_9,
                interactive: true,
                title: '<img src="styles/legend/PINCoord316011261016959692wayunknow_9.png" /> PIN:  Coord: 3.1601126 101.6959692 (way unknow)'
            });
var format_ISOCHRONEPolygon6000secondsCoord317191021017216753_10 = new ol.format.GeoJSON();
var features_ISOCHRONEPolygon6000secondsCoord317191021017216753_10 = format_ISOCHRONEPolygon6000secondsCoord317191021017216753_10.readFeatures(json_ISOCHRONEPolygon6000secondsCoord317191021017216753_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEPolygon6000secondsCoord317191021017216753_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEPolygon6000secondsCoord317191021017216753_10.addFeatures(features_ISOCHRONEPolygon6000secondsCoord317191021017216753_10);
var lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEPolygon6000secondsCoord317191021017216753_10, 
                style: style_ISOCHRONEPolygon6000secondsCoord317191021017216753_10,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEPolygon6000secondsCoord317191021017216753_10.png" /> ISOCHRONE(Polygon): 600.0 seconds. Coord: 3.1719102 101.7216753'
            });
var format_PINCoord317191021017216753wayunknow_11 = new ol.format.GeoJSON();
var features_PINCoord317191021017216753wayunknow_11 = format_PINCoord317191021017216753wayunknow_11.readFeatures(json_PINCoord317191021017216753wayunknow_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord317191021017216753wayunknow_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord317191021017216753wayunknow_11.addFeatures(features_PINCoord317191021017216753wayunknow_11);
var lyr_PINCoord317191021017216753wayunknow_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord317191021017216753wayunknow_11, 
                style: style_PINCoord317191021017216753wayunknow_11,
                interactive: true,
                title: '<img src="styles/legend/PINCoord317191021017216753wayunknow_11.png" /> PIN:  Coord: 3.1719102 101.7216753 (way unknow)'
            });
var format_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12 = new ol.format.GeoJSON();
var features_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12 = format_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.readFeatures(json_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.addFeatures(features_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12);
var lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12, 
                style: style_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12,
                interactive: true,
                title: '<img src="styles/legend/ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.png" /> ISOCHRONE(Street Network): 600.0 seconds. Coord: 3.1719131 101.7216782'
            });
var format_PINCoord317191311017216782wayunknow_13 = new ol.format.GeoJSON();
var features_PINCoord317191311017216782wayunknow_13 = format_PINCoord317191311017216782wayunknow_13.readFeatures(json_PINCoord317191311017216782wayunknow_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINCoord317191311017216782wayunknow_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINCoord317191311017216782wayunknow_13.addFeatures(features_PINCoord317191311017216782wayunknow_13);
var lyr_PINCoord317191311017216782wayunknow_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PINCoord317191311017216782wayunknow_13, 
                style: style_PINCoord317191311017216782wayunknow_13,
                interactive: true,
                title: '<img src="styles/legend/PINCoord317191311017216782wayunknow_13.png" /> PIN:  Coord: 3.1719131 101.7216782 (way unknow)'
            });
var format_CyclingRoad_Time_14 = new ol.format.GeoJSON();
var features_CyclingRoad_Time_14 = format_CyclingRoad_Time_14.readFeatures(json_CyclingRoad_Time_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CyclingRoad_Time_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CyclingRoad_Time_14.addFeatures(features_CyclingRoad_Time_14);
var lyr_CyclingRoad_Time_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CyclingRoad_Time_14, 
                style: style_CyclingRoad_Time_14,
                interactive: true,
                title: '<img src="styles/legend/CyclingRoad_Time_14.png" /> Cycling Road_Time'
            });
var format_FootWalking_Distance_15 = new ol.format.GeoJSON();
var features_FootWalking_Distance_15 = format_FootWalking_Distance_15.readFeatures(json_FootWalking_Distance_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootWalking_Distance_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootWalking_Distance_15.addFeatures(features_FootWalking_Distance_15);
var lyr_FootWalking_Distance_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootWalking_Distance_15, 
                style: style_FootWalking_Distance_15,
                interactive: true,
                title: '<img src="styles/legend/FootWalking_Distance_15.png" /> Foot Walking_Distance'
            });
var format_FootWalking_Time_16 = new ol.format.GeoJSON();
var features_FootWalking_Time_16 = format_FootWalking_Time_16.readFeatures(json_FootWalking_Time_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootWalking_Time_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootWalking_Time_16.addFeatures(features_FootWalking_Time_16);
var lyr_FootWalking_Time_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootWalking_Time_16, 
                style: style_FootWalking_Time_16,
                interactive: true,
                title: '<img src="styles/legend/FootWalking_Time_16.png" /> Foot Walking_Time'
            });
var format_Pedestrian_Isochrone_17 = new ol.format.GeoJSON();
var features_Pedestrian_Isochrone_17 = format_Pedestrian_Isochrone_17.readFeatures(json_Pedestrian_Isochrone_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Isochrone_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Isochrone_17.addFeatures(features_Pedestrian_Isochrone_17);
var lyr_Pedestrian_Isochrone_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedestrian_Isochrone_17, 
                style: style_Pedestrian_Isochrone_17,
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Isochrone_17.png" /> Pedestrian_Isochrone'
            });
var format_FootWalking_Time_Isochrone_18 = new ol.format.GeoJSON();
var features_FootWalking_Time_Isochrone_18 = format_FootWalking_Time_Isochrone_18.readFeatures(json_FootWalking_Time_Isochrone_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootWalking_Time_Isochrone_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootWalking_Time_Isochrone_18.addFeatures(features_FootWalking_Time_Isochrone_18);
var lyr_FootWalking_Time_Isochrone_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FootWalking_Time_Isochrone_18, 
                style: style_FootWalking_Time_Isochrone_18,
                interactive: true,
    title: 'Foot Walking_Time_Isochrone<br />\
    <img src="styles/legend/FootWalking_Time_Isochrone_18_0.png" /> 5 min<br />\
    <img src="styles/legend/FootWalking_Time_Isochrone_18_1.png" /> 10 min<br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Monorail_3.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.setVisible(true);lyr_PINCoord312255681016342516Jalan1713_5.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.setVisible(true);lyr_PINCoord31705264101696063wayunknow_7.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.setVisible(true);lyr_PINCoord316011261016959692wayunknow_9.setVisible(true);lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_10.setVisible(true);lyr_PINCoord317191021017216753wayunknow_11.setVisible(true);lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.setVisible(true);lyr_PINCoord317191311017216782wayunknow_13.setVisible(true);lyr_CyclingRoad_Time_14.setVisible(true);lyr_FootWalking_Distance_15.setVisible(true);lyr_FootWalking_Time_16.setVisible(true);lyr_Pedestrian_Isochrone_17.setVisible(true);lyr_FootWalking_Time_Isochrone_18.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleHybrid_1,lyr_OSMStandard_2,lyr_Monorail_3,lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4,lyr_PINCoord312255681016342516Jalan1713_5,lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6,lyr_PINCoord31705264101696063wayunknow_7,lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8,lyr_PINCoord316011261016959692wayunknow_9,lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_10,lyr_PINCoord317191021017216753wayunknow_11,lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12,lyr_PINCoord317191311017216782wayunknow_13,lyr_CyclingRoad_Time_14,lyr_FootWalking_Distance_15,lyr_FootWalking_Time_16,lyr_Pedestrian_Isochrone_17,lyr_FootWalking_Time_Isochrone_18];
lyr_Monorail_3.set('fieldAliases', {'Code': 'Code', 'Station': 'Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'Id': 'Id', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord312255681016342516Jalan1713_5.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord31705264101696063wayunknow_7.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord316011261016959692wayunknow_9.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_10.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord317191021017216753wayunknow_11.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', });
lyr_PINCoord317191311017216782wayunknow_13.set('fieldAliases', {'id': 'id', 'descriptio': 'descriptio', 'x': 'x', 'y': 'y', });
lyr_CyclingRoad_Time_14.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_FootWalking_Distance_15.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_FootWalking_Time_16.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Pedestrian_Isochrone_17.set('fieldAliases', {'IsolineTyp': 'IsolineTyp', 'IsolineDis': 'IsolineDis', 'IsolineD_1': 'IsolineD_1', 'IsolineMob': 'IsolineMob', 'IsolineSta': 'IsolineSta', 'IsolineS_1': 'IsolineS_1', 'IsolineInp': 'IsolineInp', 'IsolineI_1': 'IsolineI_1', 'IsolineS_2': 'IsolineS_2', 'Visualizat': 'Visualizat', 'Population': 'Population', 'layer': 'layer', 'path': 'path', });
lyr_FootWalking_Time_Isochrone_18.set('fieldAliases', {'Station': 'Station', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Monorail_3.set('fieldImages', {'Code': '', 'Station': '', 'Latitude': '', 'Longitude': '', 'Altitude': '', 'Id': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord312255681016342516Jalan1713_5.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord31705264101696063wayunknow_7.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord316011261016959692wayunknow_9.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_10.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord317191021017216753wayunknow_11.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.set('fieldImages', {'IsolineTyp': '', 'IsolineDis': '', 'IsolineD_1': '', 'IsolineMob': '', 'IsolineSta': '', 'IsolineS_1': '', 'IsolineInp': '', 'IsolineI_1': '', 'IsolineS_2': '', 'Visualizat': '', 'Population': '', });
lyr_PINCoord317191311017216782wayunknow_13.set('fieldImages', {'id': '', 'descriptio': '', 'x': '', 'y': '', });
lyr_CyclingRoad_Time_14.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_FootWalking_Distance_15.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_METERS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_FootWalking_Time_16.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Pedestrian_Isochrone_17.set('fieldImages', {'IsolineTyp': 'TextEdit', 'IsolineDis': 'TextEdit', 'IsolineD_1': 'TextEdit', 'IsolineMob': 'TextEdit', 'IsolineSta': 'TextEdit', 'IsolineS_1': 'TextEdit', 'IsolineInp': 'TextEdit', 'IsolineI_1': 'TextEdit', 'IsolineS_2': 'TextEdit', 'Visualizat': 'TextEdit', 'Population': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FootWalking_Time_Isochrone_18.set('fieldImages', {'Station': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Monorail_3.set('fieldLabels', {'Code': 'header label', 'Station': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'Altitude': 'header label', 'Id': 'header label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord312255681016342516_4.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord312255681016342516Jalan1713_5.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord31705264101696063_6.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord31705264101696063wayunknow_7.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord316011261016959692_8.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord316011261016959692wayunknow_9.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEPolygon6000secondsCoord317191021017216753_10.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord317191021017216753wayunknow_11.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ISOCHRONEStreetNetwork6000secondsCoord317191311017216782_12.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', });
lyr_PINCoord317191311017216782wayunknow_13.set('fieldLabels', {'id': 'no label', 'descriptio': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_CyclingRoad_Time_14.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_FootWalking_Distance_15.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_METERS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_FootWalking_Time_16.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Pedestrian_Isochrone_17.set('fieldLabels', {'IsolineTyp': 'no label', 'IsolineDis': 'no label', 'IsolineD_1': 'no label', 'IsolineMob': 'no label', 'IsolineSta': 'no label', 'IsolineS_1': 'no label', 'IsolineInp': 'no label', 'IsolineI_1': 'no label', 'IsolineS_2': 'no label', 'Visualizat': 'no label', 'Population': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_FootWalking_Time_Isochrone_18.set('fieldLabels', {'Station': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_FootWalking_Time_Isochrone_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});