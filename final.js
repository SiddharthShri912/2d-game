const buttonElement = document.querySelector('.btn');
const inputElement = document.querySelector('.in').value;
let warrior = JSON.parse(localStorage.getItem('past')) || []; // * here we pull out the warrior array from local storage to display old players

let memoryHTML = '';

for(let i = warrior.length - 1; i > warrior.length - 12; i--){ // * displaying the latest 11 players names
    memoryHTML += `<p> ${warrior[i]} </p>`;
}
document.querySelector('.bruh').innerHTML = memoryHTML;


buttonElement.addEventListener('click',() => {
    let warrior = JSON.parse(localStorage.getItem('past')) || [];
    const inputElement = document.querySelector('.in').value
    warrior.push(inputElement);
    localStorage.setItem('past',JSON.stringify(warrior));
    document.querySelector('.in').value = '';
    document.querySelector('.status').innerHTML = 'Thank You!';

    let memoryHTML = '';
    
    for(let i = warrior.length - 1; i > warrior.length - 12; i--){ // * doing the same thing onclick of the button so the user can see their name get added instantly
        const element = warrior[i];
        memoryHTML += `<p> ${element} </p>`;
    }
    document.querySelector('.bruh').innerHTML = memoryHTML;
});

const playAgain = document.querySelector('.play-again');

playAgain.addEventListener('click', () => {
    setTimeout(() => { // ! adding 2 second delay
        location.href = 'index.html';
    },2000);
});