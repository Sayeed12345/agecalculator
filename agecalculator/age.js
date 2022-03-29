function calAge() {
    var inputage = document.getElementById("dob").value;
    var userDate = Date.parse(inputage);
    var nowDate = Date.now();
    var milliAge = nowDate - userDate;
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var trueAge = Math.round(milliAge / years);
    var month = trueAge * 12;
    var day = trueAge * 365;
    var hour = Math.round(milliAge / hours);

    document.getElementById("AGECALCULATE").innerHTML = "Age In Years " + trueAge + "<br/>Age In Months " + month + "<br/>Age In Days " +
        day + "<br/>Age In Hours " + hour;
}