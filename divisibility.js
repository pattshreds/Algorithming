// 6 kyu

// Divisibility by 13

// Very long description can be found here: https://www.codewars.com/kata/564057bc348c7200bd0000ff

//==================================================

const thirt = (n) => {
    let seq = [1, 10, 9, 12, 3, 4, 1, 10, 9, 12];
    let nSeq = n.toString().split('').reverse();
    let res1 = 0;
    for (let i = 0; i < nSeq.length; i++) {
        res1 += seq[i] * nSeq[i];
    }
    res1 = res1.toString().split('').reverse();
    let res2 = 0;
    for (let i = 0; i < res1.length; i++) {
        res2 += res1[açi] * seq[i];
    }
    res2 = res2.toString().split('').reverse();
    let resFinal = 0;
    for (let y = 0; y < res2.length; y++) {
        resFinal += res2[y] * seq[y];
    }
    return resFinal;
};

// console.log(thirt(368924704));
console.log(thirt(1111111111));
