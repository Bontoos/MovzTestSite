const newsContainer = document.querySelector('.news-wrapper');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;
let isScrolling = false;

function scrollNext() {
    if (isScrolling) return;
    
    const newsItems = document.querySelectorAll('.news');
    const nextIndex = (currentIndex + 1) % newsItems.length;
    
    // Only scroll if there's a valid next item
    if (nextIndex < newsItems.length) {
        isScrolling = true;
        currentIndex = nextIndex;
        
        newsItems[currentIndex].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'center'
        });
        
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
}

function scrollPrev() {
    if (isScrolling) return;
    
    const newsItems = document.querySelectorAll('.news');
    const prevIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    
    // Only scroll if there's a valid previous item
    if (prevIndex >= 0) {
        isScrolling = true;
        currentIndex = prevIndex;
        
        newsItems[currentIndex].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'center'
        });
        
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
}

arrowLeft.addEventListener('click', scrollPrev);
arrowRight.addEventListener('click', scrollNext);
