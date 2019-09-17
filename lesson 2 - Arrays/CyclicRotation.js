function solution(A, K) {
    let rotationAmount = K % A.length;
    for(let i = 0; i < rotationAmount; i++) {
        let rotatedNum = A.pop();
        A.unshift(rotatedNum)
    }
    return A
}