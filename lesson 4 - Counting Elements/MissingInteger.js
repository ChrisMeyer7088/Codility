function solution(A) {
    let a = A.sort((a, b) => a - b);
    let startingPosition = a.indexOf(1);
    if(startingPosition > -1) {
        let previousInt = 1;
        for(let i = startingPosition + 1; i < a.length; i++) {
            if(a[i] === previousInt || a[i] === previousInt + 1)
                previousInt = a[i];
            else
                return previousInt + 1;
        }

        return previousInt + 1;
    }

    return 1;
}