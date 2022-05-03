//<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
/*
const next = function() {
    let current = 0;
    for (let i = 1; i <= 5; i++) {
        if ($("#" + `q${i}`).style.display == 'block') {
            current = i;
        }
    }
    if (!current) {
        $("#welcome_message").style.display = 'block';
    } else {
        $("#" + `q${current}`).style.display = 'none';
    }
    $("#" + `q${current + 1}`).style.display = 'block';
}
*/

$(document).ready(function() {
    $(":submit").click(function() {
        let current = 0;
        for (let i = 1; i <= 5; i++) {
            if ($("#" + `q${i}`).is(":visible")) {
                current = i;
            }
        }
        if (!current) {
            $("#welcome_message").show();
        } else {
            $("#" + `q${current}`).hide();
        }
        $("#" + `q${current + 1}`).show();
    });
});