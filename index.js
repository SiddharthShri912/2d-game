const myModal = new bootstrap.Modal('#mymodal');

window.addEventListener('DOMContentLoaded', () => {
    myModal.show();
})

const canvas = document.querySelector('canvas');
canvas.width = innerWidth; // * this makes it so it takes full width of the screen.
canvas.height = innerHeight; // * this makes it so it takes full height of the screen.

const c = canvas.getContext('2d');
const gravity = 0.8;
const mc = new Image();
mc.src = 'mc.png';
class Player{ // * player class
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        
        this.velocity = {
            x: 0,
            y: 1
        }
        this.image = mc;
        this.width = 10;
        this.height = 165;
    }

    draw(){
        c.drawImage(this.image,this.position.x,this.position.y);
    }

    update(){
        this.draw();
        this.position.y += this.velocity.y; // ! this adds velocity to the player in y axis
        this.position.x += this.velocity.x; // ! this add velocity to the player in x axis
        if(this.position.y + this.height + this.velocity.y <= canvas.height){ // * this prevents the square to go outside the screen and adds gravity
            this.velocity.y += gravity;
        } /*else{ // * this is what is really stopping the box it removes gravity when we hit the bottom.
            this.velocity.y = 0;
        }  */ // * So over here we need to comment this code inorder to add a death clause of falling off / death pits
        
    }
}

class Platform {
    constructor({ x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        c.fillStyle = 'blue';
        c.drawImage(this.image,this.position.x,this.position.y);
    }
};

const image = new Image();
image.src = 'plat.png';

let player = new Player(); // * creating a new player
let platforms = [new Platform({ x: 0, y: 1350, image}),new Platform({ x: 700, y: 1350, image}),new Platform({ x: 1800, y: 1350, image}),new Platform({ x: 2700, y: 1350, image}),new Platform({ x: 2700, y: 1130, image}),new Platform({ x: 3600, y: 1130, image}),new Platform({ x: 3600, y: 1350, image}), new Platform({ x: 3600, y: 900, image}),new Platform({ x: 3600, y: 750, image}),new Platform({ x: 4500, y: 400, image}),new Platform({ x: 5800, y: 700, image}),new Platform({ x: 6800, y: 700, image}),new Platform({ x: 7700, y: 100, image}),new Platform({ x: 9000, y: 600, image}),new Platform({ x: 9900, y: 900, image}),new Platform({ x: 11000, y: 1350, image}),new Platform({ x: 11700, y: 1350, image})];  
let keys = {
    left : {
        pressed : false
    },
    right : {
        pressed : false
    }
}

let scrollOffset = 0; // * adding win condition

function animate(){ // * creating animation
    requestAnimationFrame(animate); // ? add the function as an argument which keeps it in a loop
    c.clearRect(0,0,canvas.width,canvas.height); // * this gives a much clear animation and makes it so jus the square moves down
    platforms.forEach(platform => {
        platform.draw();
    });
    player.update(); // ! always want to update player last we want player in the foreground
    if(keys.right.pressed && player.position.x < 400){ // * this while condition gives the illusion of movement when in reality we are jus going to move the platform after a certain point also handles left and right movement.
        player.velocity.x = 2;
    } else if(keys.left.pressed && player.position.x > 100){
        player.velocity.x = -2;
    } else {
        player.velocity.x = 0;
        if(keys.right.pressed){
            scrollOffset += 5;
            platforms.forEach(platform => {
                platform.position.x -= 5;
            });
        } else if(keys.left.pressed){
            scrollOffset -= 5;
            platforms.forEach(platform => {
                platform.position.x += 5;
            });
        }
    }

    // ! collision detection conditions here for the platform
    platforms.forEach(platform => {
        platform.draw();
        if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >=  platform.position.x && player.position.x <= platform.position.x + platform.width){
            player.velocity.y = 0;
        }
    });

    if(scrollOffset >= 11000){
        location.href = 'final.html';
    }

    if( player.position.y > canvas.height){
        reset();
    }
}

function reset(){
    player = new Player(); // * creating a new player
    platforms = [new Platform({ x: 0, y: 1350, image}),new Platform({ x: 700, y: 1350, image}),new Platform({ x: 1800, y: 1350, image}),new Platform({ x: 2700, y: 1350, image}),new Platform({ x: 2700, y: 1130, image}),new Platform({ x: 3600, y: 1130, image}),new Platform({ x: 3600, y: 1350, image}), new Platform({ x: 3600, y: 900, image}),new Platform({ x: 3600, y: 750, image}),new Platform({ x: 4500, y: 400, image}),new Platform({ x: 5800, y: 700, image}),new Platform({ x: 6800, y: 700, image}),new Platform({ x: 7700, y: 100, image}),new Platform({ x: 9000, y: 600, image}),new Platform({ x: 9900, y: 900, image}),new Platform({ x: 11000, y: 1350, image}),new Platform({ x: 11700, y: 1350, image})];   

    scrollOffset = 0; // * adding win condition

    function animate(){ // * creating animation
        requestAnimationFrame(animate); // ? add the function as an argument which keeps it in a loop
        c.clearRect(0,0,canvas.width,canvas.height); // * this gives a much clear animation and makes it so jus the square moves down
        platforms.forEach(platform => {
            platform.draw();
        });
        player.update(); // ! always want to update player last we want player in the foreground
        if(keys.right.pressed && player.position.x < 400){
            player.velocity.x = 2;
        } else if(keys.left.pressed && player.position.x > 100){
            player.velocity.x = -2;
        } else {
            player.velocity.x = 0;
            if(keys.right.pressed){
                scrollOffset += 5;
                platforms.forEach(platform => {
                    platform.position.x -= 5;
                });
            } else if(keys.left.pressed){
                scrollOffset -= 5;
                platforms.forEach(platform => {
                    platform.position.x += 5;
                });
            }
        }

        // ! collision detection conditions here for the platform
        platforms.forEach(platform => {
            platform.draw();
            if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >=  platform.position.x && player.position.x <= platform.position.x + platform.width){
                player.velocity.y = 0;
            }
        });

        if(scrollOffset >= 11400){
            keys.right.pressed = false;
            player.velocity.x = 0;
            location.href = 'final.html';
        }

        if( player.position.y > canvas.height){
            reset();
        }
    }
}

animate();

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = true;
            break;
        
        case 83:
            console.log('down');
            break;

        case 68:
            console.log('right');
            keys.right.pressed = true;
            break;

        case 87:
            console.log('up');
            player.velocity.y -= 20; // ! we have to subtract so the gravity doesnt make it so it goes upward we want it to go down
            break;
    }
});

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = false;
            break;
        
        case 83:
            console.log('down');
            break;

        case 68:
            console.log('right');
            keys.right.pressed = false;
            break;

        case 87:
            console.log('up');
            player.velocity.y -= 1; // ! we have to subtract so the gravity doesnt make it so it goes upward we want it to go down
            break;
    }
});