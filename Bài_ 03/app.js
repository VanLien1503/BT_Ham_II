function factorial(number) {
    if (number<2){
        return 1;
    }else {
        return number*factorial(--number);
    }
}
let input=parseInt(prompt("Nhập Số"));
document.write(factorial(input));