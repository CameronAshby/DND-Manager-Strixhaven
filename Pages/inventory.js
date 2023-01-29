import itemData from './inventoryData.json' assert { type: "json"};

function buildInventory() {
    var bagOfHoldingItems = itemData.bag_of_holding.items;
    bagOfHoldingItems.forEach((item) => {
        $('.bagItems').append(
            `<div class='item'>
                <div class='itemName'>`+item.name+`</div>
                <div class='itemDescription'>`+item.description+`</div>
                <div class='itemQuantity'>
                    <button type='button' class='addButton'>+</button>
                    `+'&nbsp&nbsp'+item.quantity+'&nbsp&nbsp'+`
                    <button type='button' class='minusButton'>-</button>
                </div>
            </div>`
        );
    })
}

function addItem() {

}

function removeItem() {

}

window.onload = buildInventory;