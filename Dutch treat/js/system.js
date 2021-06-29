function btn(){
const People = document.getElementById("people").value;
const Money = document.getElementById("money").value;
const Average = Money / People;
    if(People % 1 == 0 && Money % 1 == 0){
        var width = 640;
        var height = 640;
        var sw = (screen.availWidth - width) / 2;
        var sh = (screen.availHeight - height) / 2;
        var WinOpt = "width=" + width + ",height=" + height + ",top=" + sh + ",left=" + sw;
        var winop = window.open("","",WinOpt);
            winop.document.write("<html><head><meta charset='utf-8'><title>平均金額</title></head>");
            winop.document.write("<body style='background-color:#000;color:#fff;text-align:center;'>")
            winop.document.write("<h1>1人あたりの支払金額は</h1>");
            winop.document.write("<h1>" + Average + "円" + "です" +  "</h1>");
    }else{
        alert("整数値で入力してください！");
    }
}