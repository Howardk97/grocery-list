// Create variables to hold shopping form and user input for items
var shoppingForm = $('#shopping-form');
var shoppingList = $('#grocery-list');
// console.log(shoppingForm);
// console.log(shoppingList);

function groceryList(event) {
    event.preventDefault();
    // console.log("hi");

    var shoppingInput = $('input[name="shopping-input"]').val();
    console.log(shoppingInput);

    var itemList = $('<li>');
    // console.log(itemList);
    shoppingList.append(itemList);
    itemList.append(shoppingInput);
    console.log(shoppingList);

    // itemList.append(shoppingInput);
}

shoppingForm.on("submit", groceryList);



