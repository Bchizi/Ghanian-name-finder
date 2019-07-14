var cc, yy, mm, dd;
function input() {
    cc = parseInt(document.getElementById("century").value);
    yy = parseInt(document.getElementById("year").value);
    mm = parseInt(document.getElementById("month").value);
    dd = parseInt(document.getElementById("day").value);
}
// var gender = (document.getElementsById('your gender').value);

function day() {
    input();
    answer = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    answer -= 1;
    console.log(answer);
    return (Math.floor(answer));

} function leo() {
    answer = day();
    var radio = document.getElementsByName("gender");
    if (radio[0].checked == true) {
        var gender = "female";
    } else if (radio[1].checked == true) {
        var gender = "male";
    }
    switch (gender) {
        case gender === "male":
            if (answer === 0) {
                alert('you were born on a SUNDAY and your Aka name is KWASI');
            } else if (answer === 1) {
                alert('you were born on a MONDAY and your Aka name  is KWADWO');
            } else if (answer === 2) {
                alert('you were born on a TEUSDAY and your Aka name is KWABENA');
            } else if (answer === 3) {
                document.write('you were born on a WEDNESDAY and your Aka name is KWAKU');
            } else if (answer === 4) {
                document.write('you were born on a THURSDAY and your Aka name is YAW');
            } else if (answer === 5) {
                document.write('you were born on a FRIDAY and your Aka name is KOFI');
            } else if (answer === 6) {
                document.write('you were born on a SATURDAY and your Aka name is KWAME');
            } else {
                console.log("pass");
            }

