// Time-Space show/hide function
$(document).ready(function() {
    $(":submit").click(function() {
        let current = 0;
        for (let i = 1; i <= 5; i++) {
            if ($("#" + `q${i}`).is(":visible")) {
                current = i;
            }
        } // Look for the currently shown question
        if (!current) {
            // If current === 0, that means no question was being displayed, so we hide the welcome message and show the prompt.
            $("#welcome_message").hide();
            $("#welcome_button").hide();
            $("#prompt").show();
        } else {
            $("#" + `q${current}`).hide(); // Hide current question.
        }
        $("#" + `q${current + 1}`).show(); // Show the next question.
    });
    $("form").submit(e => e.preventDefault()); // Prevent the webpage to reload on submission.
    $("#q5 > :submit").click(function() {
        window.location.href = '/matching.html'; // Link the final submit button to matching page.
        return false;
    })
});