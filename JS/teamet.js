document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.bottom-container');
    const scrollContainer = document.querySelector('.bottom-scroll-container');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    
    let scrollPosition = 0;
    let animationFrameId = null;



    // Manual scroll buttons
    scrollLeftBtn.addEventListener('click', () => {
        isAutoScrolling = false;
        cancelAnimationFrame(animationFrameId);
        scrollPosition -= 444;
        if (scrollPosition < 0) {
            scrollPosition = scrollContainer.scrollWidth - container.offsetWidth + 444;
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });

    scrollRightBtn.addEventListener('click', () => {
        isAutoScrolling = false;
        cancelAnimationFrame(animationFrameId);
        scrollPosition += 444;
        if (scrollPosition >= scrollContainer.scrollWidth - container.offsetWidth + 444) {
            scrollPosition = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });
});