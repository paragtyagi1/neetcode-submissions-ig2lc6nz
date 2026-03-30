// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

    if (!head) return null;

    let current = head;

    // insert new nodes in between the original node

    while (current !== null) {
        let copy = new Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }

    // Assign random values to copied node values
    current = head;

    while (current !== null) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next
    }

    // Seprate lists 

    let dummy = new Node();
    let currentCopy = dummy;
    current = head;

    while (current !== null) {
        let copy = current.next;
        currentCopy.next = copy;
        currentCopy = copy;

        current.next = copy.next;
        current = current.next;
    }

    return dummy.next;

}
}
