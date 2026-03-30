class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
       this.map = new Map();
       this.capacity = capacity;
       this.list = new Linkedlist();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;
        else{
            let node = this.map.get(key);

            this.list.removeNode(node);
            this.list.insertNode(node);

            return node.val;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
          let node = this.map.get(key);
          node.val = value;


          this.list.removeNode(node);
          this.list.insertNode(node);
        }
        else{
            if(this.map.size === this.capacity){
                let node = this.list.removeLRU();
                this.map.delete(node.key);
            }
            let newNode = new ListNode(key,value);
            this.list.insertNode(newNode);
            this.map.set(key,newNode);
        }
    }
}

class Linkedlist{
    constructor() {
       this.head = new ListNode(0,0);
       this.tail = new ListNode(0,0);

       this.head.next = this.tail;
       this.tail.prev = this.head;
    }

    insertNode(node){
       node.prev = this.tail.prev;
       node.next = this.tail;

       this.tail.prev.next = node;
       this.tail.prev = node;
    }

    removeNode(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    removeLRU(){
        let node = this.head.next;
        this.removeNode(node);
        return node;
    }
}

class ListNode {
    constructor(key,val) {
       this.key = key;
       this.val = val;
       this.next = null;
       this.prev = null;
    }
}
