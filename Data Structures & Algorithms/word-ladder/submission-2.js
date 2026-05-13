class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let wordlength = beginWord.length;
        let patternMap = new Map();

        if(!wordList.includes(endWord)) return 0 // if no endWord return 0
      
        for(let word of wordList){
          for(let i=0; i<wordlength ;i++){
                let pattern = word.slice(0,i)+"*"+word.slice(i+1);

                if(!patternMap.has(pattern)){
                    patternMap.set(pattern,[]);
                }

                patternMap.get(pattern).push(word);
          }
        }

        // Check via BFS for every word (generted patterns have the end word,
        // if yes then push its neighbours to queue and perform same operration)

        let queue = [[beginWord,1]]; // word and steps
        let visited = new Set();
        visited.add(beginWord);

        while(queue.length > 0){
          let [word,steps] = queue.shift();

          for(let i = 0; i<wordlength; i++){
            let pattern = word.slice(0,i)+"*"+word.slice(i+1);

            let neighbors = patternMap.get(pattern);

            if(neighbors && neighbors.length){
               for(let neighbor of neighbors){
                if(neighbor === endWord){
                    return steps + 1;
                }
                if(!visited.has(neighbor)){
                    queue.push([neighbor,steps+1]);
                    visited.add(neighbor);
                }
               }
            }
          }
        }

        return 0
    }
}
