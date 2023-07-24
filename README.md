# 2d-game
A Mario-type 2d game made in JavaScript and HTML using canvas element.

So I used vanilla Javascript to create this. To make a player I used a class and a constructor and gave it some properties like velocity and position and using eventlistners on keys like w a s d , I made it so the blocks gains and loses velocity. Also there is a gravity property I have added some physics. All the rendering is done using the method  requestAnimationFrame() and keep drawing the player as its position changes according to user input.

Also implemented platoforms using the classes and made a collision logic, Not the best but it workds for this version.

The death claues is falling below the canvas height.

The win condition is calculated with how many pixels has the user travelled.

Also the game creates and illusion of moving forward by moving the platforms and other elements on and off the screen, but the user is always in the 0 to 400 px x coordinates.

Future Plans: 
1. Make a better collision function
2. Make more levels and add difficulty
3. Add a score system and implement an actual leaderboard
4. Make double jump a better feature than an infinite jump.
5. Use better sprite, although I do not how to create sprites and backgrounds and platforms, in future I do want to learn and make it by myself.
