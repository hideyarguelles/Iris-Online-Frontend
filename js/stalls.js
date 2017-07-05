// This is the JS for the stalls and products.

$(() => {
    $('.spinner .btn:first-of-type').on('click', function () {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
    });

    $('.spinner .btn:last-of-type').on('click', function () {
        $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
    });
});