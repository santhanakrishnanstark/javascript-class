// Student Registeration Form 

// show others hobby field on toggle

document.querySelector('.other-hobby-check').addEventListener('change', function (event) {
    let hobbyToggleState = event.target.checked;

    if(hobbyToggleState) {
        document.querySelector('.other-hobby-field').classList.add('show');
    }else {
        document.querySelector('.other-hobby-field').classList.remove('show');
    }
})