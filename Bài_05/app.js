let number1=parseInt(prompt("Nhập số thứ nhất"));
let number2=parseInt(prompt("nhập số thứ hai"));
let number3=parseInt(prompt("nhập số thứ 3"));
function check(number1,number2,number3) {
    if (number1<number2&&number1<number3){
        return number1;
    }else if (number2<number1&&number2<number3){
        return number2;
    }else {
        return number3
    }
}
let min=check(number1,number2,number3);
alert("số Nhỏ Nhất Trong 3 Số Là "+min);