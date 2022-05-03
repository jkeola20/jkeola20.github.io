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