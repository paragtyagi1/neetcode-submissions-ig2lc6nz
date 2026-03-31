class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let heap = [];
        for(let num of nums){
           heap.push(num);
           this.bubbleUp(heap);

           if(heap.length>k){
             this.removeMin(heap);
           }
        }

        return heap[0];   
    }

    bubbleUp(heap){
        let i= heap.length-1;
        while(i>0){
            let parent = Math.floor((i-1)/2);

            if(heap[parent]<=heap[i]) break;

            [heap[i],heap[parent]] = [heap[parent],heap[i]];
            i = parent;
        }
    }

    bubbleDown(heap){
        let i = 0;
        let length = heap.length;

        while(true){
            let left = 2*i+1;
            let right = 2*i+2;
            let smallest = i;
            
            if(left<length && heap[left]<heap[smallest]){
                smallest = left;
            }
            if(right<length && heap[right]<heap[smallest]){
                smallest = right;
            }

            if(smallest === i ) break;
            [heap[i],heap[smallest]] =  [heap[smallest],heap[i]];
            i = smallest;
        }
    }

    removeMin(heap){
      let min = heap[0];

      if(heap.length>1){
        heap[0] = heap.pop();
        this.bubbleDown(heap)
      }
      return min;
    }

}
