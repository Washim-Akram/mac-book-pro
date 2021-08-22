// Memory part

document.getElementById('8gb-memory-button').addEventListener('click', function(){

    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0;
    let extraMemoryCostText = extraMemoryCost.innerText;
    let totalExtraMemoryCost = parseFloat(extraMemoryCostText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalExtraMemoryCost;

    totalPrice.innerText = totalCost;


    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalExtraMemoryCost;
    total.innerText = newBalanceTotal;

});

document.getElementById('16gb-memory-button').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 180;
    let extraMemoryCostText = extraMemoryCost.innerText;
    let totalExtraMemoryCost = parseFloat(extraMemoryCostText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalExtraMemoryCost;

    totalPrice.innerText = totalCost;

    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalExtraMemoryCost;
    total.innerText = newBalanceTotal;

});

// Storage part
document.getElementById('256gb-ssd-button').addEventListener('click', function(){
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 0;
    let extraStorageCostText = extraStorageCost.innerText;
    let totalExtraStorageCost = parseFloat(extraStorageCostText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalExtraStorageCost;

    totalPrice.innerText = totalCost;

    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalExtraStorageCost;
    total.innerText = newBalanceTotal;

});

document.getElementById('512gb-ssd-button').addEventListener('click', function(){
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 100;
    let extraStorageCostText = extraStorageCost.innerText;
    let totalExtraStorageCost = parseFloat(extraStorageCostText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalExtraStorageCost;

    totalPrice.innerText = totalCost;


    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalExtraStorageCost;
    total.innerText = newBalanceTotal;
});

document.getElementById('1tb-ssd-button').addEventListener('click', function(){
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 180;
    let extraStorageCostText = extraStorageCost.innerText;
    let totalExtraStorageCost = parseFloat(extraStorageCostText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalExtraStorageCost;

    totalPrice.innerText = totalCost;


    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalExtraStorageCost;
    total.innerText = newBalanceTotal;
});

// Delivery Charge/shipping cost

document.getElementById('August-25-button').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 0;
    let deliveryChargeText = deliveryCharge.innerText;
    let totalDeliveryCharge = parseFloat(deliveryChargeText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalDeliveryCharge;

    totalPrice.innerText = totalCost;


    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalDeliveryCharge;
    total.innerText = newBalanceTotal;


});

document.getElementById('August-21-button').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 20;
    let deliveryChargeText = deliveryCharge.innerText;
    let totalDeliveryCharge = parseFloat(deliveryChargeText);

    const totalPrice = document.getElementById('total-price');
    let totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);
    const totalCost = totalPriceAmount + totalDeliveryCharge;

    totalPrice.innerText = totalCost;



    const total = document.getElementById('total');
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    const newBalanceTotal = previousTotal + totalDeliveryCharge;
    total.innerText = newBalanceTotal;
});

//Add Promo Code 
document.getElementById('promo-code-button').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promo-code-input');
    let total = document.getElementById('total');
    let totalText = total.innerText;
    let previousTotal = parseFloat(totalText);
    if(promoCodeInput.value == 'stevekaku'){
        previousTotal = previousTotal / 20;
    }

    promoCodeInput.value = '';
})