const button1 = document.querySelector('button')
const header1 = document.querySelector('#header1')
const header2 = document.querySelector('#header2')


function changeHeader(){
    header2.textContent = 'Changed it'

}

function formSubmit(){
    const input = document.getElementsByName('change')[0].value;
    console.log(input)
    header1.textContent = input
    return false;
}

button1.addEventListener('click', changeHeader);

