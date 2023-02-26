class GuessingGame {
    constructor() {
        this.result = 0;
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.ceil((this.min + this.max)/2);
  
        return this.result;
    }

    lower() {
        this.max = Math.ceil((this.min + this.max)/2);
    }

    greater() {
        this.min = Math.ceil((this.min + this.max)/2);
    }
}

module.exports = GuessingGame;

function binarySearch(arr, el, compare_fn) {
    let m = 0;
    let n = arr.length - 1;
    while (m <= n) {
        let k = (n + m) >> 1;
        let cmp = compare_fn(el, arr[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return ~m;
}
