define(["vector", "physics", "render", "lines"],
function (vector, physics, render, lines) {
    var circles = [physics.circle(20, 150, 0),
                   physics.circle(20, 200, 86),
                   physics.circle(20, 100, 86)];
    var head = circles[0];
    var front = circles[1];
    var back = circles[2];
    window.front_wheel = front;
    window.back_wheel = back;
    var constraints = [physics.constraint(head, front, 80),
                       physics.constraint(head, back, 80),
                       physics.constraint(front, back, 80)];
    var wheelAcceleration = 0.1;
    var level = window.level;

    return {
        accelerating: false,
        breaking: false,

        swap: function() {
            var temp = front;
            front = back;
            back = temp;
            wheelAcceleration = -wheelAcceleration;
        },

        renew_pos: function () {
          circles = [physics.circle(20, 150, 0),
                     physics.circle(20, 200, 86),
                     physics.circle(20, 100, 86)];

          head = circles[0];
          front = circles[1];
          back = circles[2];
          constraints = [physics.constraint(head, front, 80),
                         physics.constraint(head, back, 80),
                         physics.constraint(front, back, 80)];
        },

        update: function() {
            if (window.bike_reverse) {
              wheelAcceleration =  wheelAcceleration > 0 ? -wheelAcceleration : wheelAcceleration;
              if (front === window.front_wheel) {
                var temp = front;
                front = back;
                back = temp;
              }
            } else {
              wheelAcceleration =  wheelAcceleration < 0 ? -wheelAcceleration : wheelAcceleration;
              if (front !== window.front_wheel) {
                var temp = front;
                front = back;
                back = temp;
              }
            }
            var that = this;

            constraints.forEach(function (constraint) {
                constraint.solve();
            });
            head.detectCollisions(window.lines, (e) => {
              if (window.lives > 0) {
                window.lives -= 1;
                window.pause = true;
                window.restart_round = true;
              }
            });

            if (head.pos.x >= 3900) {
              window.finish = true;
            }



            circles.forEach(function(circle) {
                if (circle === back) {
                    if (that.accelerating) {
                        circle.rotationSpeed += wheelAcceleration;
                    }
                }
                circle.integrate();
                if (that.breaking) circle.rotationSpeed = 0;
                circle.detectCollisions(window.lines, function(nearestPointOnLine) {
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
                // console.log(head.pos.x, head.pos.y);
                render.circle(circles[0].pos.x, circles[0].pos.y, circles[0].radius, circles[0].rotation, "head");
                render.line(constraints[0].v1, constraints[0].v2, "front spring");
                render.line(constraints[1].v1, constraints[1].v2, "back spring");
                render.circle(circles[1].pos.x, circles[1].pos.y, circles[1].radius, circles[1].rotation, "wheel");
                render.circle(circles[2].pos.x, circles[2].pos.y, circles[2].radius, circles[2].rotation, "wheel");
            if (Math.abs(head.pos.y - head.prevpos.y) > 0 ) {
              render.moveView(head.pos.x - head.prevpos.x, 0);
            }
        }
    };
});
