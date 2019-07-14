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

