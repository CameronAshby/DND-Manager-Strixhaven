import itemData from './inventoryData.json' assert { type: "json"};

function buildInventory() {
    var bagOfHoldingItems = itemData.bag_of_holding.items;

    for(let i=0; i<bagOfHoldingItems.length; i++) {
        $('.bagItems').append(
            `<div class='item'>
                <div id=itemName`+bagOfHoldingItems[i].id+` class='itemName'>`+bagOfHoldingItems[i].name+`</div>
                <div id=itemDescription`+bagOfHoldingItems[i].id+` class='itemDescription'>`+bagOfHoldingItems[i].description+`</div>
                <div class='itemQuantityContainer'>
                    <button id=addButton`+bagOfHoldingItems[i].id+` type='button' class='addButton'>+</button>
                        <div id=itemQuantity`+bagOfHoldingItems[i].id+` class='itemQuantity'>`+bagOfHoldingItems[i].quantity+`</div>
                    <button id=minusButton`+bagOfHoldingItems[i].id+` type='button' class='minusButton'>-</button>
                </div>
            </div>`
        );
    }

    for(let i=0; i<bagOfHoldingItems.length; i++) {
        $('#addButton'+[i]).on('click',() => {
            addQuantity(i);
        });
        $('#minusButton'+[i]).on('click',() => {
            minusQuantity(i);
        });
    }
}

function addItem() {

}

function removeItem() {

}

function addQuantity(itemId) {
    itemData.bag_of_holding.items[itemId].quantity++;
    $('#itemQuantity'+itemId).html(itemData.bag_of_holding.items[itemId].quantity);
}

function minusQuantity(itemId) {
    itemData.bag_of_holding.items[itemId].quantity--;
    $('#itemQuantity'+itemId).html(itemData.bag_of_holding.items[itemId].quantity);
}

window.onload = buildInventory;