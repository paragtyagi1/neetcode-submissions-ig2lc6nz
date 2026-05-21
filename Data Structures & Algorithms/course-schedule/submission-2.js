class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (prerequisites.length === 0){
            return true;
        }
        
        let graph = new Map();
        let visited = new Set();
        let visiting = new Set();

       
        for (let i = 0; i < numCourses; i++) {
          graph.set(i, []);
        }

        for (const [course, pre] of prerequisites) {
           graph.get(pre).push(course);
        }
 

        let dfs = (course) => {

            // cycle detected
            if (visiting.has(course)) return false;

            // already covered
            if(visited.has(course)) return true;

            visiting.add(course);

            for(let neighbor of graph.get(course)){
              if (!dfs(neighbor)) {
                return false;
              }
            }

            visited.add(course);
            visiting.delete(course);

            return true;
        }   


      for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
      }

      return true
    }
}
