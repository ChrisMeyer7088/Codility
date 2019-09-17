function solution(A) {
    if(A.length === 0) return 1
    A.sort((a,b) => a - b)
    for(let i = 1; i <= A.length; i++) {
        if(A[i - 1] !== i) return i;
    }
    return A.length + 1;
}