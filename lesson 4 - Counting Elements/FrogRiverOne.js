function solution(X, A) {
    let steps = []
    for(let i = 0; i < X; i++) {
        steps.push(false)
    }

    for(let j = 0; j < A.length; j++) {
        if(!steps[A[j] - 1]) {
            X--;
            steps[A[j] - 1] = true;
        }
        if(X === 0) return j;
    }

    return -1;
}