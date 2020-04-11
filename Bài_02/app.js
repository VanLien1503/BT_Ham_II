let input=parseInt(prompt("Nhập Bán Kính Đường Tròn"));
function acreage(r) {
        return r*2*Math.PI;
}
function perimeter(r) {
        return r^2*Math.PI;
}
document.write("Chu Vi = "+acreage(input)+"<br>"
+"Diện Tích Hình Tròn = "+perimeter(input));