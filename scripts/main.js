requirejs(["vector", "render", "physics", "bike", "lines", "tools"],
function (vector, render, physics, bike, lines) {

// Globals
var stats = {};

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

    update();
}

function update() {
    render.clear();
    render.background();
    render.line(lines, 0);
    bike.update();
    render.final_flag();
    // render.blit();

    stats.update();
    window.requestAnimationFrame(update);
}

init();
});
