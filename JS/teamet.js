document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.bottom-scroll-container');
    const leftArrow = document.querySelector('.scroll-left');
    const rightArrow = document.querySelector('.scroll-right');
    const memberWidth = 420;
    let currentPosition = 0;
    let isScrolling = false;

    // Clone all members multiple times to ensure smooth infinite scroll
    const originalMembers = Array.from(container.children);
    for (let i = 0; i < 3; i++) {  // Clone the set 3 times
        originalMembers.forEach(member => {
            const clone = member.cloneNode(true);
            container.appendChild(clone);
        });
    }

    function updateScroll(smooth = true) {
        container.style.transition = smooth ? 'transform 0.5s ease' : 'none';
        container.style.transform = `translateX(${currentPosition}px)`;
    }

    function scrollRight() {
        if (isScrolling) return;
        isScrolling = true;
        
        currentPosition -= memberWidth;
        updateScroll();

        // Reset position when reaching far right
        if (Math.abs(currentPosition) >= memberWidth * (originalMembers.length * 2)) {
            setTimeout(() => {
                currentPosition = -memberWidth * originalMembers.length;
                updateScroll(false);
            }, 500);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }

    function scrollLeft() {
        if (isScrolling) return;
        isScrolling = true;

        currentPosition += memberWidth;
        updateScroll();

        // Reset position when reaching far left
        if (currentPosition >= -memberWidth * (originalMembers.length - 2)) {
            setTimeout(() => {
                currentPosition = -memberWidth * originalMembers.length;
                updateScroll(false);
            }, 500);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }

    leftArrow.addEventListener('click', scrollLeft);
    rightArrow.addEventListener('click', scrollRight);
});
