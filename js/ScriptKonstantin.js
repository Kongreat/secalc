
function factorialSolver(n) {
    return n ? n * factorialSolver(n - 1) : 1;
}


function factorial(){
    var z = document.getElementById("result").value;
    document.getElementById("result").value = factorialSolver(z);
    var list = document.getElementById("list");
    var list_item = document.createElement("li");
    list_item.innerHTML =
        "\n            <p>" + z + "!" + " = " + document.getElementById("result").value + "</p>\n        ";
    list.append(list_item);
    clr();
}
