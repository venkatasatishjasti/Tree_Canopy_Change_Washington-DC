const sliderStates = {};

function changeImageSlide(sliderId, direction) {
    if (!sliderStates[sliderId]) {
        sliderStates[sliderId] = { currentIndex: 0 };
    }
    
    const state = sliderStates[sliderId];
    const container = document.getElementById(sliderId);
    if (!container) return;
    
    const wrapper = container.querySelector('.images-wrapper');
    const dots = container.querySelectorAll('.slider-dot');
    const totalSlides = 2;
    
    state.currentIndex += direction;
    
    if (state.currentIndex < 0) {
        state.currentIndex = totalSlides - 1;
    } else if (state.currentIndex >= totalSlides) {
        state.currentIndex = 0;
    }
    
    wrapper.style.transform = `translateX(-${state.currentIndex * 50}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === state.currentIndex);
    });
}

function goToImageSlide(sliderId, index) {
    if (!sliderStates[sliderId]) {
        sliderStates[sliderId] = { currentIndex: 0 };
    }
    
    const state = sliderStates[sliderId];
    const container = document.getElementById(sliderId);
    if (!container) return;
    
    const wrapper = container.querySelector('.images-wrapper');
    const dots = container.querySelectorAll('.slider-dot');
    
    state.currentIndex = index;
    wrapper.style.transform = `translateX(-${state.currentIndex * 50}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === state.currentIndex);
    });
}
