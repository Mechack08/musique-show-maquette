const popSongCards = document.querySelectorAll('.pop-song-card');
const popCardSong = document.querySelectorAll('.pop-song-icon');
const menu = document.querySelector('.menu-container')
const slider = document.querySelector('.news')

let holding = false;
let firstClickX;
let alreadyLeftScrolled;
let velocity;
let rafID;

slider.addEventListener('mousedown', e => {
    holding = true;

    firstClickX = e.pageX - slider.offsetLeft;

    alreadyLeftScrolled = slider.scrollLeft;
})

slider.addEventListener('mousemove', e => {
    if(!holding) return;

    /* important */
    const x = e.pageX - slider.offsetLeft;

    /* important */
    const scrolled = (x - firstClickX) * 2;

    const prevScrollLeft = slider.scrollLeft;

    /* important */
    slider.scrollLeft = alreadyLeftScrolled - scrolled;

    velocity = slider.scrollLeft - prevScrollLeft;
    
    stopTransition()
})

slider.addEventListener('mouseup', () => {
    holding = false;
    startTransition();
})

slider.addEventListener('mouseleave', () => {
    holding = false;
})

window.addEventListener('scroll', () => {
    const {scrollTop} = document.documentElement;
    if(scrollTop >= 58){
        menu.classList.add('menu-pos-fixed')
    }
    else{
        menu.classList.remove('menu-pos-fixed')
    }
})

popSongCards.forEach((popcard, i) => {
    popcard.addEventListener('mouseenter', () => {
        const icon = popCardSong[i];
        icon.classList.add('pop-song-icon-show')
    })

    popcard.addEventListener('mouseleave', () => {
        const icon = popCardSong[i];
        icon.classList.remove('pop-song-icon-show')
    })
})

function startTransition(){
    stopTransition()

    rafID = requestAnimationFrame(decreasingTransition)
}

function stopTransition(){
    cancelAnimationFrame(rafID)
}

function decreasingTransition(){
    slider.scrollLeft += velocity;
    velocity *= 0.95;
    if(Math.abs(velocity) > 0.5) {
        rafID = requestAnimationFrame(decreasingTransition)
    }
}

/* Touch mobile */
slider.addEventListener('touchstart', e => {
    holding = true;
    // pageX => la largeur entre mon click et le DOCUMENT
    firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
  
    alreadyLeftScrolled = slider.scrollLeft;
    stopTransition()
})

slider.addEventListener('touchend', () => {
    holder = false;
    startTransition()
})

slider.addEventListener('touchmove', e => {
    if(!holding) return;
  
    const x = e.targetTouches[0].pageX - slider.offsetLeft;
  
    const scrolled = (x - firstClickX) * 2;
  
    const prevScrollLeft = slider.scrollLeft;
  
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
  
    velocity = slider.scrollLeft - prevScrollLeft;
})