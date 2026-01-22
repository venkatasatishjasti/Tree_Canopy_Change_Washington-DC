// Set Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoidmVua2F0YTEyMyIsImEiOiJjbWVybXBoZ2swOGtoMmpvamN0M2xiNjl5In0.L5UH-_-pl5NzilXlb-gWjQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-77.0369, 38.9072],
    zoom: 12
});

const pois = [
            {
                "coords": [38.86435276, -76.97804923],
                "address": "3999 8TH STREET SE",
                "image1": "3999 8TH STREET SE/Image1.png",
                "image2": "3999 8TH STREET SE/Image2.png",
                "image3": "3999 8TH STREET SE/Image3.png",
                "TotalTreeCount": 103,
                "TreeFundAmount": "$152,813.10"
            },
            {
                "coords": [38.86435276, -76.97804923],
                "address": "1808 WOODMONT PLACE SE",
                "image1": "1808 WOODMONT PLACE SE/Image1.png",
                "image2": "1808 WOODMONT PLACE SE/Image2.png",
                "image3": "1808 WOODMONT PLACE SE/Image3.png",
                "TotalTreeCount": 0,
                "TreeFundAmount": "$0"
            },
            {
                "coords": [38.85586857, -76.96997151],
                "address": "2483 ALABAMA AVENUE SE",
                "image1": "2483 ALABAMA AVENUE SE/Image1.png",
                "image2": "2483 ALABAMA AVENUE SE/Image2.png",
                "image3": "2483 ALABAMA AVENUE SE/Image3.png",
                "TotalTreeCount": 10,
                "TreeFundAmount": "$29,305.10"
            },
            {
                "coords": [38.85056964, -76.99532443],
                "address": "1200 PECAN STREET SE",
                "image1": "1200 PECAN STREET SE/Image1.png",
                "image2": "1200 PECAN STREET SE/Image2.png",
                "image3": "1200 PECAN STREET SE/Image3.png",
                "TotalTreeCount": 10,
                "TreeFundAmount": "$30,099.30"
            },
            {
                "coords": [38.84433388, -76.98827682],
                "address": "3210 13TH STREET SE",
                "image1": "3210 13TH STREET SE/Image1.png",
                "image2": "3210 13TH STREET SE/Image2.png",
                "image3": "3210 13TH STREET SE/Image3.png",
                "TotalTreeCount": 16,
                "TreeFundAmount": "$32,864.70"
            },
            {
                "coords": [38.84154981, -76.99433024],
                "address": "3301 WHEELER ROAD SE",
                "image1": "3301 WHEELER ROAD SE/Image1.png",
                "image2": "3301 WHEELER ROAD SE/Image2.png",
                "image3": "3301 WHEELER ROAD SE/Image3.png",
                "TotalTreeCount": 14,
                "TreeFundAmount": "$35,680.70"
            },
            {
                "coords": [38.85431743, -76.98708229],
                "address": "2417 ELVANS ROAD SE",
                "image1": "2417 ELVANS ROAD SE/Image1.png",
                "image2": "2417 ELVANS ROAD SE/Image2.png",
                "image3": "2417 ELVANS ROAD SE/Image3.png",
                "TotalTreeCount": 17,
                "TreeFundAmount": "$37,287.25"
            },
            {
                "coords": [38.85700596, -76.9838335],
                "address": "2301 ELVANS ROAD SE",
                "image1": "2301 ELVANS ROAD SE/Image1.png",
                "image2": "2301 ELVANS ROAD SE/Image2.png",
                "image3": "2301 ELVANS ROAD SE/Image3.png",
                "TotalTreeCount": 18,
                "TreeFundAmount": "$37,305.40"
            },
            {
                "coords": [38.82802058, -76.99695901],
                "address": "4272 7TH STREET SE",
                "image1": "4272 7TH STREET SE/Image1.png",
                "image2": "4272 7TH STREET SE/Image2.png",
                "image3": "4272 7TH STREET SE/Image3.png",
                "TotalTreeCount": 20,
                "TreeFundAmount": "$42,938.50"
            },
            {
                "coords": [38.84858359, -76.97259706],
                "address": "2118 RIDGECREST COURT SE",
                "image1": "2118 RIDGECREST COURT SE/Image1.png",
                "image2": "2118 RIDGECREST COURT SE/Image2.png",
                "image3": "2118 RIDGECREST COURT SE/Image3.png",
                "TotalTreeCount": 36,
                "TreeFundAmount": "$45,529.55"
            },
            {
                "coords": [38.8291083, -77.00159025],
                "address": "4201 4TH STREET SE",
                "image1": "4201 4TH STREET SE/Image1.png",
                "image2": "4201 4TH STREET SE/Image2.png",
                "image3": "4201 4TH STREET SE/Image3.png",
                "TotalTreeCount": 18,
                "TreeFundAmount": "$45,874.95"
            },
            {
                "coords": [38.84710897, -76.9953767],
                "address": "2730 MARTIN LUTHER KING JR AVENUE SE",
                "image1": "2730 MARTIN LUTHER KING JR AVENUE SE/Image1.png",
                "image2": "2730 MARTIN LUTHER KING JR AVENUE SE/Image2.png",
                "image3": "2730 MARTIN LUTHER KING JR AVENUE SE/Image3.png",
                "TotalTreeCount": 21,
                "TreeFundAmount": "$45,961.85"
            },
            {
                "coords": [38.83234357, -76.99516344],
                "address": "3999 8TH STREET SE",
                "image1": "3999 8TH STREET SE/Image1.png",
                "image2": "3999 8TH STREET SE/Image2.png",
                "image3": "3999 8TH STREET SE/Image3.png",
                "TotalTreeCount": 33,
                "TreeFundAmount": "$70,929.65"
            },
            {
                "coords": [38.86435276, -76.97804923],
                "address": "1808 WOODMONT PLACE SE",
                "image1": "1808 WOODMONT PLACE SE/Image1.png",
                "image2": "1808 WOODMONT PLACE SE/Image2.png",
                "image3": "1808 WOODMONT PLACE SE/Image3.png",
                "TotalTreeCount": 103,
                "TreeFundAmount": "$152,813.10"
            },
            {
                "coords": [38.88292355, -76.97600939],
                "address": "1901 E STREET SE",
                "image1": "1901 E STREET SE/Image1.png",
                "image2": "1901 E STREET SE/Image2.png",
                "image3": "1901 E STREET SE/Image3.png",
                "TotalTreeCount": 63,
                "TreeFundAmount": "$30,929.80"
            },
            {
                "coords": [38.88292355, -76.97600939],
                "address": "4500 QUARLES STREET NE",
                "image1": "4500 QUARLES STREET NE/Image1.png",
                "image2": "4500 QUARLES STREET NE/Image2.png",
                "image3": "4500 QUARLES STREET NE/Image3.png",
                "TotalTreeCount": 39,
                "TreeFundAmount": "$31,050.25"
            },
            {
                "coords": [38.88287592, -76.92424204],
                "address": "5401 D STREET SE",
                "image1": "5401 D STREET SE/Image1.png",
                "image2": "5401 D STREET SE/Image2.png",
                "image3": "5401 D STREET SE/Image3.png",
                "TotalTreeCount": 68,
                "TreeFundAmount": "$31,551.85"
            },
            {
                "coords": [38.92253165, -76.99923256],
                "address": "435 EDGEWOOD STREET NE",
                "image1": "435 EDGEWOOD STREET NE/Image1.png",
                "image2": "435 EDGEWOOD STREET NE/Image2.png",
                "image3": "435 EDGEWOOD STREET NE/Image3.png",
                "TotalTreeCount": 11,
                "TreeFundAmount": "$34,056.55"
            },
            {
                "coords": [38.92786652, -77.00056816],
                "address": "3015 4TH STREET NE",
                "image1": "3015 4TH STREET NE/Image1.png",
                "image2": "3015 4TH STREET NE/Image2.png",
                "image3": "3015 4TH STREET NE/Image3.png",
                "TotalTreeCount": 43,
                "TreeFundAmount": "$57,538.25"
            },
            {
                "coords": [38.94197271, -77.00691871],
                "address": "4301 HAREWOOD ROAD NE",
                "image1": "4301 HAREWOOD ROAD NE/Image1.png",
                "image2": "4301 HAREWOOD ROAD NE/Image2.png",
                "image3": "4301 HAREWOOD ROAD NE/Image3.png",
                "TotalTreeCount": 84,
                "TreeFundAmount": "$82,245.90"
            },
            {
                "coords": [38.93601495, -77.02869115],
                "address": "1125 SPRING ROAD NW",
                "image1": "1125 SPRING ROAD NW/Image1.png",
                "image2": "1125 SPRING ROAD NW/Image2.png",
                "image3": "1125 SPRING ROAD NW/Image3.png",
                "TotalTreeCount": 16,
                "TreeFundAmount": "$29,857.85"
            },
            {
                "coords": [38.97376077, -77.01373888],
                "address": "6896 LAUREL STREET NW",
                "image1": "6896 LAUREL STREET NW/Image1.png",
                "image2": "6896 LAUREL STREET NW/Image2.png",
                "image3": "6896 LAUREL STREET NW/Image3.png",
                "TotalTreeCount": 13,
                "TreeFundAmount": "$38,687.00"
            },
            {
                "coords": [38.97733108, -77.02700192],
                "address": "7100 GEORGIA AVENUE NW",
                "image1": "7100 GEORGIA AVENUE NW/Image1.png",
                "image2": "7100 GEORGIA AVENUE NW/Image2.png",
                "image3": "7100 GEORGIA AVENUE NW/Image3.png",
                "TotalTreeCount": 43,
                "TreeFundAmount": "$104,623.20"
            },
            {
                "coords": [38.96737281, -77.06027638],
                "address": "5901 UTAH AVENUE NW",
                "image1": "5901 UTAH AVENUE NW/Image1.png",
                "image2": "5901 UTAH AVENUE NW/Image2.png",
                "image3": "5901 UTAH AVENUE NW/Image3.png",
                "TotalTreeCount": 71,
                "TreeFundAmount": "$131,112.30"
            },
            {
                "coords": [38.93310281, -77.06154264],
                "address": "3100 MACOMB STREET NW",
                "image1": "3100 MACOMB STREET NW/Image1.png",
                "image2": "3100 MACOMB STREET NW/Image2.png",
                "image3": "3100 MACOMB STREET NW/Image3.png",
                "TotalTreeCount": 34,
                "TreeFundAmount": "$33,347.60"
            },
            {
                "coords": [38.92506059, -77.0547217],
                "address": "2660 WOODLEY ROAD NW",
                "image1": "2660 WOODLEY ROAD NW/Image1.png",
                "image2": "2660 WOODLEY ROAD NW/Image2.png",
                "image3": "2660 WOODLEY ROAD NW/Image3.png",
                "TotalTreeCount": 23,
                "TreeFundAmount": "$33,987.25"
            },
            {
                "coords": [38.96276404, -77.08230977],
                "address": "5455 WESTERN AVENUE NW",
                "image1": "5455 WESTERN AVENUE NW/Image1.png",
                "image2": "5455 WESTERN AVENUE NW/Image2.png",
                "image3": "5455 WESTERN AVENUE NW/Image3.png",
                "TotalTreeCount": 11,
                "TreeFundAmount": "$34,730.30"
            },
            {
                "coords": [38.90515719, -77.03850346],
                "address": "1145 17TH STREET NW",
                "image1": "1145 17TH STREET NW/Image1.png",
                "image2": "1145 17TH STREET NW/Image2.png",
                "image3": "1145 17TH STREET NW/Image3.png",
                "TotalTreeCount": 21,
                "TreeFundAmount": "$29,495.40"
            },
            {
                "coords": [38.90724268, -77.05232105],
                "address": "2425 N STREET NW",
                "image1": "2425 N STREET NW/Image1.png",
                "image2": "2425 N STREET NW/Image2.png",
                "image3": "2425 N STREET NW/Image3.png",
                "TotalTreeCount": 16,
                "TreeFundAmount": "$34,177.00"
            },
            {
                "coords": [38.92514124, -77.02200578],
                "address": "2711 GEORGIA AVENUE NW",
                "image1": "2711 GEORGIA AVENUE NW/Image1.png",
                "image2": "2711 GEORGIA AVENUE NW/Image2.png",
                "image3": "2711 GEORGIA AVENUE NW/Image3.png",
                "TotalTreeCount": 9,
                "TreeFundAmount": "$31,119.00"
            },
            {
                "coords": [38.92440201, -77.03220541],
                "address": "2641 14TH STREET NW",
                "image1": "2641 14TH STREET NW/Image1.png",
                "image2": "2641 14TH STREET NW/Image2.png",
                "image3": "2641 14TH STREET NW/Image3.png",
                "TotalTreeCount": 8,
                "TreeFundAmount": "$33,486.20"
            }


];

map.on('load', () => {
    createLayerToggle(map);
    createTreeMarkers(map, pois);
    initializeLayerControls(map);
});
