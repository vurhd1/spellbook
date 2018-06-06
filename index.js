const form = document.querySelector('form')

//Changes the first header based on the form input
const formSubmit = function(ev){
    ev.preventDefault()

    const f = ev.target
    const spell = f.spellName.value
    document.querySelector('h1').textContent = spell;
}

//Event handler to submit the form
form.addEventListener('submit', formSubmit)

//Event handler for pressing enter
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) { //Keycode for enter (13)
        formSubmit();
    }
})
