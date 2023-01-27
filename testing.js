var calcGrade = function (percentage) {
    if (percentage > 100 || percentage < 0) {
        return "Invaild Percentage";
    };
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 84) {
        return "A";
    } else if (percentage >= 74) {
        return "B+";
    } else if (percentage >= 64) {
        return "B";
    } else if (percentage >= 58) {
        return "C+";
    } else if (percentage >= 50) {
        return "C";
    } else {
        return "Fail";
    };
};

var plus = function () {
    var val = document.getElementById("_input").value;
    if (val >= 100) {
        val = 100;
    } else {
        val++;
    };
    document.getElementById("_input").value = val;
}

var minus = function () {
    var val = document.getElementById("_input").value;
    if (val <= 0) {
        val = 0;
    } else {
        val--;
    };
    document.getElementById("_input").value = val;
}

var funcCall = function () {
    var input = document.getElementById("_input").value;
    input = parseInt(input);
    console.log(input);
    document.getElementById("_output").innerHTML = calcGrade(input);
};
