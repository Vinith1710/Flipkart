// First Page 
function descriptionSubstring() {
    for (let i = 1; i < 4; i++) {
        document.getElementById("description_" + i).innerHTML = document.getElementById("description_" + i).innerHTML.substring(0, 25) + "...";
    }
}

function imageLoad(event) {
    imageValue = event.target.id;
    localStorage.setItem('imageLoadNew', imageValue);
    console.log("log", imageValue)
    window.location.href = 'product.html';

}

// Second Page 
function consoleLog() {
    let selectedProduced = localStorage.getItem('imageLoadNew');
    console.log(selectedProduced);
}

function updateDiscount(event) {
    if (event.target.value) {
        document.getElementById('salePrice').value = 42750;
    }
    else {
        document.getElementById('salePrice').value = null;
    }
}



function loadOrderPage() {
    if (document.getElementById('salePrice').value) {
        window.location.href = 'order.html';
    } else {
        document.getElementById('discount_id_show').style = "display: inline";
    }
}

// function consoleLog() {
//     let def = localStorage.getItem('xyz');
//     console.log(def);
// }


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



