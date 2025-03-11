function sum(arr, number) {
    if (number <= 0 || !Number.isInteger(number) || isNaN(number)) {
        return "Phần tử bạn thêm vào mảng không hợp lệ";
    } else {
        for (let i = 0; i < number; i++) {
            let index = +prompt(`arr${i}`);
            arr.push(index);
        }
        if (arr.length <= 0) {
            return "Mảng Rỗng"
        } else {
            let sum = 0;
            for (let i = 0; i < number; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
}
let arr = [];
let number = +prompt("Mời bạn nhập số phần tử cần thêm vào mảng");
let count = arr.length;
let totalSum = sum(arr, number);
if (number > 0) {
    console.log(` Tổng các phần tử trong mảng là: ${totalSum}`);
} else {
    console.log("dữ liệu không hợp lệ");
}