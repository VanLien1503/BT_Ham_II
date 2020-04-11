let input=prompt("Nhập Ký Tự");
function check(characters) {
    if (input==parseFloat(input)){
        return "Ký Tự Số"
    }else {
        return " Ký Tự Chữ"
    }
}
alert("Ký Tự "+input +" LÀ " + check(input));