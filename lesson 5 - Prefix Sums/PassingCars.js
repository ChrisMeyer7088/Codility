const PASSING_LIMIT = 1000000000
function solution(A) {
    let totalPassed = 0;
    let multiplier = 1;
    let startingPosition = A.length;
    for(let i = 0; i < A.length; i++) {
        if(A[i] === 0) {
            startingPosition = i + 1;
            break;
        }
        
    }
    
    let carGoingEast = 0;
    for(let i = startingPosition; i < A.length; i++) {
        if(carGoingEast === A[i]) multiplier++;
        else totalPassed += 1 * multiplier
    }
    if(totalPassed > PASSING_LIMIT) return -1;
    return totalPassed;
}