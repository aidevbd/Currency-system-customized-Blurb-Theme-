/* -------- Developer Info Log -------- */
console.log(
    "%cThis site’s currency system is customized by Yasin Arafat 💻 contact: yasinarafatdev@gmail.com",
    "color: green; font-size: 14px;"
);

/*
 * Currency system customized for Bangladesh (Force BDT)
 * Clean & Optimized Version
 * Only BDT is used. Multi-currency system disabled.
 */

/* ------------------ formatMoney function (required) ------------------ */
function formatMoney(amount, decimalCount = 2, decimal = ".", separator = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return (
            negativeSign +
            (j ? i.substr(0, j) + separator : "") +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + separator)
        );
    } catch (e) {
        console.log(e);
    }
}

/* ------------------- Force Currency to BDT (MAIN CODE) ------------------ */
$(document).ready(function () {

    var currency = 'BDT',
        unit = '৳',
        symbol = '৳';

    // Remove currency dropdown menu (if exists)
    $('#blurb_curency_list').remove();

    // Force BDT everywhere
    $(".blurb_curency_select").text(currency);
    $('.blurb-currency-symbol').text(symbol);
    $('.blurb-currency-key').text(currency);

    // Remove previous currency cookies
    Cookies.remove('blurb_currency', { path: '' });

    // Format all prices (no conversion — only formatting)
    $('.blurb-price-min, .blurb-price-max').each(function () {
        var price = parseFloat($(this).text().replace(/,/g, ''));
        price = formatMoney(price);
        $(this).text(price);
    });

});
