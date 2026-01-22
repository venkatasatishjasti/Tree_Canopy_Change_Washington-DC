// Tree Markers functionality for Mapbox GL JS
function createTreeMarkers(map, pois) {
    const markers = [];
    
    pois.forEach(poi => {
        const el = document.createElement('img');
        el.src = 'tree-icon.png';
        el.style.width = '35px';
        el.style.height = '35px';
        el.style.cursor = 'pointer';
        
        const sliderId = `slider-${Math.random().toString(36).substr(2, 9)}`;
        
        const popupContent = `
            <div class="popup-header">
                <div class="image-container" id="${sliderId}">
                    <button class="slider-arrow prev" onclick="changeImageSlide('${sliderId}', -1)">‹</button>
                    <button class="slider-arrow next" onclick="changeImageSlide('${sliderId}', 1)">›</button>
                    <div class="images-wrapper">
                        <div class="image-set">
                            <img src="${poi.image1}" 
                                 alt="${poi.address} - Image 1" 
                                 class="popup-image" 
                                 onerror="this.style.display='none';" />
                            <img src="${poi.image2}" 
                                 alt="${poi.address} - Image 2" 
                                 class="popup-image" 
                                 onerror="this.style.display='none';" />
                        </div>
                        <div class="image-set">
                            <img src="${poi.image3}" 
                                 alt="${poi.address} - Image 3" 
                                 class="popup-image full" 
                                 onerror="this.style.display='none';" />
                        </div>
                    </div>
                    <div class="slider-dots">
                        <span class="slider-dot active" onclick="goToImageSlide('${sliderId}', 0)"></span>
                        <span class="slider-dot" onclick="goToImageSlide('${sliderId}', 1)"></span>
                    </div>
                </div>
            </div>
            <div class="popup-body">
                <div class="popup-title">${poi.address}</div>
                <div class="popup-address">Total Tree Count: ${poi.TotalTreeCount}</div>
                <div class="popup-address">Tree Fund Amount: ${poi.TreeFundAmount}</div>
            </div>
        `;

        // Create Mapbox marker with custom element
        const marker = new mapboxgl.Marker(el)
            .setLngLat([poi.coords[1], poi.coords[0]]) // [lng, lat] for Mapbox
            .setPopup(
                new mapboxgl.Popup({
                    maxWidth: '350px',
                    className: 'custom-popup'
                }).setHTML(popupContent)
            )
            .addTo(map);

        markers.push(marker);
    });

    const bounds = new mapboxgl.LngLatBounds();
    pois.forEach(poi => {
        bounds.extend([poi.coords[1], poi.coords[0]]);
    });
    map.fitBounds(bounds, { padding: 50 });
    
    return markers;
}
