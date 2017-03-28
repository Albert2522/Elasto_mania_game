define(["vector", "physics", "render", "lines"],
function (vector, physics, render, lines) {
    console.log(lines);
    var circles = [physics.circle(20, 150, 0),
                   physics.circle(20, 200, 86),
                   physics.circle(20, 100, 86)];
    var head = circles[0];
    var front = circles[1];
    var back = circles[2];
    var constraints = [physics.constraint(head, front, 100),
                       physics.constraint(head, back, 100),
                       physics.constraint(front, back, 100)];
    var wheelAcceleration = 0.1;

    return {
        accelerating: false,
        breaking: false,

        swap: function() {
            var temp = front;
            front = back;
            back = temp;
            wheelAcceleration = -wheelAcceleration;
        },

        update: function() {
            var that = this;

            constraints.forEach(function (constraint) {
                constraint.solve();
            });

            head.detectCollisions(lines, (e) => {
              alert("Game Over");
              document.location.reload();
            });

            circles.forEach(function(circle) {
                if (circle === back) {
                    if (that.accelerating) {
                        circle.rotationSpeed += wheelAcceleration;
                    }
                }
                circle.integrate();
                if (that.breaking) circle.rotationSpeed = 0;
                circle.detectCollisions(lines, function(nearestPointOnLine) {
                    var offset = circle.projectOut(nearestPointOnLine);
                    if (that.breaking) {
                        circle.rotate(offset, 0);
                    } else {
                        circle.rotate(offset);
                    }
                });
            });

            this.render();
        },

        render: function() {
            constraints.forEach(function (constraint) {
                render.line(constraint.v1, constraint.v2);
            });
                render.circle(circles[0].pos.x, circles[0].pos.y, circles[0].radius, circles[0].rotation, "head");
                render.circle(circles[1].pos.x, circles[1].pos.y, circles[1].radius, circles[1].rotation, "wheel");
                render.circle(circles[2].pos.x, circles[2].pos.y, circles[2].radius, circles[2].rotation, "wheel");
            if (Math.abs(head.pos.y - head.prevpos.y) > 1 ) {
              render.moveView(head.pos.x - head.prevpos.x, head.pos.y - head.prevpos.y  -1);
            }
        }
    };
});
