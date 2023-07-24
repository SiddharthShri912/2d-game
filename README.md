# 2d-game
A Mario-type 2d game made in JavaScript and HTML using canvas element.

Note: Also for some reason this only works if the browser is on 50% zoom. So, I do wish to make it better in the future. Also, The physics and movement looks very clunky as i couldnt find a good sprite.

So I used vanilla Javascript to create this. To make a player I used a class and a constructor and gave it some properties like velocity and position and using eventlistners on keys like w a s d , I made it so the blocks gains and loses velocity. Also there is a gravity property I have added some physics. All the rendering is done using the method  requestAnimationFrame() and keep drawing the player as its position changes according to user input.

Also implemented platoforms using the classes and made a collision logic, Not the best but it workds for this version.

The death claues is falling below the canvas height and it brings the player to the starting position.

The win condition is calculated with how many pixels has the user travelled.

Also the game creates and illusion of moving forward by moving the platforms and other elements on and off the screen, but the user is always in the 0 to 400 px x coordinates.

Future Plans: 
1. Make a better collision function
2. Make more levels and add difficulty
3. Add a score system and implement an actual leaderboard
4. Make double jump a better feature than an infinite jump.
5. Use better sprite, although I do not how to create sprites and backgrounds and platforms, in future I do want to learn and make it by myself.

I want to learn an actual JavaScript Framework which makes this much easier, but i find vanilla Javascript to be easy and challenging at the same time I am very comfortable with the syntax but I do wish to learn new things in the future.

The physics implemented can be improved and optimized to make the game more easy or harder and ultimately implement a difficulty system.

It was a great experience to learn JavaScript classes and its Object oriented side of things and definetly want to add to this project later on with more knowledge
