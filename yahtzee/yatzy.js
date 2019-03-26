let clicking = false;
document.getElementById("create").addEventListener("click", function () {
    if (clicking) {
        oneye.style.transform = "none";
        tweye.style.transform = "none";
        theye.style.transform = "none";
        foeye.style.transform = "none";
        fieye.style.transform = "none";
        clicking = false;
    } else {
        oneye.style.transform = "rotate(360deg)";
        tweye.style.transform = "rotate(360deg)";
        theye.style.transform = "rotate(360deg)";
        foeye.style.transform = "rotate(360deg)";
        fieye.style.transform = "rotate(360deg)";
        clicking = true;
    }
});

let x = 0;
let y = 0;
let z = 0;
let w = 0;
let v = 0;

document.getElementById("create").addEventListener("click", function () {


    if (x != 0 || clickCount > 3) {
        var one = document.getElementById("one").value;


    } else {
        var one = document.getElementById("one").value = (Math.floor(Math.random() * 6) + 1);

    }
    if (y != 0 || clickCount > 3) {
        var two = document.getElementById("two").value;
    } else {
        var two = document.getElementById("two").value = (Math.floor(Math.random() * 6) + 1);
    }
    if (z != 0 || clickCount > 3) {
        var three = document.getElementById("three").value;
    } else {
        var three = document.getElementById("three").value = (Math.floor(Math.random() * 6) + 1);

    }
    if (w != 0 || clickCount > 3) {
        var four = document.getElementById("four").value;
    } else {
        var four = document.getElementById("four").value = (Math.floor(Math.random() * 6) + 1);
    }
    if (v != 0 || clickCount > 3) {
        var five = document.getElementById("five").value;
    } else {
        var five = document.getElementById("five").value = (Math.floor(Math.random() * 6) + 1);
    }

    var alldicce = [one, two, three, four, five];
    var sortinta = alldicce.sort();
    document.getElementById("alldices").innerHTML = "You have: " + sortinta;
    // Chance
    document.getElementById("akys").innerHTML = one + two + three + four + five;

    //kounting equals  
    if (one == 1) {
        var sum1 = 1;
        document.getElementById('oneye').style.backgroundImage = "url('img/one.png')";

    } else {
        var sum1 = 0
    }
    ;
    if (two == 1) {
        var sum2 = 1;
        document.getElementById('tweye').style.backgroundImage = "url('img/one.png')";
    } else {
        var sum2 = 0
    }
    ;
    if (three == 1) {
        var sum3 = 1;
        document.getElementById('theye').style.backgroundImage = "url('img/one.png')";
    } else {
        var sum3 = 0
    }
    ;
    if (four == 1) {
        var sum4 = 1;
        document.getElementById('foeye').style.backgroundImage = "url('img/one.png')";
    } else {
        var sum4 = 0
    }
    ;
    if (five == 1) {
        var sum5 = 1;
        document.getElementById('fieye').style.backgroundImage = "url('img/one.png')";
    } else {
        var sum5 = 0
    }
    ;
    var sum = sum1 + sum2 + sum3 + sum4 + sum5;
    document.getElementById("ones").innerHTML = sum;
    if (one == 2) {
        var sum1 = 2;
        document.getElementById('oneye').style.backgroundImage = "url('img/two.png')";
    } else {
        var sum1 = 0;
    }
    if (two == 2) {
        var sum2 = 2;
        document.getElementById('tweye').style.backgroundImage = "url('img/two.png')";
    } else {
        var sum2 = 0
    }
    ;
    if (three == 2) {
        var sum3 = 2;
        document.getElementById('theye').style.backgroundImage = "url('img/two.png')";
    } else {
        var sum3 = 0
    }
    ;
    if (four == 2) {
        var sum4 = 2;
        document.getElementById('foeye').style.backgroundImage = "url('img/two.png')";
    } else {
        var sum4 = 0
    }
    ;
    if (five == 2) {
        var sum5 = 2;
        document.getElementById('fieye').style.backgroundImage = "url('img/two.png')";
    } else {
        var sum5 = 0
    }
    ;
    var sum = sum1 + sum2 + sum3 + sum4 + sum5;
    document.getElementById("twos").innerHTML = sum;
    if (one == 3) {
        var sum1 = 3;
        document.getElementById('oneye').style.backgroundImage = "url('img/three.png')";
    } else {
        var sum1 = 0
    }
    ;
    if (two == 3) {
        var sum2 = 3;
        document.getElementById('tweye').style.backgroundImage = "url('img/three.png')";
    } else {
        var sum2 = 0
    }
    ;
    if (three == 3) {
        var sum3 = 3;
        document.getElementById('theye').style.backgroundImage = "url('img/three.png')";
    } else {
        var sum3 = 0
    }
    ;
    if (four == 3) {
        var sum4 = 3;
        document.getElementById('foeye').style.backgroundImage = "url('img/three.png')";
    } else {
        var sum4 = 0
    }
    ;
    if (five == 3) {
        var sum5 = 3;
        document.getElementById('fieye').style.backgroundImage = "url('img/three.png')";
    } else {
        var sum5 = 0
    }
    ;
    var sum = sum1 + sum2 + sum3 + sum4 + sum5;
    document.getElementById("threes").innerHTML = sum;

    if (one == 4) {
        var sum1 = 4;
        document.getElementById('oneye').style.backgroundImage = "url('img/four.png')";
    } else {
        var sum1 = 0
    }
    ;
    if (two == 4) {
        var sum2 = 4;
        document.getElementById('tweye').style.backgroundImage = "url('img/four.png')";
    } else {
        var sum2 = 0
    }
    ;
    if (three == 4) {
        var sum3 = 4;
        document.getElementById('theye').style.backgroundImage = "url('img/four.png')";
    } else {
        var sum3 = 0
    }
    ;
    if (four == 4) {
        var sum4 = 4;
        document.getElementById('foeye').style.backgroundImage = "url('img/four.png')";
    } else {
        var sum4 = 0
    }
    ;
    if (five == 4) {
        var sum5 = 4;
        document.getElementById('fieye').style.backgroundImage = "url('img/four.png')";
    } else {
        var sum5 = 0
    }
    ;
    var sum = sum1 + sum2 + sum3 + sum4 + sum5;
    document.getElementById("fours").innerHTML = sum;

    if (one == 5) {
        var sum1 = 5;
        document.getElementById('oneye').style.backgroundImage = "url('img/five.png')";
    } else {
        var sum1 = 0
    }
    ;
    if (two == 5) {
        var sum2 = 5;
        document.getElementById('tweye').style.backgroundImage = "url('img/five.png')";
    } else {
        var sum2 = 0
    }
    ;
    if (three == 5) {
        var sum3 = 5;
        document.getElementById('theye').style.backgroundImage = "url('img/five.png')";
    } else {
        var sum3 = 0
    }
    ;
    if (four == 5) {
        var sum4 = 5;
        document.getElementById('foeye').style.backgroundImage = "url('img/five.png')";
    } else {
        var sum4 = 0
    }
    ;
    if (five == 5) {
        var sum5 = 5;
        document.getElementById('fieye').style.backgroundImage = "url('img/five.png')";
    } else {
        var sum5 = 0
    }
    ;
    var sum = sum1 + sum2 + sum3 + sum4 + sum5;
    document.getElementById("fives").innerHTML = sum;
    if (one == 6) {
        var sum1 = 6;
        document.getElementById('oneye').style.backgroundImage = "url('img/sixs.png')";
    } else {
        var sum1 = 0
    }
    ;
    if (two == 6) {
        var sum2 = 6;
        document.getElementById('tweye').style.backgroundImage = "url('img/sixs.png')";
    } else {
        var sum2 = 0
    }
    if (three == 6) {
        var sum3 = 6;
        document.getElementById('theye').style.backgroundImage = "url('img/sixs.png')";
    } else {
        var sum3 = 0
    }
    ;
    if (four == 6) {
        var sum4 = 6;
        document.getElementById('foeye').style.backgroundImage = "url('img/sixs.png')";
    } else {
        var sum4 = 0
    }
    ;
    if (five == 6) {
        var sum5 = 6;
        document.getElementById('fieye').style.backgroundImage = "url('img/sixs.png')";
    } else {
        var sum5 = 0
    }
    ;
    var sum = sum1 + sum2 + sum3 + sum4 + sum5;
    document.getElementById("sixs").innerHTML = sum;

    ///Free of kind
    var str = document.getElementById("alldices").innerHTML;
    var threeKind = str.match(/1,1,1|2,2,2|3,3,3|4,4,4|5,5,5|6,6,6/g);
    if (threeKind) {
        document.getElementById("threeOfKind").innerHTML = akys.innerHTML;
    } else {
        document.getElementById("threeOfKind").innerHTML = "0";
    }
    ///four cind
    var fourKind = str.match(/1,1,1,1|2,2,2,2|3,3,3,3|4,4,4,4|5,5,5,5|6,6,6,6/g);
    if (fourKind) {
        document.getElementById("fourOfKind").innerHTML = akys.innerHTML;
    } else {
        document.getElementById("fourOfKind").innerHTML = "0";
    }

    ///full house    
    var twoKind = str.match(/1,1|2,2|3,3|4,4|5,5|6,6/g);
    let twoKinds = String(twoKind);
    let threeKinds = String(threeKind);
    console.log(twoKinds[0] + twoKinds[1] + twoKinds[2] + " pirmas");
    console.log(twoKinds[4] + " antras");
    console.log(threeKind + " trysvienodi");

    if (twoKinds[4] !== undefined) {
        if (twoKinds[4] !== twoKinds[0]&&threeKind !== null) {
            document.getElementById("fullh").value = 25;
            document.getElementById("fullh").innerHTML = 25;
        }
    } else {
        document.getElementById("fullh").value = 0;
        document.getElementById("fullh").innerHTML = 0;
    }


    ///Small Straight

    let check1 = 0;
    let check2 = 0;
    let check3 = 0;
    let check4 = 0;
    let check5 = 0;
    let check6 = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === "1") {
            check1 = 1;
        }

        if (str[i] === "2") {
            check2 = 1;

        }
        if (str[i] === "3") {
            check3 = 1;

        }
        if (str[i] === "4") {
            check4 = 1;
        }
    }
    for (let i = 1; i < str.length; i++) {
        if (str[i] === "2") {
            check2 = 1;

        }
        if (str[i] === "3") {
            check3 = 1;

        }
        if (str[i] === "4") {
            check4 = 1;
        }
        if (str[i] === "5") {
            check5 = 1;
        }
    }
    for (let i = 1; i < str.length; i++) {
        if (str[i] === "3") {
            check3 = 1;

        }
        if (str[i] === "4") {
            check4 = 1;
        }
        if (str[i] === "5") {
            check5 = 1;
        }
        if (str[i] === "6") {
            check6 = 1;
        }

    }

    let straight1 = check1 + check2 + check3 + check4;
    let straight2 = check2 + check3 + check4 + check5;
    let straight3 = check3 + check4 + check5 + check6;


    if (straight1 === 4 || straight2 === 4 || straight3 === 4) {
        document.getElementById("Sstraight").value = 30;
        document.getElementById("Sstraight").innerHTML = 30;
    } else {
        document.getElementById("Sstraight").value = 0;
        document.getElementById("Sstraight").innerHTML = 0;
    }
    ///Big Straight
    var straight4 = str.match(/1,2,3,4,5|2,3,4,5,6/g);
    if (straight4) {
        document.getElementById("Bstraight").value = 40;
        document.getElementById("Bstraight").innerHTML = 40;
    } else {
        document.getElementById("Bstraight").value = 0;
        document.getElementById("Bstraight").innerHTML = 0;
    }
    ///Yatze
    var yatze = str.match(/1,1,1,1,1|2,2,2,2,2|3,3,3,3,3|4,4,4,4,4|5,5,5,5,5|6,6,6,6,6/g);
    if (yatze) {
        document.getElementById("yatzy").value = 50;
        document.getElementById("yatzy").innerHTML = 50;
    } else {
        document.getElementById("yatzy").value = 0;
        document.getElementById("yatzy").innerHTML = 0;
    }
    var po1 = parseInt(document.getElementById("p1").value);
    var po2 = parseInt(document.getElementById("p2").value);
    var po3 = parseInt(document.getElementById("p3").value);
    var po4 = parseInt(document.getElementById("p4").value);
    var po5 = parseInt(document.getElementById("p5").value);
    var po6 = parseInt(document.getElementById("p6").value);
    var allsp = po1 + po2 + po3 + po4 + po5 + po6;
    document.getElementById("allp").value = allsp;
    ///Bonus
    if (allsp >= 63) {
        document.getElementById("p8").value = 35;
    } else {
        document.getElementById("p8").value = 0;
    }
    var po8 = parseInt(document.getElementById("p8").value);
    var po9 = parseInt(document.getElementById("p9").value);
    var po10 = parseInt(document.getElementById("p10").value);
    var po11 = parseInt(document.getElementById("p11").value);
    var po12 = parseInt(document.getElementById("p12").value);
    var po13 = parseInt(document.getElementById("p13").value);
    var po14 = parseInt(document.getElementById("p14").value);
    var po15 = parseInt(document.getElementById("p15").value);
    var allpo = allsp + po8 + po9 + po10 + po11 + po12 + po13 + po14 + po15;
    document.getElementById("all").value = allpo;


});

