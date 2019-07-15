var cc, yy, mm, dd;
function input() {
    cc = parseInt(document.getElementById("century").value);
    yy = parseInt(document.getElementById("year").value);
    mm = parseInt(document.getElementById("month").value);
    dd = parseInt(document.getElementById("day").value); function black() {
        var dayD = day();
        leo();
    }
}
// var gender = (document.getElementsById('your gender').value);

function day() {
    input();
    answer = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    answer -= 1;
    console.log(answer);
    // alert(Math.floor(parseInt(answer)))
}

function smallLeo() {
    dayD = day();
    leo();
}

function leo() {

    var radio = document.getElementsByName("gender");
    if (radio[0].checked == true) {
        var gender = "female";
    } else if (radio[1].checked == true) {
        var gender = "male";
    }
    switch (gender) {
        case gender == "male":
            if (dayD == 0) {
                alert('you were born on a SUNDAY and your Aka name is KWASI');
            } else if (dayD == 1) {
                alert('you were born on a MONDAY and your Aka name  is KWADWO');
            } else if (dayD == 2) {
                alert('you were born on a TEUSDAY and your Aka name is KWABENA');
            } else if (dayD == 3) {
                alert('you were born on a WEDNESDAY and your Aka name is KWAKU');
            } else if (dayD == 4) {
                alert('you were born on a THURSDAY and your Aka name is YAW');
            } else if (dayD == 5) {
                alert('you were born on a FRIDAY and your Aka name is KOFI');
            } else if (dayD == 6) {
                alert('you were born on a SATURDAY and your Aka name is KWAME');
            } else {
                console.log("pass");
            }

            break;
        case gender == "female":
            if (answer == 0) {
                alert('you were born on a SUNDAY and your Aka name  is AKOSUA');
            } else if (dayD == 1) {
                alert('you were born on a SUNDAY and your Aka name  is ADWAO');
            } else if (dayD == 2) {
                alert('you were born on a SUNDAY and your Aka name  is ABENAA');
            } else if (dayD == 3) {
                alert('you were born on a SUNDAY and your Aka name  is AKUA');
            } else if (dayD == 4) {
                alert('you were born on a SUNDAY and your Aka name  is YAA');
            } else if (dayD == 5) {
                ('you were born on a SUNDAY and your Aka name  is AFUA');
                alert("you were born on a SUNDAY and your Aka name  is AFUA");
            } else if (dayD == 6) {
                alert('you were born on a SUNDAY and your Aka name  is AMA');
            } else {
                console.log("pass two");
            }
        default:
        // console.log("pass");
    }

}