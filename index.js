const form = document.querySelector('form')
let spellList = []

const buildSpan = function(name, value, color) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    el.style.color = color
    return el
}

const removeSpell = function(ev){
    const button = ev.target
    const item = button.closest('.item')
    const i = spellList.indexOf(item)
    spellList.splice(i, 1)
    item.parentNode.removeChild(item)
}

const favorite = function(ev){
    const button = ev.target
    const item = button.closest('.item')
    item.classList.add('favorite')
    item.querySelector('.spell').style.fontWeight = '900'
    item.querySelector('.mana').style.fontWeight = '900'
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
    manaSpan.appendChild(document.createTextNode(` mana`))

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', removeSpell)

    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite')
    favoriteButton.textContent = 'favorite'
    favoriteButton.addEventListener('click', favorite)

    item.appendChild(spellSpan)
    item.appendChild(manaSpan)
    item.classList.add('item')
    item.appendChild(deleteButton)
    item.appendChild(favoriteButton)

    spellList.push(item);
    list.appendChild(item)

    f.reset();

}


//Event handler to submit the form
form.addEventListener('submit', formSubmit);

//Event handler for pressing enter
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) { //Keycode for enter (13)
        formSubmit; 
    }
})
