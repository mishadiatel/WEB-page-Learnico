const animateFunc = function(entries, observer){
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) return;
    if(!entry.target.dataset.wasanimated){
        makeAnimation(entry.target, entry.target.dataset.animation);
    }
    observer.unobserve(entry.target);
}

const makeAnimation = function(element, animName,  prefix = 'animate__'){
    new Promise((resolve, _) => {
        const animationName = `${prefix}${animName}`;
        
        element.classList.add(animationName);
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          element.classList.remove(animationName);
          
          resolve('Animation ended');
        }
    
        element.addEventListener('animationend', handleAnimationEnd, {once: true});
        element.setAttribute("data-wasanimated", "wasanimated");
    });
}

export const elObserver = new IntersectionObserver(animateFunc, {
    root: null,
    threshold: 0,
    rootMargin: '30px',
});




