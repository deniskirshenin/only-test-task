const map = document.querySelector('.map');

map.addEventListener('click', (evt) => {
    if (evt.target.closest('.map__pin')) {
        console.log('map pin');
        const buttonText = evt.target.getAttribute('data-text');
        
        if (evt.target.textContent.trim() === "") {
            evt.target.textContent = buttonText;
            evt.target.classList.add('is-active');
          } else {
            evt.target.textContent = "";
            evt.target.classList.remove('is-active');
          }
    }
});
