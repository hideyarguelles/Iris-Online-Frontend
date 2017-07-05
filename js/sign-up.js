// This is the JS of the Sign-up page

$(() => {
    $("#sign-in-button").on('click', function () {
        if ($("#password") != $("#re-type")) {
            alert("Your passwords do not match.");
        }
    });
});