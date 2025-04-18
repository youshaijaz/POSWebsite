document.addEventListener('DOMContentLoaded', function() {
    const animatedItem = document.querySelector('.animated-item');
    
    function checkScroll() {
        const itemPosition = animatedItem.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (itemPosition < screenPosition) {
            animatedItem.classList.add('show');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    // Check on load in case content is already visible
    checkScroll();
});
