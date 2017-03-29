define(["physics"], function (physics) {
    // return [physics.line(40, 150, 90, 250),
    //         physics.line(90, 250, 140, 150)];
    return [
            physics.line(0, 0, 0, 150),
            physics.line(0, 150, 100, 170),
            physics.line(100, 170, 250, 220),
            physics.line(250, 220, 350, 240),
            physics.line(350, 240, 400, 240),
            physics.line(400, 240, 500, 190),
            physics.line(500, 190, 500, 240),
            physics.line(500, 240, 650, 180),
            physics.line(650, 180, 700, 280),
            physics.line(700, 280, 850, 240),
            physics.line(850, 240, 850, 280),
            physics.line(850, 280, 1000, 180),
            physics.line(1000, 180, 1000, 200),
            physics.line(1000, 200, 1200, 180),
            physics.line(1200, 180, 2000, 180),
            physics.line(2000, 180, 2000, 0)
            ];

    // return [
    //   physics.line(0, 0, 0, 400),
    //   physics.line(0, 400, 2000, 400),
    //   physics.line(2000, 400, 2000, 0)
    // ];
});
