function shiftFn(key) {
    var shift = document.getElementById("shiftBtn");
    var arr = document.getElementsByTagName("td");
    if (key == 1) {
        shift.setAttribute("onclick", "shiftFn(0)");
        shift.style.backgroundColor = "rgba(240, 248, 255)";
        arr[11].innerHTML = "sin<sup>-1</sup>";
        arr[11].setAttribute("onclick", "trigo1('sin')");
        arr[16].innerHTML = "cos<sup>-1</sup>";
        arr[16].setAttribute("onclick", "trigo1('cos')");
        arr[21].innerHTML = "tan<sup>-1</sup>";
        arr[21].setAttribute("onclick", "trigo1('tan')");
        arr[22].innerHTML = "ln";
        arr[22].setAttribute("onclick", "log(0)");
    } 
    else {
        shift.setAttribute("onclick", "shiftFn(1)");
        shift.style.backgroundColor = "rgba(240, 248, 255, 0.712)";
        arr[11].innerHTML = "sin";
        arr[11].setAttribute("onclick", "trigo('sin')");
        arr[16].innerHTML = "cos";
        arr[16].setAttribute("onclick", "trigo('cos')");
        arr[21].innerHTML = "tan";
        arr[21].setAttribute("onclick", "trigo('tan')");
        arr[22].innerHTML = "log";
        arr[22].setAttribute("onclick", "log(1)");
    }
}

function input(ele) {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    x.value += ele;
    y.innerHTML += ele;
}

function factorial(num) {
    if (Number.isInteger(num)) {
        if (num < 2) return 1;
        return num * factorial(num - 1);
    }
}

function sqrt() {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    x.value += "sqrt(";
    y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
        " * Math.sqrt(" : "Math.sqrt(";
}

function leftParen() {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    x.value += "(";
    y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
        " * (" : "(";
}

function pi(val) {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
        x.value += "\u03C0";
        y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
            " * Math.PI" : "Math.PI";
}

function log(logVal) {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    if (logVal == 1) {
        x.value += "log(";
        y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
            " * Math.log10(" : "Math.log10(";
    } else {
        x.value += "ln(";
        y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
            " * Math.log(" : "Math.log(";
    }
}

function trigo(angleVal) {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    x.value += angleVal + "(";
    y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
        " * Math." + angleVal + "(Math.PI / 180 * " : "Math." + angleVal + "(Math.PI / 180 * ";
}

function trigo1(invAngle) {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    x.value += invAngle + "^-1("
    y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
        " * 180 / Math.PI * Math.a" + invAngle + "(" : "180 / Math.PI * Math.a" + invAngle + "(";
}

function multOrDiv(mulVal) {
    var x = document.getElementById("result");  
    var y = document.getElementById("myPara");
    if (mulVal == "mult") {
        x.value += "x";
        y.innerHTML += "*";
    } else {
        x.value += "/";
        y.innerHTML += "/"
    }
}

function del() {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    var z = document.getElementById("myAns");
    if (x.value.slice(-3) == "Ans") {
        y.innerHTML = (/[\d)]/.test(x.value.slice(-4, -3))) ?
            y.innerHTML.slice(0, -(z.innerHTML.length + 3)) : y.innerHTML.slice(0, -(z.innerHTML.length));
        x.value = x.value.slice(0, -3);
    } else if (x.value == "Error!") {
        ac();
    } else {
        switch (y.innerHTML.slice(-2)) {
            case "* ": // sin cos tan
                y.innerHTML = (/[\d)]/.test(x.value.slice(-5, -4))) ?
                    y.innerHTML.slice(0, -28) : y.innerHTML.slice(0, -25);
                x.value = x.value.slice(0, -4);
                break;
            case "n(":
            case "s(": // asin acos atan
                y.innerHTML = (/[\d)]/.test(x.value.slice(-7, -6))) ?
                    y.innerHTML.slice(0, -29) : y.innerHTML.slice(0, -26);
                x.value = x.value.slice(0, -6);
                break;
            case "0(": // log
                y.innerHTML = (/[\d)]/.test(x.value.slice(-5, -4))) ?
                    y.innerHTML.slice(0, -14) : y.innerHTML.slice(0, -11);
                x.value = x.value.slice(0, -4);
                break;
            case "g(": // ln
                y.innerHTML = (/[\d)]/.test(x.value.slice(-4, -3))) ?
                    y.innerHTML.slice(0, -12) : y.innerHTML.slice(0, -9);
                x.value = x.value.slice(0, -3);
                break;
            case "t(": // sqrt
                y.innerHTML = (/[\d)]/.test(x.value.slice(-6, -5))) ?
                    y.innerHTML.slice(0, -13) : y.innerHTML.slice(0, -10);
                x.value = x.value.slice(0, -5);
                break;
            case "PI": // pi
                y.innerHTML = (/[\d)]/.test(x.value.slice(-2, -1))) ?
                    y.innerHTML.slice(0, -10) : y.innerHTML.slice(0, -7);
                x.value = x.value.slice(0, -1);
                break;
            default:
                y.innerHTML = y.innerHTML.slice(0, -1);
                x.value = x.value.slice(0, -1);
        };
    }
}

function ac() {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    x.value = "";
    y.innerHTML = "";
}

function ans() {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    var z = document.getElementById("myAns");
    x.value += "Ans";
    y.innerHTML += (/[\d)]/.test(y.innerHTML.slice(-1))) ?
        " * " + z.innerHTML : z.innerHTML;
}

function equal() {
    var x = document.getElementById("result");
    var y = document.getElementById("myPara");
    var z = document.getElementById("myAns");
    for (var i = 0; i < x.value.split("(").length - x.value.split(")").length; i++) {
        y.innerHTML += ")";
    }
    if (y.innerHTML != "") {
        x.value = y.innerHTML = z.innerHTML = eval(y.innerHTML
            .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
            .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
        );
    }
    if (!isFinite(x.value)) x.value = "Infinity";
}