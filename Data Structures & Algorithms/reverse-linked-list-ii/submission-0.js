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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
    if (!head || left === right) return head; //edge case if linkedlist length is 1

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;


    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    for (let i = 0; i < right - left; i++) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;
};
}
