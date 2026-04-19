class TrieNode  {
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
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
     let node = this.root;

     let dfs = (node, index)=>{
      if(index == word.length){
         return node.isEnd;
      }

      let char = word[index];

      if(char!=='.'){
        if(!node.children[char]) return false;
        return dfs(node.children[char],index+1);
      }

      for(let child in node.children){
        if(dfs(node.children[child],index+1)){
            return true
        }
      }

      return false;
     }
     
     return dfs(node,0);
    }
}
