class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = [];
        let result = [];

        for(let [x,y] of points){
          heap.push([Math.sqrt((x * x) + (y * y)),x,y]);
        }

        this.buildMinHeap(heap);

        for(let i=0;i<k;i++){
            let [dist,x,y] = this.extractMin(heap)
            result.push([x,y]);
        }

        return result;
    }

    buildMinHeap(heap){
     let n = heap.length;
     for(let i = Math.floor(n/2)-1;i>=0;i--){
         this.heapify(heap,i)
     }
    }

    heapify(heap,i){
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heap.length && heap[left][0] < heap[smallest][0]) {
        smallest = left;
    }

    if (right < heap.length && heap[right][0] < heap[smallest][0]) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        this.heapify(heap, smallest);
    }
}

    extractMin(heap){
        let min = heap[0];
    
        if(heap.length>0){
             heap[0] = heap.pop();
            this.heapify(heap,0);
        }

        return min;
    }
}
