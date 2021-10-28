const popSongCards = document.querySelectorAll('.pop-song-card');
const popCardSong = document.querySelectorAll('.pop-song-icon');
const menu = document.querySelector('.menu-container')

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