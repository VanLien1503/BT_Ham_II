let input =parseInt(prompt("nhập số "));
function checkInteger(number) {
        if (number>=0){
            return "Số Nguyên Dương";
        }else {
            return "Số Nguyên Âm";
        }
}
let check=checkInteger(input);
alert("Số Bạn Nhập là "+check);