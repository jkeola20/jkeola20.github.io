$(document).ready(function() {
    $(":submit").click(function() {
        let current = 0;
        for (let i = 1; i <= 3; i++) {
            if ($("#" + `q${i}`).is(":visible")) {
                current = i;
            }
        }
        if (!current) {
            $("#welcome_message").hide();
            $("#welcome_button").hide();
            $("#prompt").show();
        } else {
            $("#" + `q${current}`).hide();
        }
        $("#" + `q${current + 1}`).show();
    });
    $("form").submit(e => e.preventDefault());
    $("#q3 > :submit").click(function() {
        window.location.href = '/ending.html';
        return false;
    })
});