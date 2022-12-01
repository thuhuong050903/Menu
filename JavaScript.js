
function functionOk (){
    var nuoc=document.getElementById("water");
    var giatriNuoc=nuoc.options[nuoc.selectedIndex].text;
    var traicay=document.getElementById("traicay");
    var giatriTraicay=traicay.options[traicay.selectedIndex].text;
    var sotien = document.getElementById("money").value;
    var tralai;
    if
    switch (giatriNuoc) {
        case "Nước suối":
            tralai=sotien-15000;
            break;
        case "Coca cola":
            tralai=sotien-17000;
            break;
        case "7 up":
            tralai=sotien-17000;
            break;
        case "Pessi":
            tralai=sotien-17000;
            break;

        case "Cam ép":
            tralai=sotien-17000;
            break;
        case "Sting":
            tralai=sotien-17000;
            break;
        case "Bò húc":
            tralai=sotien-20000;
            break;
        default:
            break;
    }
    document.getElementById("ketqua").innerHTML="Mời bạn xơi " + giatriNuoc + " và " + giatriTraicay;
    document.getElementById("tien").innerHTML="Số tiền còn lại là: " + tralai;
}
