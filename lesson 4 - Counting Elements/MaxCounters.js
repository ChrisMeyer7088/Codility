function solution(N, A) {
    let counters = []
    for(let i = 0; i < N; i++) {
        counters.push(0);
    }

    let maxValue = 0;
    let minimumCounterValue = 0;
    for(let j = 0; j < A.length; j++) {
        if(A[j] === N + 1) {
            minimumCounterValue = maxValue;
        } else {
            if(counters[A[j] - 1] < minimumCounterValue) counters[A[j] - 1] = minimumCounterValue;
            counters[A[j] - 1]++;
            if(counters[A[j] - 1] > maxValue) maxValue = counters[A[j] - 1];
        }
    }

    counters = counters.map(val => {
        if(val < minimumCounterValue) val = minimumCounterValue
        return val;
    })

    return counters;
}