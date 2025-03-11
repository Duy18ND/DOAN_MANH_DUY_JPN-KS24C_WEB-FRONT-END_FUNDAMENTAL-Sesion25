function sum(arr, number) {
    if (number <= 0 || !Number.isInteger(number)) {
        console.log("Phần tử bạn thêm vào mảng không hợp lệ");
        return;
    }

    for (let i = 0; i < number; i++) {
        let index = +prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(index);
    }

    if (arr.length > 0) {
        let min = Math.min(...arr);
        return min;
    } else {
        console.log("Mảng không có phần tử nào.");
        return null;
    }
}

let arr = [];
let number = +prompt("Mời bạn nhập số phần tử cần thêm vào mảng");

let minValue = sum(arr, number);
let fount = arr.length;
if (fount != 0) {
    console.log(`
Mảng hiện tại là: [${arr.join(", ")}];
Số nhỏ nhất là: ${minValue};
    `);
}