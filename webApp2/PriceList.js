let products = [];
let prices = [];

function addProduct (productName) {
    products.push(productName)
    prices.push(0);
}

function removeProduct (productName) {
    let doesProductExist;
    for (item of products) {
        if (item == productName) {
            doesProductExist = true;
        }
    }
    if (doesProductExist == true) {
        let index = products.indexOf(productName);
        products.splice(index, 1, "")
        prices.splice(index, 1, "")

    }
}

function changePrice (arrayIndex, price) {
    let isValid;
    for (item in prices) {
        if (prices.indexOf(item) == arrayIndex) {
            isValid = true;
        }
    }
    prices.splice(arrayIndex, 1, price);
}