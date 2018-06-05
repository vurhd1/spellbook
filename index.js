const button1 = document.querySelector('button');
const header1 = document.querySelector('#header1');
const header2 = document.querySelector('#header2');


function changeHeader(){
    header1.textContent = 'Changed it';
    header2.textContent = 'Changed it';

}

button1.addEventListener('click', changeHeader);
