function integer(arr, number) {
    let count = 0;
    let result = 0;
    for (let i = 0; i < number; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            result++;
            count++;
        }
    }
    if (count == 0) {
        return `Không có số nguyên dương trong mảng`;
    }
    return result;
}
let arr = [4, 5, 3, -3, -2];
let number = arr.length;
console.log(integer(arr, number));  