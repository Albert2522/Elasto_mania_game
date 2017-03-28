# Elasto_mania

### Background

Elasto Mania is a platform motorbike video game released in 2000. It explores the notion of elastic motorcycles. The goal of each level is to touch the flower. Some require the player to collect apples spread throughout it before doing so.

The player controls a motorbike rider, and has to restart the level if  their head touches a solid structure (such as a wall or ground, ceiling). All the apples in a level must be collected before the player can touch the flower and proceed to the next level. Only the head and wheels of the driver interact with the level, their body being able to overlap walls without injury.

The physical model, such as the elasticity of the bike frame, permits a wide range of tricks to be performed.

This game contains only one level. However new level can be easy generated, but that is another project.

### Functionality & MVP  

With this Elasto Mania version, users is able to:

- [ ] Start, pause, and reset the game board
- [ ] Drive and stop the bike
- [ ] Rotate bike to left and right
- [ ] Turn the bike around
- [ ] Collect apples
- [ ] Finish the game touching the flower

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn,
and the About modal.  Game controls will include Start, Pause, Reset the Game, Instructions button and Sample Video button. To control the bike, user should use keyboard.

![wireframes](https://github.com/Albert2522/Elasto_mania_game/blob/master/images/wireframes.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Verlet integration and simple vector geometry,
- To implement bike model Advanced Character Physics by Thomas Jakobsen (http://www.cs.cmu.edu/afs/cs/academic/class/15462-s13/www/lec_slides/Jakobsen.pdf),
- Pixi.js for interactive graphics.
- Stats.js as js performance monitor(frames rendered in the last second and etc)
- Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Implement the Bike class, basic controller's handlers. Make the bike be able to drive with different speed and stop.


**Day 2**: Study Pixi.js, think about graphics. Make a plan about game design. Game logic, drive on surface with obstacles. Game score, simple design.

**Day 3**: Make the viewport follow the bike. Complete drawing a map for game.

**Day 4**: Complete general style and design.

### Bonus features

- Rotate bike to the left and right
- Create more levels to play
