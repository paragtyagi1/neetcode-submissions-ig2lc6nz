/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let heap = new MinHeap();
        let dummy = new ListNode(0);
        let current = dummy;
        
        for(let node of lists){
          heap.addToHeap(node);
        }

        while(heap.size() > 0){
            let node = heap.getMin();
            current.next = node;
            current = current.next;

            if(node.next){
                heap.addToHeap(node.next);
            }
        }
        return dummy.next;

    }
}

// Helper class MinHeap..

class MinHeap {
    constructor(){
        this.heap = [];
    }

   bubbleUp(){
    let i = this.heap.length-1;

    while(i>0){
        let parent = Math.floor((i-1)/2);

        if(this.heap[parent].val<=this.heap[i].val) break;

        [this.heap[parent],this.heap[i]]= [this.heap[i],this.heap[parent]];
        i = parent;
    }

   }

   addToHeap(node){
     this.heap.push(node);
     this.bubbleUp();
   }

   bubbleDown(){
     let i = 0;
     let length = this.heap.length;
      while(true){
        let left = 2*i+1;
        let right = 2*i+2;
        let smallest = i

        if(left<length && this.heap[left].val<this.heap[smallest].val){
             smallest = left;
        }
        
        if(right<length && this.heap[right].val<this.heap[smallest].val){
             smallest = right;
        }

        if(smallest === i) break;

        [this.heap[smallest],this.heap[i]]=[this.heap[i],this.heap[smallest]]
        i = smallest;
    }

   }

   getMin(){
    if(this.heap.length == 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
   }

   size(){
    return this.heap.length
   }
}
