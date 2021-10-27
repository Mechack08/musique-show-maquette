const popSongCards = document.querySelectorAll('.pop-song-card');
const popCardSong = document.querySelectorAll('.pop-song-icon');

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