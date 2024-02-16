function updateDiscount(event) {
    if (event.target.value) {
        document.getElementById('salePrice').value = 42750;
    }
    else {
        document.getElementById('salePrice').value = null;
    }
    // console.log('--here--',event.target.value);
}
function loadOrderPage() {
    if (document.getElementById('salePrice').value) {
        window.location.href = 'order.html';
        let abc = document.getElementById('salePrice').value;
        localStorage.setItem('xyz', abc)
    } else {
        document.getElementById('discount_id_show').style = "display: inline";
    }
}

function consoleLog() {
    let def = localStorage.getItem('xyz');
    console.log(def);
}


var no_of_order_start = 1;
var no_of_order = document.getElementById('no_of_order_plus');
no_of_order.addEventListener("click", function () {
    if (no_of_order_start >= 1 && no_of_order_start < 10) {
        document.getElementById('salePrice').value = 42750;
        no_of_order_start++;
        document.getElementById('salePrice').value = document.getElementById('salePrice').value * no_of_order_start;
    }
    console.log(no_of_order_start);
    document.getElementById('no_of_order').value = no_of_order_start;
    console.log("---", document.getElementById('no_of_order').value);
})

var no_of_order = document.getElementById('no_of_order_minus');
no_of_order.addEventListener("click", function () {
    if (no_of_order_start > 1 && no_of_order_start <= 10) {
        document.getElementById('salePrice').value = 42750;
        no_of_order_start--;
        document.getElementById('salePrice').value = document.getElementById('salePrice').value * no_of_order_start;
    }
    console.log(no_of_order_start);
    document.getElementById('no_of_order').value = no_of_order_start;
    console.log("---", document.getElementById('no_of_order').value);
})

function placeOrder() {
    document.getElementById('popup').style = "display: flex"
}



