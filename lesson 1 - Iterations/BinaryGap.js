function solution(N) {
    let binaryString = N.toString(2);
    let binaryArr = binaryString.split('');
    return getNextGap(binaryArr, [0])
}

function getNextGap(binaryArr, gaps) {
    let firstOne = binaryArr.indexOf("1");
    if(firstOne > -1) {
        let leftoverArr = binaryArr.splice(firstOne + 1);
        let secondOne = leftoverArr.indexOf("1");
        gaps.push(secondOne);
        return getNextGap(leftoverArr, gaps)
    }
    return Math.max(...gaps);
}