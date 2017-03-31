define(["vector" ,"lines"], function (vector) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var offset = vector();
    window.offset = offset;
    var twoPI = Math.PI / 10 + 0.0001;
    var head = new Image();
    var wheel = new Image();
    head.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/body.png";
    wheel.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/wheel1.png";
    var background = new Image();
    var sun = new Image();
    var angry_sun = new Image();
    var clouds = new Image();
    var flag = new Image();
    var pause_img = new Image();
    var gameover_img = new Image();
    var blood_spot = new Image();
    var level_up = new Image();
    flag.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/finish_flag.png";
    clouds.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/clouds_s.png"
    angry_sun.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/angry_sun.png"
    sun.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/sun.png"
    background.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/sky2.png";
    pause_img.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/pause_game.png";
    gameover_img.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/gameover_img.png";
    blood_spot.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/blood_spot.png";
    level_up.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/level_up.png";
    return {
        width: canvas.width,
        height: canvas.height,

        background: function () {
          // console.log(offset.x);
          if (background.complete) {
            ctx.drawImage(background,0, -200);
          } else {
            background.onload = function () {
              ctx.drawImage(background,0,0);
            };
          }
          ctx.stroke;
        },

        circle: function(x, y, r, rotstart, type) {
          ctx.beginPath();
          if (type === "head") {
            ctx.moveTo(x, y);
            let coord_x = offset.x < -30 ? x : x - 180;
            if (y > 200) {
              if (sun.complete) {
                ctx.drawImage(sun, coord_x, 10);
              } else {
                sun.onload = function () {
                  ctx.drawImage(sun, coord_x, 10);
                };
              }
            } else if (offset.x > 100) {
              if (angry_sun.complete) {
                ctx.drawImage(angry_sun, coord_x, 0);
              } else {
                angry_sun.onload = function () {
                  ctx.drawImage(angry_sun, coord_x, 0);
                };
              }
            }
            if (clouds.complete) {
              ctx.drawImage(clouds, coord_x + 150, 0);
            } else {
              clouds.onload = function () {
                ctx.drawImage(clouds, coord_x + 150, 0);
              };
            }
            if (head.complete) {
              ctx.drawImage(head, x -45, y - 45, 100, 100);
            } else {
              head.onload = function () {
                ctx.drawImage(head, x - 45, y - 45, 100, 100);
              };
            }
          }else {
            ctx.moveTo(x, y);
            ctx.save(); // save current state
            ctx.translate(x, y);
            ctx.rotate(rotstart + twoPI); // rotate
            if (wheel.complete) {
              ctx.drawImage(wheel, -wheel.width / 2 , -wheel.height / 2);
            } else {
              wheel.onload = function () {
                ctx.drawImage(wheel, -wheel.width / 2, -wheel.height / 2);
              };
            }
            ctx.restore();
            // ctx.restore(); // restore original states (no rotation etc)
            // ctx.arc(x, y, r, rotstart, rotstart+twoPI, true);
            // ctx.lineWidth = 8;
          }
          ctx.closePath();
          ctx.stroke();
        },

        show_game_over: function () {
          if (gameover_img.complete) {
            ctx.drawImage(gameover_img, offset.x, 0 );
          } else {
            gameover_img.onload = function () {
              ctx.drawImage(gameover_img, offset.x, 0 );
            };
          }
        },

        pause_image: function () {
          if (pause_img.complete) {
            ctx.drawImage(pause_img, offset.x + 200, 200 );
          } else {
            pause_img.onload = function () {
              ctx.drawImage(pause_img, offset.x, 0 );
            };
          }
        },

        show_blood_spot: function () {
          if (blood_spot.complete) {
            ctx.drawImage(blood_spot, offset.x, 80, 450, 450 );
          } else {
            blood_spot.onload = function () {
              ctx.drawImage(blood_spot, offset.x, 0 );
            };
          }
        },

        show_level_up: function () {
          if (level_up.complete) {
            ctx.drawImage(level_up, offset.x + 250, 80 );
          } else {
            level_up.onload = function () {
              ctx.drawImage(level_up, offset.x, 0 );
            };
          }
        },

        line: function(p1, p2, type) {
          ctx.lineWidth = 1;
          if (type === "back spring") {
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.moveTo(p1.x - 18, p1.y + 28);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#8c98a2" ;
            ctx.stroke();
            ctx.closePath();
          } else if (type === "front spring") {
              ctx.beginPath();
              ctx.lineWidth = 8;
              ctx.moveTo(p1.x + 28, p1.y + 40);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.closePath();
          }
            else {
              ctx.lineWidth = 1;
              ctx.fillStyle = "brown";
              let arr = p1;
              ctx.moveTo(0,600);
              ctx.beginPath();
              ctx.lineWidth = 1;
              ctx.lineTo(arr[0].p1.x, arr[0].p1.y);
              let i = 1;
              while (i < arr.length - 1) {
                ctx.lineTo(arr[i].p2.x, arr[i].p2.y);
                i++;
              }
              ctx.lineTo(arr[--i].p2.x, 600);
              // let x1 = arr[i].p1.x;
              // let x2 = arr[i].p2.x;
              // let y1 = arr[i].p1.y;
              // let y2 = arr[i].p2.y;
              // let y = arr[i].p1.y;
              // console.log((3940 - x1) / (Math.tan(Math.atan(Math.abs((y2 - y1)) / (x2 - x1)))), y, x1, Math.atan(Math.abs((y2 - y1)) / (x2 - x1)), Math.tan(Math.atan(Math.abs((y2 - y1)) / (x2 - x1))));
              // let flag_pos = y + (3940 - x1) * (Math.tan(Math.atan(Math.abs((y2 - y1)) / (x2 - x1))));
              ctx.lineTo(arr[0].p1.x, 600);
              ctx.lineTo(arr[0].p1.x, arr[0].p1.y);
              ctx.stroke();
              ctx.closePath();
              ctx.fill();
              this.final_flag(arr[i].p2.y);
          }
        },

        final_flag: function(flag_pos) {
          ctx.beginPath();
          ctx.moveTo(3940, flag_pos);
          // console.log(flag_pos);
          if (flag.complete) {
            ctx.drawImage(flag, 3940, flag_pos - 58);
          } else {
            flag.onload = function () {
              ctx.drawImage(flag, 3940, flag_pos - 48);
            };
          }
          ctx.closePath();
        },

        clear: function() {
            ctx.clearRect(offset.x, offset.y, 800, 600);
        },

        new_raund: function () {
          this.moveView(-offset.x, -offset.y);
          offset = vector();
        },

        moveView: function(diffx, diffy) {
            // ctx.moveTo(diffx, diffy);
            // console.log(diffx, diffy);
            ctx.translate(-diffx, -diffy);
            offset.x += diffx;
            offset.y += diffy;
        },

        blit: function() {
            ctx.beginPath();
            ctx.stroke();
        }
    };
});
