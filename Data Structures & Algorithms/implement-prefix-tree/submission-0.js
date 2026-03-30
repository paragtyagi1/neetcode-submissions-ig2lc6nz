class TrieNode{
      constructor() {
        this.children = {},
        this.isEnd = false;
      }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (let char of word){
            if(!node.children[char]){
                node.children[char]  = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
       let node =  this.traverseTrie(word)
       return node !== null && node.isEnd == true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
         let node =  this.traverseTrie(prefix)
         return node!==null;
    }

    traverseTrie(word){
    let node = this.root;
    for(let char of word){
     if(!node.children[char]){
        return null;
     }
     node = node.children[char]
    }

    return node;
    }
}
