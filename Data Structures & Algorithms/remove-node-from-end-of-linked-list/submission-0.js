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
     * @param {number} n
     * @return {ListNode}
     */
    /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 removeNthFromEnd = function(head, n) {
        let length = 0;
        let curr = head;

        while(curr !== null){
            length++;
            curr = curr.next;
        }

        let target = length - n + 1;

      
        if(target === 1){
            return head.next;
        }

        curr = head;
        let index = 1;


        while(index < target - 1){
            curr = curr.next;
            index++;
        }

        curr.next = curr.next.next;

        return head;
 }
}
