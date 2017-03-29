define(["vector"], function (vector) {
    var canvas = document.getElementById('canvas');
    var stage = new createjs.Stage(canvas);
    var ctx = canvas.getContext('2d');
    var offset = vector();
    var twoPI = Math.PI*2 + 0.0001;
    var head = new Image();
    var wheel = new Image();
    head.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/bike_body.png";
    wheel.src = "https://raw.githubusercontent.com/Albert2522/Elasto_mania_game/master/images/wheel.png";
    var rectWidth = 64;
    var rectHeight = 64;
    return {
        width: canvas.width,
        height: canvas.height,

        circle: function(x, y, r, rotstart, type) {
          if (type === "head") {
            ctx.moveTo(x, y);
            if (head.complete) {
              ctx.drawImage(head, x -45, y - 45, 100, 100);
            } else {
              head.onload = function () {
                ctx.drawImage(head, x - 45, y - 45, 100, 100);
              };
            }
          }else {
            ctx.moveTo(x, y);
            ctx.arc(x, y, r, rotstart, rotstart+twoPI, true);
            ctx.lineWidth = 8;
          }
          ctx.stroke();
        },

        line: function(p1, p2, type) {
          if (type === "back spring") {
            ctx.moveTo(p1.x - 18, p1.y + 30);
            ctx.lineTo(p2.x, p2.y);
          } else if (type === "front spring") {
              ctx.moveTo(p1.x + 28, p1.y + 40);
              ctx.lineTo(p2.x, p2.y);
          }
            else {
              ctx.beginPath();
              ctx.lineWidth = 1;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.lineWidth = 1;
              ctx.stroke();
          }
        },

        clippedBackgroundImage: function( ctx, img, w, h ) {
          ctx.save();
          ctx.clip();

          var imgHeight = w / img.width * img.height;
          if (imgHeight < h){
            ctx.fillStyle = '#000';
            ctx.fill();
          }
          ctx.drawImage(img,0,0,w,imgHeight);

          ctx.restore();
        },

        clear: function() {
            ctx.clearRect(offset.x, offset.y, 800, 600);
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
        }
    };
});
