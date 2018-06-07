const form = document.querySelector('form')


const buildSpan = function(name, value, color) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    el.style.color = color
    return el
}


//Changes the first header based on the form input
const formSubmit = function(ev){
    ev.preventDefault();

    const f = ev.target
    const spell = f.spellName.value
    const mana = f.manaCost.value
    
    const list = document.querySelector('ul')
    const item = document.createElement('li')

    const spellSpan = buildSpan('spell', spell, 'red')
    const manaSpan = buildSpan('mana', mana, 'blue')

    item.appendChild(spellSpan)
    item.appendChild(document.createTextNode(`\u00A0\u00A0\u00A0 || \u00A0\u00A0\u00A0`))
    item.appendChild(manaSpan)
    item.classList.add('item')
    list.appendChild(item)

}


//Event handler to submit the form
form.addEventListener('submit', formSubmit);

//Event handler for pressing enter
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) { //Keycode for enter (13)
        formSubmit; 
    }
})
