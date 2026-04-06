class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        let fleet = 0
        let lastTime = 0

        for(let i=0;i<position.length;i++){
            cars.push([position[i],speed[i]]);
        }    

        cars.sort((a,b)=>b[0]-a[0]);

        for(let [pos,spd] of cars){
          let time = (target-pos)/spd

          if(time>lastTime){
            fleet++;
            lastTime = time;
          }

        }

        return fleet;
    }
}
