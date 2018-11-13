var n1 = document.getElementById("u11");
var n2 = document.getElementById("u12");
var ats = document.getElementById("ats1");
n1.addEventListener("input", add);
n2.addEventListener("input", add);
function add(){
var one = parseFloat(n1.value) ||0;
var two = parseFloat(n2.value)||0;
ats.innerHTML ="Jums reikes: " + (one*two) + "vnt. lapu";
}

var n21 = document.getElementById("u21");
var a22 = document.getElementById("ats2");
var a23 = document.getElementById("ats3");
var a24 = document.getElementById("ats4");
var a25 = document.getElementById("ats5");
n21.addEventListener("input", add2);
function add2() {
    var one2 = parseFloat(n21.value);
    var at2 = ((one2*5)/100);
    a22.innerHTML = "mokesčiams išleidžiama: " + at2 + "eur";
    a23.innerHTML = "maistui išleidžiama: " + ((one2-at2)/2) + "eur";
    a24.innerHTML = "rūbams išleidžiama: " + (((one2-at2)*30)/100) + "eur";
    a25.innerHTML = "lieka santaupu: " + (((one2-at2)*20)/100) + "eur";
}

var n31 = document.getElementById("u31");
var a31 = document.getElementById("h1");
var a32 = document.getElementById("min1");
var a33 = document.getElementById("s1");
n31.addEventListener("input", add3);
function add3() {
    var l1 = parseFloat(n31.value);
    a31.innerHTML = "Valandų: "+ (l1*24);
    a32.innerHTML = "Minučių: "+ (l1*24*60);
    a33.innerHTML = "Sekundžių: "+ (l1*24*3600);
}
