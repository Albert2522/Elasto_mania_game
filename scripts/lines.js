define(["physics"], function (physics) {
    // return [physics.line(40, 150, 90, 250),
    //         physics.line(90, 250, 140, 150)];

    var mapGenerator = function(level) {
      let max_high_between = 50;
      let initial_height = 350;
      let min_distance_between = 100;
      let curr_x = 0;
      let curr_y = initial_height;
      let arr = [ ];
      let dist = 4000;
      arr.push(physics.line(0, 350, 0, 0));
      while (dist > 0) {
        let multiplyer = Math.random() > 0.5 ? 1 : -1;
        let set_dist = Math.floor(Math.random() * 50) + min_distance_between;
        let set_height = curr_y + max_high_between * multiplyer;
        set_height = set_height > 600 ? 600 : set_height;
        set_height = set_height < 140 ? 140 : set_height;
        let new_x = (dist - set_dist) >= 0 ? curr_x + set_dist : 4000;
        arr.push(physics.line(curr_x, curr_y, new_x, set_height));
        curr_y = set_height;
        dist = dist - (new_x - curr_x);
        curr_x = new_x;

      }
      arr.push(physics.line(4000, curr_y, 4000, -600));
      // arr.push(physics.line(4000, curr_y, 4000, 0));
      // arr.push(physics.line(4000, 600, 0, 600));
      // arr.push(physics.line(0, 600, 0, 0));
      return arr;
      // console.log(level);
      // return [
      //   physics.line(0, 0, 0, 350),
      //   physics.line(0, 350, 100, 370),
      //   physics.line(100, 370, 250, 320),
      //   physics.line(250, 320, 350, 340),
      //   physics.line(350, 340, 400, 340),
      //   physics.line(400, 340, 500, 290),
      //   physics.line(500, 290, 500, 290),
      //   physics.line(500, 290, 650, 310),
      //   physics.line(650, 310, 700, 330),
      //   physics.line(700, 330, 850, 340),
      //   physics.line(850, 340, 850, 330),
      //   physics.line(850, 330, 1000, 350),
      //   physics.line(1000, 350, 1000, 360),
      //   physics.line(1000, 360, 1200, 360),
      //   physics.line(1200, 360, 4000, 360),
      //   physics.line(4000, 360, 4000, 0)
      // ];
    };

    return {
      mapGenerator: mapGenerator
    }

    // return [
    //   physics.line(0, 0, 0, 400),
    //   physics.line(0, 400, 2000, 400),
    //   physics.line(2000, 400, 2000, 0)
    // ];
});
