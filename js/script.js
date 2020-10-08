function display(val) {
    document.getElementById("result").value += val;
}
function solve() {
    var x;
    var hist = [];
    x = document.getElementById("result").value;
    if (x == null || x == "") {
        window.alert("Enter number!");
    }
    else {
        var y = eval(x);
        document.getElementById("result").value = y;
        hist.push(x);
        var list = document.getElementById("list");
        var list_item = document.createElement("li");
        list_item.innerHTML =
            "\n            <p>" + hist[0] + " = " + y + "</p>\n        ";
        list.append(list_item);
        hist.pop();
    }
}
function clr() {
    document.getElementById("result").value = " ";
}
