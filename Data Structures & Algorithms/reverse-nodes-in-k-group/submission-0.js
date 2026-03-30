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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0);
        dummy.next = head;
        let groupPrev = dummy;

        while(true){ 
           let kth = groupPrev;

           for(let i = 0;i<k; i++){
             kth= kth.next;
             if(!kth) return dummy.next;
           }

           let groupNext = kth.next;

           let current = groupPrev.next;
           let prev = groupNext;

           while(current !== groupNext){
              let next = current.next;
              current.next = prev;
              prev = current;
              current = next;
           }

           // groupPrev>kth and then moves forward to 4   3>2>1> 4

           let temp = groupPrev.next;
           groupPrev.next = kth;
           groupPrev = temp;
        }

    }
}
