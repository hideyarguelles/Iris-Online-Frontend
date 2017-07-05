// This is the JS for the stalls and products.

$(() => {
    $('.card-purchase-div>input').keypress(function (key) {
        // Small letter ASCII
        if (key.charCode >= 97 && key.charCode <= 122) {
            return false;
        }
        // Capital letter ASCII
        else if (key.charCode >= 65 && key.charCode <= 90) {
            return false;
        }
    });
});