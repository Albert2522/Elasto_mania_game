# Extreme Jelly Bike 2

### Background

Extreme Jelly Bike 2 is a motorbike video game inspired by Elasto Mania (platform motorbike video game released in 2000). It explores the notion of elastic motorcycles. The goal of each level is to reach final destination.

The player controls a motorbike rider, and has to restart the level if  their head touches a solid structure. Player has 3 lives to play.

The physical model, such as the elasticity of the bike frame, permits a wide range of tricks to be performed.

There is some "Stilts mode" which is generally an easy mode. This mode helps to accomplish some levels(>10).

Also user can control Jellyness of the bike using slidebar. Usually make bike more "jelly" helps to complete more bumpy maps.

Using all of these features provides to User the big variety of trick.

This game contains built-in level-generator, so number of levels is inifinite.

Even I did this game, my best result is level 9. Try to beat it! :-)


### Functionality & MVP  

With this Elasto Mania version, users is able to:

- [ ] Start, pause, and reset the game board
- [ ] Drive forward, backward and stop the bike
- [ ] Change physics during the game using controllers
- [ ] Finish the game


### Architecture and Technologies

This project will is implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Verlet integration and simple vector geometry,
- To implement bike model Advanced Character Physics by Thomas Jakobsen (http://www.cs.cmu.edu/afs/cs/academic/class/15462-s13/www/lec_slides/Jakobsen.pdf),
- Stats.js as js performance monitor(frames rendered in the last second and etc)
- Require.js to bundle and serve up the various scripts.


### Improvements

- Change bike physics to rotate the bike's body while jumping
- Add "Jump feature"

P.s There is no "Extreme Jelly Bike 1", just like this name. :-)
