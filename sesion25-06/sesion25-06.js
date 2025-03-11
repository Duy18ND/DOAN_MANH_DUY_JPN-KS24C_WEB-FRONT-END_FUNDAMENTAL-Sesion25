function isPalindrome() {
    let check = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            check = false;
            break;
        }
    }
    if (check) {
        return "là chuỗi đối xứng";
    } else {
        return "không phải là chuỗi đối xứng";
    }
}
let arr = [];
let str = prompt("Nhập chuỗi: ");
arr = str.split("");
console.log(isPalindrome());