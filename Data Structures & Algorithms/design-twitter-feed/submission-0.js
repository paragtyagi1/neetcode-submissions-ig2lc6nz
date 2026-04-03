class Twitter {
    constructor() {
        this.time = 0;
        this.tweetMap = new Map();   // userId -> [[tweetId, time]]
        this.followMap = new Map();  // userId -> Set
    }

    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push([tweetId, this.time++]);
    }

    getNewsFeed(userId) {
        let res = [];
        let heap = new TweetHeap(); // renamed heap

        // ensure self follow
        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }
        this.followMap.get(userId).add(userId);

        // push latest tweet of each followee
        for (let followee of this.followMap.get(userId)) {
            if (this.tweetMap.has(followee)) {
                let tweets = this.tweetMap.get(followee);
                let index = tweets.length - 1;

                if (index >= 0) {
                    let [tweetId, time] = tweets[index];
                    heap.push([tweetId, time, followee, index]);
                }
            }
        }

        // get top 10
        while (heap.size() > 0 && res.length < 10) {
            let [tweetId, time, user, index] = heap.pop();
            res.push(tweetId);

            if (index > 0) {
                let next = this.tweetMap.get(user)[index - 1];
                heap.push([next[0], next[1], user, index - 1]);
            }
        }

        return res;
    }

    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}

// Helper class

class TweetHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;

        while (i > 0 && this.heap[this.parent(i)][1] < this.heap[i][1]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return top;
    }

    heapifyDown() {
        let i = 0;

        while (this.left(i) < this.heap.length) {
            let largest = this.left(i);
            let right = this.right(i);

            if (right < this.heap.length && this.heap[right][1] > this.heap[largest][1]) {
                largest = right;
            }

            if (this.heap[i][1] >= this.heap[largest][1]) break;

            this.swap(i, largest);
            i = largest;
        }
    }

    size() {
        return this.heap.length;
    }
}