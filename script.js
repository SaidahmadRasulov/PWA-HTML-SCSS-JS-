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


const form = document.querySelector('#signForm');
const output = document.getElementById('output_text');
const registerForm = document.getElementById('form');

function handleSign() {
    if(form[0].value !== '' && form[1].value !== '') {
        output.innerHTML = "<h1 class='success_title'>Your account is sign in successfuly!</h1>"
        setTimeout(() => {
            output.innerHTML = ''
        }, 3000)
        form[0].value = '';
        form[1].value = '';
    } else {
        output.innerHTML = "<h1 class='fail_title'>Your account isn't sign in successfuly!</h1>"
        setTimeout(() => {
            output.innerHTML = ''
        }, 3000)
    }
}

console.log(registerForm)
function handleRegister() {
    if(registerForm[0].value !== '' && registerForm[1].value !== '' && registerForm[2].value !== '') {
        output.innerHTML = "<h1 class='success_title'>Your account is register successfuly!</h1>"
        setTimeout(() => {
            output.innerHTML = ''
        }, 3000)
        registerForm[0].value = '';
        registerForm[1].value = '';
        registerForm[2].value = '';
    } else {
        output.innerHTML = "<h1 class='fail_title'>Your account isn't register successfuly!</h1>"
        setTimeout(() => {
            output.innerHTML = ''
        }, 3000)
    }
}

if("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then(res => console.log('service work register'))
            .catch(err => console.log('error', err))
    })
}