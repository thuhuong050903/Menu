function functionOk (){
    var nuoc=document.getElementById("water");
    var giatriNuoc=nuoc.options[nuoc.selectedIndex].text;
    var traicay=document.getElementById("traicay");
    var giatriTraicay=traicay.options[traicay.selectedIndex].text;
    var sotien = document.getElementById("money").value;
    var tralai;
    
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
                tralai=sotien;
                break;
        }
        
        switch (giatriTraicay) {
            case "Trái cây nhỏ":
                tralai=tralai - 99000;
                break;
            case "Trái cây lớn":
                tralai=tralai-129000;
                break;
            case "Bưởi":
                tralai=tralai-189000;
            default:
                tralai=tralai;
                break;
        
    }
    if (tralai<0){
        document.getElementById("ketqua").innerHTML="Bạn không đủ tiền, vui lòng nạp thêm tiền để sử dụng dịch vụ của chúng tôi";

    }
    else{
    document.getElementById("ketqua").innerHTML="Mời bạn xơi " + giatriNuoc + " và " + giatriTraicay;
    document.getElementById("tiendu").innerHTML="Số tiền còn lại là: " + tralai;}
}