function createLayerToggle(map) {
    try {
        map.addSource('trees-2020', {
            type: 'vector',
            url: 'mapbox://venkata123.6rvnm8qq'
        });

        map.addSource('trees-2024', {
            type: 'vector',
            url: 'mapbox://venkata123.0b0vr90j'
        });

        map.on('sourcedata', (e) => {
            if (e.isSourceLoaded && e.sourceId === 'trees-2020' && !map.getLayer('trees-2020-fill')) {
                const source = map.getSource('trees-2020');
                if (source && source.vectorLayerIds) {
                    const layerName = source.vectorLayerIds[0];
                    
                    map.addLayer({
                        id: 'trees-2020-fill',
                        type: 'fill',
                        source: 'trees-2020',
                        'source-layer': layerName,
                        paint: {
                            'fill-color': '#ff0000',
                            'fill-opacity': 0.6
                        },
                        layout: {
                            'visibility': 'none'
                        }
                    });

                    map.addLayer({
                        id: 'trees-2020-line',
                        type: 'line',
                        source: 'trees-2020',
                        'source-layer': layerName,
                        paint: {
                            'line-color': '#ff0000',
                            'line-width': 2
                        },
                        layout: {
                            'visibility': 'none'
                        }
                    });
                }
            }

            if (e.isSourceLoaded && e.sourceId === 'trees-2024' && !map.getLayer('trees-2024-fill')) {
                const source = map.getSource('trees-2024');
                if (source && source.vectorLayerIds) {
                    const layerName = source.vectorLayerIds[0];
                    
                    map.addLayer({
                        id: 'trees-2024-fill',
                        type: 'fill',
                        source: 'trees-2024',
                        'source-layer': layerName,
                        paint: {
                            'fill-color': '#228B22',
                            'fill-opacity': 0.6
                        },
                        layout: {
                            'visibility': 'none'
                        }
                    });

                    map.addLayer({
                        id: 'trees-2024-line',
                        type: 'line',
                        source: 'trees-2024',
                        'source-layer': layerName,
                        paint: {
                            'line-color': '#228B22',
                            'line-width': 2
                        },
                        layout: {
                            'visibility': 'none'
                        }
                    });
                }
            }
        });
        
    } catch(error) {
        console.error('Error adding layers:', error);
    }
}

function toggleLayer(map, layerPrefix, isVisible) {
    const visibility = isVisible ? 'visible' : 'none';
    try {
        if (map.getLayer(`${layerPrefix}-fill`)) {
            map.setLayoutProperty(`${layerPrefix}-fill`, 'visibility', visibility);
        }
        if (map.getLayer(`${layerPrefix}-line`)) {
            map.setLayoutProperty(`${layerPrefix}-line`, 'visibility', visibility);
        }
    } catch(e) {
        console.error('Error toggling layer:', e);
    }
}

// Initialize toggle controls
function initializeLayerControls(map) {
    const toggle2020 = document.getElementById('toggle-2020');
    toggle2020.addEventListener('change', (e) => {
        toggleLayer(map, 'trees-2020', e.target.checked);
    });

    const toggle2024 = document.getElementById('toggle-2024');
    toggle2024.addEventListener('change', (e) => {
        toggleLayer(map, 'trees-2024', e.target.checked);
    });
}
