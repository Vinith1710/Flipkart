// First Page 
function descriptionSubstring() {
    for (let i = 1; i < 4; i++) {
        let description = document.getElementById('product_description_' + i).innerHTML;
        localStorage.setItem('productDescription_' + i, description + i);
        document.getElementById("product_description_" + i).innerHTML = document.getElementById("product_description_" + i).innerHTML.substring(0, 40) + "...";
    }
}

function imageLoad(event) {
    var source = event.target.id;
    localStorage.setItem('imageSource', source);
    for (let i = 1; i < 4; i++) {
        if (source == "content_list_" + i) {
            let heading = document.getElementById('product_heading_' + i).innerHTML;
            localStorage.setItem('productHeading', heading);
        }
    }
    window.location.href = 'product.html';
}

// Second Page 

function productPageLoad() {
    var selectedProduced = localStorage.getItem('imageSource');
    if (selectedProduced == "content_list_1") {
        let aDescription = localStorage.getItem('productDescription_1');
        document.getElementById('product_description').innerHTML = aDescription;
        document.getElementById('originalPrice').value = "45000";
        for (let i = 1; i < 4; i++) {
            document.getElementById('product_image_' + i).src = "images/PS5_" + i + ".jpg";
        }
    }
    else if (selectedProduced == "content_list_2") {
        let aDescription = localStorage.getItem('productDescription_2');
        document.getElementById('product_description').innerHTML = aDescription;
        document.getElementById('originalPrice').value = "30000";
        for (let i = 1; i < 4; i++) {
            document.getElementById('product_image_' + i).src = "images/NS_" + i + ".jpg";
        }
    }
    else {
        let aDescription = localStorage.getItem('productDescription_3');
        document.getElementById('product_description').innerHTML = aDescription;
        document.getElementById('originalPrice').value = "55000";
        for (let i = 1; i < 4; i++) {
            document.getElementById('product_image_' + i).src = "images/XB_" + i + ".jpg";
        }
    }
    let aHeading = localStorage.getItem('productHeading');
    document.getElementById('product_heading').innerHTML = aHeading;
}

function updateDiscount(event) {
    if (event.target.value == 1) {
        let price = (document.getElementById('originalPrice').value * 90) / 100;
        document.getElementById('salePrice').value = price;
    }
    else if (event.target.value == 2) {
        let price = document.getElementById('originalPrice').value - 3500;
        document.getElementById('salePrice').value = price;
    }
    else {
        document.getElementById('salePrice').value = null;
    }
}

function redirectOrderPage() {
    if (document.getElementById('salePrice').value) {
        let orderImage = localStorage.getItem('imageSource');
        localStorage.setItem('loadOrderImage', orderImage);
        let aHeading = localStorage.getItem('productHeading');
        localStorage.setItem('loadOrderHeading', aHeading);
        let salePrice = document.getElementById('salePrice').value;
        localStorage.setItem('loadSalePrice', salePrice);
        window.location.href = 'order.html';

    } else {
        document.getElementById('discount_id_show').style = "display: inline";
    }
}



// Last Page 
function loadOrderPage() {
    let orderHeading = localStorage.getItem('loadOrderHeading');
    document.getElementById('order_heading').innerHTML = orderHeading;
    let orderPrice = localStorage.getItem('loadSalePrice');
    document.getElementById('orderSinglePrice').value = orderPrice;
    document.getElementById('salePrice').value = orderPrice;

    let orderImage = localStorage.getItem('loadOrderImage');
    if (orderImage == "content_list_1") {
        document.getElementById('order_page_image').src = "images/PS5_1.jpg";
        document.getElementById('available_items').value = 17;
    }
    else if (orderImage == "content_list_2") {
        document.getElementById('order_page_image').src = "images/NS_1.jpg";
        document.getElementById('available_items').value = 8;
    }
    else {
        document.getElementById('order_page_image').src = "images/XB_1.jpg";
        document.getElementById('available_items').value = 24;
    }
}

var no_of_order_start = 1;
var no_of_order = document.getElementById('no_of_order_plus');
no_of_order.addEventListener("click", function () {
    var singlePrice = localStorage.getItem('loadSalePrice');

    if (no_of_order_start >= 1 && no_of_order_start < document.getElementById('available_items').value) {
        document.getElementById('salePrice').value = singlePrice;
        no_of_order_start++;
        document.getElementById('salePrice').value = document.getElementById('salePrice').value * no_of_order_start;
    }
    console.log(no_of_order_start);
    document.getElementById('no_of_order').value = no_of_order_start;
    console.log("---", document.getElementById('no_of_order').value);
})

var no_of_order = document.getElementById('no_of_order_minus');
no_of_order.addEventListener("click", function () {
    var singlePrice = localStorage.getItem('loadSalePrice');
    if (no_of_order_start > 1 && no_of_order_start <= document.getElementById('available_items').value) {
        document.getElementById('salePrice').value = singlePrice;
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



