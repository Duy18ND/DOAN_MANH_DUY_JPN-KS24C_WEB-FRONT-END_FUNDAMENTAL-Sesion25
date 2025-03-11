function passWorld(pass, a) {
    let minimun = 8;
    let uplowercase = /[A-Z]/.test(pass);
    let tolowercase = /[a-z]/.test(pass);
    let number = /[0-9]/.test(pass);
    if (a < minimun) {
        return `Mật khẩu ít nhất 8 ký tự`;
    } else if (!uplowercase) {
        return `Mật khẩu có ít nhất một ký tự viết hoa`;
    } else if (!tolowercase) {
        return `Mật khẩu có ít nhất một ký tự viết thường`;
    } else if (!number) {
        return ` Mật khẩu có ít nhất một chữ số`;
    } else {
        return ` Đăng nhập thành công`;
    }
}
let pass = prompt("Mời bạn nhập PassWorld");
let a = pass.length;
console.log(passWorld(pass, a));