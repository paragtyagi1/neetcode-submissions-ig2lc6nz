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
     * @return {void}
     */
    reorderList(head) {
      let first = head;
      let second = head.next;

      let prev = null;

      while(second !== null && second.next !== null){
         first = first.next;
         second = second.next.next;
      }

      second = first.next;
      first.next = null;

      while(second !== null){
       let next = second.next;
       second.next = prev;
       prev = second;
       second = next
      }


      while(prev!== null){
         let headNext = head.next;
         let prevNext = prev.next;
         head.next = prev;
         head = headNext;
         prev.next = head;
         prev = prevNext;
      }

    //   if(head !== null){
    //     head.next = prev
    //   }
    }
}
