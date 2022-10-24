function getBase(num, base) {
    return num.toString(base).toUpperCase();
}

function getRand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getIntegerBits(val, start, end) {
    const base16 = getBase(val, 16);
    const quadArray = [];
    let quadString = '';
    let i = 0;
    for (i = 0; i < base16.length; i += 1) {
        quadArray.push(base16.substring(i, i + 1));
    }
    for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i += 1) {
        if (!quadArray[i] || quadArray[i] === '') {
            quadString += '0';
        } else {
            quadString += quadArray[i];
        }
    }
    return quadString;
}

export function createUUID() {
    const dg = new Date(1582, 10, 15, 0, 0, 0, 0);
    const dc = new Date();
    const t = dc.getTime() - dg.getTime();
    const tl = getIntegerBits(t, 0, 31);
    const tm = getIntegerBits(t, 32, 47);
    const thv = getIntegerBits(t, 48, 59) + 1; // version 1, security version is 2
    const csar = getIntegerBits(getRand(4095), 0, 7);
    const csl = getIntegerBits(getRand(4095), 0, 7);
    const n = getIntegerBits(getRand(8191), 0, 7)
        + getIntegerBits(getRand(8191), 8, 15)
        + getIntegerBits(getRand(8191), 0, 7)
        + getIntegerBits(getRand(8191), 8, 15)
        + getIntegerBits(getRand(8191), 0, 15); // this last number is two octets long
    return tl + tm + thv + csar + csl + n;
}
