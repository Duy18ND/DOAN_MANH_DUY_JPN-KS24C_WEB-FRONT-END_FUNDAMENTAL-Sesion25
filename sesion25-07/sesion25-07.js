function character(str) {
    if (!str) return ""; // Kiểm tra chuỗi rỗng hoặc null

    let result = "";
    let fount = true; // Đánh dấu khi cần viết hoa

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (fount && char !== " ") {
            result += char.toUpperCase();
            fount = false;
        } else {
            result += char.toLowerCase();
        }

        if (char === " ") {
            fount = true;
        }
    }

    return result.trim();
}

let str = prompt("Nhập chuỗi: ");
console.log(character(str));
