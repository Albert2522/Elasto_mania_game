define(["physics"], function (physics, map) {
    // return [physics.line(40, 150, 90, 250),
    //         physics.line(90, 250, 140, 150)];
    return [
            physics.line(0, 0, 0, 350),
            physics.line(0, 350, 100, 370),
            physics.line(100, 370, 250, 320),
            physics.line(250, 320, 350, 340),
            physics.line(350, 340, 400, 340),
            physics.line(400, 340, 500, 290),
            physics.line(500, 290, 500, 290),
            physics.line(500, 290, 650, 310),
            physics.line(650, 310, 700, 330),
            physics.line(700, 330, 850, 340),
            physics.line(850, 340, 850, 330),
            physics.line(850, 330, 1000, 350),
            physics.line(1000, 350, 1000, 360),
            physics.line(1000, 360, 1200, 360),
            physics.line(1200, 360, 4000, 360),
            physics.line(4000, 360, 4000, 0)
            ];

    // return [
    //   physics.line(0, 0, 0, 400),
    //   physics.line(0, 400, 2000, 400),
    //   physics.line(2000, 400, 2000, 0)
    // ];
});
