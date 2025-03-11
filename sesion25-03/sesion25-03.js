function evenElement(arr, number) {
    if (!Number.isInteger(number) || number <= 0) {
        return "Dữ liệu không hợp lệ";
    } else {
        let result = "";
        let count = 0;
        for (let i = 0; i < number; i++) {
            if (isNaN(arr[i])) {
                return "Dữ liệu không hợp lệ";
            } else if (arr[i] % 2 == 0) {
                result += arr[i] + ", ";
                count++;
            }
        }
        if (count == 0) {
            return "Không có phần tử số chẵn nào";
        } else {
            return result;
        }
    }
}
let arr = [1, 2, 4, 5, 3, 2];
let number = arr.length;
console.log(evenElement(arr, number));
