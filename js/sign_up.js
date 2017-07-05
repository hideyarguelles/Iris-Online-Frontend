// This is the JS of the Sign-up page

$(() => {
    var message = "The following fields are empty: \n";
    var temp = "";
    $("#sign-in-button").on('click', function () {
        if ($("#password").val() != $("#re-type").val())
            alert("Your passwords do not match.");

        if ($('#e-mail').val() == "")
            message += "\nE-mail";

        if ($('#password').val() == "")
            message += "\nPassword";

        if ($('#re-type').val() == "")
            message += "\nPassword re-type";

        if ($('#full-name').val() == "")
            message += "\nName";

        if ($('#address').val() == "")
            message += "\nAddress";

        if ($('#city').val() == "")
            message += "\nCity";

        if ($('#postal-code').val() == "")
            message += "\nPostal code";

        if ($('#phone').val() == "")
            message += "\nE-mail";

        else
            message = "";

        if (message != temp)
            alert(message);
    });
});