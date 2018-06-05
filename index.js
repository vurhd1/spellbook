const button1 = document.querySelector('button')
const header1 = document.querySelector('#header1')
const header2 = document.querySelector('#header2')

//Changes the second header
function changeHeader(){
    header2.textContent = 'Changed it'
}

//Changes the first header based on the form input
function formSubmit(){
    const input = document.getElementsByName('change')[0].value;
    header1.textContent = input
    return false;
}

//Event handler for clicking the Change Text button
button1.addEventListener('click', changeHeader);

//Event handler for pressing enter
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) { //Keycode for enter (13)
        formSubmit();
    }
})
