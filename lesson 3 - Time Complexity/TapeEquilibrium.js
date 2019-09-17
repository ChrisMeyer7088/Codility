function solution(A) {
    let smallestDifference = -1;
    let rightSideSum = A.reduce((a,b) => a + b, 0);
    let leftSideSum = 0;

    for(let i = 0; i < A.length - 1; i++) {  
        leftSideSum += A[i];
        rightSideSum -= A[i];
        let difference = Math.abs(leftSideSum - rightSideSum);
        if(smallestDifference === -1) smallestDifference = difference;
        if(smallestDifference > difference) smallestDifference = difference
    }
    return smallestDifference;
}