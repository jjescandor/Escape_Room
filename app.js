console.log('hello-world');

let gameRoom = document.querySelector('.game-room');
let livingRoom = document.querySelector('.living-room');
let diningRoom = document.querySelector('.dining-room');
let kitchen = document.querySelector('.kitchen');
let bedroom = document.querySelector('.bedroom');
console.log(bedroom);

function bedroomSwitch() {
    gameRoom.style.background = "url('img/bedroom.png')";
    gameRoom.style.backgroundSize = 'cover';
    gameRoom.style.transitionDuration = '1s';
}

function livingRoomSwitch() {
    gameRoom.style.background = "url('img/living-room.png')";
    gameRoom.style.backgroundSize = 'cover';
    gameRoom.style.transitionDuration = '1s';
}

function kitchenSwitch() {
    gameRoom.style.background = "url('img/kitchen.png')";
    gameRoom.style.backgroundSize = 'cover';
    gameRoom.style.transitionDuration = '1s';
}

function bedrooomSwitch() {
    gameRoom.style.background = "url('img/bedroom.png')";
    gameRoom.style.backgroundSize = 'cover';
    gameRoom.style.transitionDuration = '1s';
}


livingRoom.addEventListener('click', bedroomSwitch);
diningRoom.addEventListener('click', livingRoomSwitch);
kitchen.addEventListener('click', kitchenSwitch);
bedroom.addEventListener('click', bedrooomSwitch);


