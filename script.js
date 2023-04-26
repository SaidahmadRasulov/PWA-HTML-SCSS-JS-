const gamburger = document.querySelector('.media__group');
const header = document.getElementById("header");

function ToggleNav() {
    gamburger.classList.toggle('showNav');
    console.log(gamburger)
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('fixed__nav')
    } else {
        header.classList.remove('fixed__nav')
    }
});


if("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then(res => console.log('service work register'))
            .catch(err => console.log('error', err))
    })
}