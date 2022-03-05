window.addEventListener("load", function() {
    var orderForm = document.forms.orderForm;
    calcOrder();
    orderForm.elements.qty.onchange = calcOrder;

});

function calcOrder() {
    var orderForm = document.forms.orderForm;
    var path = window.location.pathname;
    var page = path.split("/").pop();

    var qtyIndex = orderForm.elements.qty.selectedIndex;
    var qty = orderForm.elements.qty[qtyIndex].value;

    if (page !== "btp_mug.html") {
        var sizeIndex = orderForm.elements.size.selectedIndex;
        var sizeCost = orderForm.elements.size.options[sizeIndex].value;

        var intialCost = sizeCost * qty;
    } else {
        var intialCost = 6.99 * qty;

    }

    orderForm.elements.initialCost.value = "$" + intialCost;

    var taxCost = formatPrice(intialCost * 0.08);
    orderForm.elements.salesTax.value = "$" + taxCost;


    var total = formatPrice(intialCost + taxCost);
    orderForm.elements.totalCost.value = "$" + total;

}

function formatPrice(value) {
    return Math.floor((value) * 100) / 100;
}