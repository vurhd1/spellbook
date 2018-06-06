const form = document.querySelector('form')

//Changes the first header based on the form input
const formSubmit = function(ev){
    ev.preventDefault()

    const f = ev.target
    const spell = f.spellName.value
    const mana = f.manaCost.value
    document.querySelector('#spells').innerHTML +=
    `<li>
        <span style="color:red">${spell}</span>
        \u00A0\u00A0\u00A0 || \u00A0\u00A0\u00A0
        <span style="color:blue">${mana} mana</span>
    </li>`
    //otherAdd(spell, mana)
}

function otherAdd(spell, mana){
    const list = document.querySelector('ul')
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(`${spell} \u00A0\u00A0\u00A0 || \u00A0\u00A0\u00A0 ${mana} mana`))
    list.appendChild(item)
}

//Event handler to submit the form
form.addEventListener('submit', formSubmit)

//Event handler for pressing enter
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) { //Keycode for enter (13)
        formSubmit();
    }
})
