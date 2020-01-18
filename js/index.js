function a(num) {
    if (num < 1) {
        return num;
    }
    return num + a(num - 1);
}

function x(num, maxNum) {
    if (num > maxNum - 1) {
        return num;
    }
    return num + x(num + 1, maxNum);
}
const b = x(1, 100);
console.log(b);