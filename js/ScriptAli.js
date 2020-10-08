function root(){
    var z = document.getElementById("result").value;
    document.getElementById("result").value=Math.sqrt(document.getElementById("result").value);
    var list = document.getElementById("list");
    var list_item = document.createElement("li");
    list_item.innerHTML =
        "\n            <p>" +" √ "+ z + " = " + document.getElementById("result").value + "</p>\n        ";
    list.append(list_item);
    clr();
}
