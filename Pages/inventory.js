import itemData from './inventoryData.json' assert { type: "json"};

function buildInventory() {
    var bagOfHoldingItems = itemData.bag_of_holding.items;

    for(let i=0; i<bagOfHoldingItems.length; i++) {
        $('.bagItems').append(
            `<div class='item'>
                <div id=itemName`+bagOfHoldingItems[i].id+` class='itemName'>`+bagOfHoldingItems[i].name+`</div>
                <div id=itemDescription`+bagOfHoldingItems[i].id+` class='itemDescription'>`+bagOfHoldingItems[i].description+`</div>
                <div class='itemQuantity'>
                    <button id=addButton`+bagOfHoldingItems[i].id+` type='button' class='addButton'>+</button>
                    `+'&nbsp&nbsp'+bagOfHoldingItems[i].quantity+'&nbsp&nbsp'+`
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
    console.log('adding'+itemId);
}

function minusQuantity(itemId) {
    console.log('subtracting'+itemId);
}

window.onload = buildInventory;