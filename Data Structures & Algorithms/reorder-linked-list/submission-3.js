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
      if(!head || !head.next) return null;

      let fast = head; let slow=head;

      while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
      }

      let current = slow.next;
      let prev = null;

      while(current){
         let next = current.next;
         current.next = prev
         prev = current
         current = next
      }

      let first = head;
      let second = prev
      slow.next = null; // break list

      while(second){
         let temp1 = first.next;
         let temp2 = second.next;

         first.next = second;
         second.next = temp1;

         first = temp1;
         second = temp2;
      } 

    }
}
