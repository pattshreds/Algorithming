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

    for (let i = 0; i < s.length; i++) {
        const current = romanNumeralValues[s[i]];
        const next = romanNumeralValues[s[i + 1]];
        console.log(`
            current: ${current}
            next: ${next}
            next > current? ${next > current}
            `);
        if (next > current) {
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
