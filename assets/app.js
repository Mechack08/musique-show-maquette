const popSongCards = document.querySelectorAll('.pop-song-card');

popSongCards.forEach(popcard => {
    const popCardSong = document.querySelector('.pop-song-icon');

    popcard.addEventListener('mouseenter', () => {
       popCardSong.classList.add('pop-song-icon-show')
    })
    popcard.addEventListener('mouseleave', () => {
        popCardSong.classList.remove('pop-song-icon-show')
    })
})