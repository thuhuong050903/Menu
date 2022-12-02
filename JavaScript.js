function functionOk (){
    var nuoc=document.getElementById("water");
    var giatriNuoc=nuoc.options[nuoc.selectedIndex].text;
    var traicay=document.getElementById("traicay");
    var giatriTraicay=traicay.options[traicay.selectedIndex].text;
    var sotien = document.getElementById("money").value;
    var tralai;
    
        switch (giatriNuoc) {
            case "Không":
                tralai=sotien;
                break;
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
        }
        
        switch (giatriTraicay) {
            case "Không":
                tralai=tralai;
                break;
            case "Trái cây nhỏ":
                tralai=tralai - 99000;
                break;
            case "Trái cây lớn":
                tralai=tralai-129000;
                break;
            case "Bưởi":
                tralai=tralai-189000;
                break;
        
    }
    if (tralai<0){
        document.getElementById("ketqua").innerHTML="Bạn không đủ tiền, vui lòng nạp thêm tiền để sử dụng dịch vụ của chúng tôi";

    }
    else if (giatriNuoc == "Không" && giatriTraicay!="Không"){
        document.getElementById("ketqua").innerHTML="Mời bạn xơi " + giatriTraicay;
        document.getElementById("tiendu").innerHTML="Số tiền còn lại là: " + tralai;}

    else if (giatriTraicay == "Không" && giatriNuoc!="Không"){
        document.getElementById("ketqua").innerHTML="Mời bạn xơi " + giatriNuoc;
        document.getElementById("tiendu").innerHTML="Số tiền còn lại là: " + tralai;
    }
    else if (giatriNuoc == "Không" && giatriTraicay == "Không") {
        document.getElementById("ketqua").innerHTML="Bạn chưa mua gì";
        document.getElementById("tiendu").innerHTML="Số tiền còn lại là: " + tralai;
    }
    else{
        document.getElementById("ketqua").innerHTML="Mời bạn xơi " + giatriNuoc + " và " + giatriTraicay;
        document.getElementById("tiendu").innerHTML="Số tiền còn lại là: " + tralai;
    }
}

function functionCancle (){
    document.getElementById("ketqua").innerHTML="";
    document.getElementById("tiendu").innerHTML="";
    document.getElementById("water").value="Không";
    document.getElementById("traicay").value="Không";
    document.getElementById("money").value="";


}