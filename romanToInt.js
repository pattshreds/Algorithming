const s = 'CXLV';

const romanToInt = (s) => {
    const romanNumeralValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    console.log(s);

    for (let i = 0; i < s.length; i++) {
        const current = romanNumeralValues[s[i]];
        const next = romanNumeralValues[s[i + 1]];
        console.log(`
            current: ${current}, ${s[i]}
            next: ${next}, ${s[i + 1]}
            next > current? ${next > current}
            `);
        if (next > current) {
            // if next > current, subtract and merge ex:(CXLV) current = X, L > X, 50 - 10 = 40, next = V
            result += next - current;
            console.log(`result: ${result}`);
            i++;
        } else {
            result += current;
            console.log(`result: ${result}`);
        }
    }

    return result;
};

console.log(romanToInt(s));
