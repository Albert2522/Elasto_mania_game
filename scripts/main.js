requirejs(["vector", "render", "physics", "bike", "lines", "tools"],
function (vector, render, physics, bike, lines) {

// Globals
var stats = {};
window.level = 1;

if (true) {
  console.log("HERE");
}

window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

// Handle keyboard input
document.onkeypress = function(ev) {
    //console.log(ev.keyCode)
    switch(ev.keyCode) {
    case 119:
        bike.accelerating = true;
        break;
    case 115:
        bike.breaking = true;
        break;
    case 32:
        bike.swap();
        break;
    case 13:
        window.pause = window.lives === 0 ? window.pause : !window.pause;
    default:
        console.log("keyCode: " + ev.keyCode);
        break;
    }
};

document.onkeyup = function(ev) {
    switch(ev.keyCode) {
    case 87:
        bike.accelerating = false;
        break;
    case 83:
        bike.breaking = false;
        break;
    }
};

// Handle mouse input
var mouse = {
    clicked: false,
    pos: vector(),
};

document.onmousedown = function(ev) {
    mouse.clicked = true;
    mouse.pos.x = ev.screenX;
    mouse.pos.y = ev.screenY;
};

document.onmouseup = function(ev) {
    mouse.clicked = false;
};

document.onmousemove = function(ev) {
    if (mouse.clicked) {
        render.moveView(-ev.screenX + mouse.pos.x, -ev.screenY + mouse.pos.y);
        mouse.pos.x = ev.screenX;
        mouse.pos.y = ev.screenY;
    }
};

function init() {
    stats = new Stats();
    document.body.appendChild(stats.domElement);
    window.lines = lines.mapGenerator(window.level);
    window.lives = 3;
    window.restart_round = false;
    window.pause = false;
    window.finish = false;
    start();
}

function update() {
    console.log(window.lives);
    render.clear();
    render.background();
    render.line(window.lines, 0);
    bike.update();
    // render.blit();

    stats.update();
    if (window.restart_round) {
      setTimeout( () => {
        window.pause = false;
        window.restart_round = false;
      }, 1000);
      bike.renew_pos();
      render.new_raund();
      render.show_blood_spot();
    }
    if (window.lives === 0) {
      render.show_game_over();
      setTimeout(() => window.location.reload(), 5000);
      window.pause = true;
    }

    if (window.finish) {
      window.level += 1;
      window.lines = lines.mapGenerator(window.level);
      bike.renew_pos();
      render.new_raund();
      window.finish = false;
    }
}

function start() {
    if (!window.pause) {
    update();
  }
    if (window.pause && window.lives !== 0 && !window.restart_round) {
      render.pause_image();
    }
    requestAnimFrame(start);
}


init();
});
