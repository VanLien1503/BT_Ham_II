let input1 = parseInt(prompt("Nhập số A"));
let input2 = parseInt(prompt("Nhập Số B"));

function convert(a, b) {
    let k = a;
    a = b;
    b = k;
    return "Sau Khi Đổi " + "<br>" +
        "A = " + a + "<br>" +
        "B = " + b + "<br>";
}

document.write("Trước Khi Đổi " + "<br>" +
    "A = " + input1 + "<br>" +
    "B = " + input2 + "<br>" + convert(input1, input2));