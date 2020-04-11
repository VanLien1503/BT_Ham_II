let arr1 = [];
let arr2="ABCDEFGHIJ0123456789klmnopqrstuvwxyz";
function random() {
    let numberA = parseInt(document.getElementById("number1").value);
    for (let i = 0; i < numberA; i++) {
        let random =arr2.charAt(Math.floor(Math.random()*arr2.length));
        arr1.push(random);
    }
    document.getElementById("result").innerHTML = "Mảng Arr [ " + arr1 + " ]";
    document.getElementById("result1").innerHTML = "New Arr [ " + revers(arr1) + " ]";
    document.getElementById("result2").innerHTML = checkArr(arr1,input=prompt("nhập số cần tìm"));

}

function revers(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        let change = arr[first];
        arr[first] = arr[last];
        arr[last] = change;
        first++;
        last--;
    }
    return arr;
}
function checkArr(arr,input) {
    let count=0;
    let index="";
    for (let i=0;i<arr.length;i++){
        if (input==arr[i]){
            count++;
            index+=i+",";
        }
    }
    if (count>0){
        return "Ký Tự "+input+" có "+count+ " Lần Xuất hiện Trong Mảng [ " + arr + " ]" + "<br>"+
            "Có Chỉ Số "+ index+" Trong Mảng";
    }else {
        return "Ký Tự "+ input+ " Không có Trong Mảng [ " + arr + " ]";
    }

}
