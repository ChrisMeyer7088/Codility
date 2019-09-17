function solution(S, P, Q) {
    let minimalImpactArr = [];
    for(let i = 0; i < P.length; i++) {
        minimalImpactArr.push(findImpactOfString(S.substr(P[i], Math.abs(P[i] - Q[i]) + 1)));
    }

    return minimalImpactArr;
}

function findImpactOfString(S) {
    if(S.indexOf("A") > -1) return 1;
    if(S.indexOf("C") > -1) return 2;
    if(S.indexOf("G") > -1) return 3;
    else return 4;
}