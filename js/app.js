// setting our cookie to an empty array in a string format
Cookies.set("selected_item", JSON.stringify([]));

// the function that runs when an item is selected
function get_menu_item(item_json) {
    // Turning our input arg into an object
    var item = JSON.parse(item_json);
    // getting our cookie and storing it into a variable as an object
    var checkout_menu = JSON.parse(Cookies.get("selected_item"));
    // pushing the selected item to the cookie array of objects
    checkout_menu.push(item);
    // setting cookie to array just made, and converting it back to a json string
    Cookies.set("selected_item", JSON.stringify(checkout_menu));
}


function show_item(object) {

    // Getting the parent element and then creating our menu card element and storing both into variables
    var parent = document.getElementById('menu_parent');
    var menu_card = document.createElement('article');
    // Creating our item name element and inserting our ojbects name to the text, then appending the element to its parent
    var item_name = document.createElement('h1');
    item_name.innerText = object.name;
    menu_card.appendChild(item_name);
    // Same thing here with our object description
    var description = document.createElement('p');
    description.innerText = object.description;
    menu_card.appendChild(description);
    // Again with our image
    var img = document.createElement('img');
    img.src = object.img_src;
    menu_card.appendChild(img);
    // Finally once more with our price
    var price = document.createElement('h3');
    price.innerText = object.price;
    menu_card.appendChild(price);
    // We append the menu card to its parent so it shows up on screen
    parent.appendChild(menu_card);
    // Here we set our object to a json string so we can pass it through our get menu item function when the menu card is clicked
    var stringified_menu = JSON.stringify(object);
    menu_card.setAttribute(`onclick`, `get_menu_item('${stringified_menu}')`);

}
// Our array of objects menu items
var menu_items = [
    {
        name: "HotDog",
        description: "You eat it and it taste good",
        img_src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        price: 24
    },

    {
        name: "Burger",
        description: "You eat it and it taste good",
        img_src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        price: 89
    },

    {
        name: "Fries",
        description: "You eat it and it taste good",
        img_src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        price: 78
    }
];
// Loop that goes through and calls the show item function to display the items on screen.
for (var i = 0; i < menu_items.length; i++) {
    show_item(menu_items[i]);
}