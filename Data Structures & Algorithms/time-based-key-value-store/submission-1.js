class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
         this.keyStore.get(key).push([value,timestamp]);
        }else{
           this.keyStore.set(key, [[value,timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = "";
        if(!this.keyStore.has(key)) return "";
        if(this.keyStore.has(key)){
          const record = this.keyStore.get(key);
          let start = 0;
          let end = record.length-1;

          while(start<=end){
            let mid = Math.floor((start+end)/2);

            if( record[mid][1]<=timestamp){
                result = record[mid][0];
                start = mid +1; 
            }
            else{
                end = mid-1;
            }
          }

          return result;
        }

    }
}
