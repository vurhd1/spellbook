const button1 = document.querySelector('button');
const header1 = document.querySelector('h1');

function changeHeader(){
    header1.textContent = 'Changed it';
}

button1.addEventListener('click', changeHeader);
