class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {

         let first = false;
         let second = false;
         let third = false;

        for(let triplet of triplets){
          if(triplet[0] > target[0] || triplet[1]> target[1] || triplet[2]>target[2]){
            continue;
          }

         if(triplet[0]  === target[0]){
            first = true;
         }

         if (triplet[1] === target[1]){
            second = true;
         }

         if (triplet[2] === target[2]){
            third = true;
         }
        }
       

       return first && second && third;
    }
}