document.getElementById("oneye").addEventListener("click", function () {
    document.getElementById("oneye").style.marginBottom = "40px";

    x = 1;
});
document.getElementById("tweye").addEventListener("click", function () {
    document.getElementById("tweye").style.marginBottom = "40px";
    y = 1;
});
document.getElementById("theye").addEventListener("click", function () {
    document.getElementById("theye").style.marginBottom = "40px";
    z = 1;
});
document.getElementById("foeye").addEventListener("click", function () {
    document.getElementById("foeye").style.marginBottom = "40px";
    w = 1;
});
document.getElementById("fieye").addEventListener("click", function () {
    document.getElementById("fieye").style.marginBottom = "40px";
    v = 1;
});

function changeColor(obj) {
    obj.style.backgroundColor = "#a68721";
}

var clickCount = 0;


document.getElementById("ones").addEventListener("click", function () {
    document.getElementById("p1").value = ones.innerHTML;
    clickCount = 0;
});


document.getElementById("twos").addEventListener("click", function () {
    document.getElementById("p2").value = twos.innerHTML;
    clickCount = 0;
});
document.getElementById("threes").addEventListener("click", function () {
    document.getElementById("p3").value = threes.innerHTML;
    clickCount = 0;
});
document.getElementById("fours").addEventListener("click", function () {
    document.getElementById("p4").value = fours.innerHTML;
    clickCount = 0;
});
document.getElementById("fives").addEventListener("click", function () {
    document.getElementById("p5").value = fives.innerHTML;
    clickCount = 0;
});
document.getElementById("sixs").addEventListener("click", function () {
    document.getElementById("p6").value = sixs.innerHTML;
    clickCount = 0;
});
document.getElementById("threeOfKind").addEventListener("click", function () {
    document.getElementById("p9").value = threeOfKind.innerHTML;
    clickCount = 0;
});
document.getElementById("fourOfKind").addEventListener("click", function () {
    document.getElementById("p10").value = fourOfKind.innerHTML;
    clickCount = 0;
});
document.getElementById("fullh").addEventListener("click", function () {
    document.getElementById("p11").value = fullh.value;
    clickCount = 0;
});
document.getElementById("Sstraight").addEventListener("click", function () {
    document.getElementById("p12").value = Sstraight.value;
    clickCount = 0;
});
document.getElementById("Bstraight").addEventListener("click", function () {
    document.getElementById("p13").value = Bstraight.value;
    clickCount = 0;
});
document.getElementById("yatzy").addEventListener("click", function () {
    document.getElementById("p14").value = yatzy.value;
    clickCount = 0;
});
document.getElementById("akys").addEventListener("click", function () {
    document.getElementById("p15").value = akys.innerHTML;
    clickCount = 0;
});

function clickCounting() {
    clickCount += 1;
    document.getElementById("kount").innerHTML = clickCount;
    if (clickCount > 3 || clickCount == 1) {
        x = 0;
        y = 0;
        z = 0;
        w = 0;
        v = 0;
        document.getElementById("oneye").style.marginBottom = "0px";
        document.getElementById("tweye").style.marginBottom = "0px";
        document.getElementById("theye").style.marginBottom = "0px";
        document.getElementById("foeye").style.marginBottom = "0px";
        document.getElementById("fieye").style.marginBottom = "0px";

    }
    if (clickCount == 3) {
        document.getElementById("create").style.backgroundColor = "#a68721";
        document.getElementById("oneye").style.marginBottom = "40px";
        document.getElementById("tweye").style.marginBottom = "40px";
        document.getElementById("theye").style.marginBottom = "40px";
        document.getElementById("foeye").style.marginBottom = "40px";
        document.getElementById("fieye").style.marginBottom = "40px";


    } else {
        document.getElementById("create").style.backgroundColor = "#7b8a04";

    }
}
