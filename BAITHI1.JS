var a =parseInt(prompt("Nhập số nguyên dương N"))
var b =parseInt(prompt("Nhập số inputnumber"))
if (4>a || a>20 || a %2 !==0){ alert ("N không hợp lệ")};

function findOppositeNumber(n, inputNumber) {
    if (inputNumber < 0 || inputNumber >= n) {
        return "inputNumber không hợp lệ";
    }

    let result = inputNumber + n / 2;
    if (result > n - 1) {
        result -= n
    }

    return result;
}

console.log(findOppositeNumber(a, b))