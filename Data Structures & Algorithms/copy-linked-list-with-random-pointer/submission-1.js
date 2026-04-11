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
        if(!head) return null;

        let current = head;
       
        // Step-1 Copy list in between the OG list .. 
        while(current){
         let copy = new Node(current.val);
         copy.next = current.next;
         current.next = copy;
         current = copy.next;
        }

        // Step-2 Copy random pointers
        current = head
        while(current){
          if(current.random){
            current.next.random = current.random.next;
          }
          current = current.next.next;
        }

        //Step - 3 Seprate the lists

        let dummy = new Node();
        let currentCopy = dummy;
        current = head;

        while(current){
            let copy = current.next;
            currentCopy.next = copy;
            currentCopy = copy;
        
            current.next = copy.next;
            current = current.next;

        }

        return dummy.next;
    }
}
