function isPrime(number) {
    if (number < 2 || isNaN(number) || !Number.isInteger(number)) {
        return `${number} Không phải là số nguyên tố`;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % 2 === 0) {
            return `${number} Không phải là số nguyên tố`;
        }
    }
    return `${number} là số nguyên tố`;
}
let number = +prompt("Nhập số nguyên bất kỳ");
alert(isPrime(number));