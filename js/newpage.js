// This is the function that will clear the item once pressed.
function clear_item(e, clicked_tag) {
    // turning our e string into a JS object
    var e_object = JSON.parse(e)
    // Looping through and checking if our argument ojbect name matches our checkout_items object
    for (var i = 0; i < checkout_items.length; i++) {
        if (e_object.name === checkout_items[i].name) {
            // removing selected object from the array, and then grabbing the parent of the button and removing the whole article
            checkout_items.splice(i, 1);
            clicked_tag.parentNode.remove();
        }
    }
    // Setting our cookie to the new string with the removed items no longer in it
    Cookies.set("selected_item", JSON.stringify(checkout_items));
}


// Function which shows the selected items on our page.
function show_selection(items) {

    // Here we get our cookie and store it into a variable
    var selected_cookie = Cookies.get('selected_item');
    // We Create the title and set the inner text to our items name
    var food_name = document.createElement('h1');
    food_name.innerText = `You have chosen ${items.name}`
    // Same here, create our image element and set its source equal to the argument items source 
    var selected_image = document.createElement('img');
    selected_image.src = items.img_src;
    // Creating the description and setting the inner text to the argument items description
    var selected_description = document.createElement('p');
    selected_description.innerText = items.description;
    // Finnally we create our price element and set it it argument item price
    var selected_price = document.createElement('h3');
    selected_price.innerText = items.price;
    //Going to create a button on each item that will delete item from cart
    var clear_item_button = document.createElement('button')
    // We give the button some innerText
    clear_item_button.innerText = "Remove Item From Cart"
    // Give the button an onclick event to call the clear_item function we are making
    clear_item_button.setAttribute('onclick', `clear_item('${JSON.stringify(items)}', this)`)
    //  Here we append the elements created to their parent
    // Getting our parent container storing it in a variable
    var parent_container = document.getElementById('selection_container');
    // Creating our menu card article element
    var show_cookie = document.createElement('article');
    // Appending our article to the parent so it will show up in browser
    show_cookie.classList.add("article_container");
    // Appending the menu item card elements to the parent so the card shows up
    parent_container.appendChild(show_cookie);
    show_cookie.appendChild(food_name);
    show_cookie.appendChild(selected_description);
    show_cookie.appendChild(selected_image);
    show_cookie.appendChild(selected_price);
    show_cookie.appendChild(clear_item_button);
}
// Function which removes the cookies. Its called when clear cart button is pressed
function clear_cookies() {
    Cookies.remove('selected_item');
}


// Getting our cookie and parsing it to a JS Object
var checkout_items = JSON.parse(Cookies.get('selected_item'))
// Checking to see if the cookie length is 0, if it is, user did not make a selection and a error message shows up telling them they need to choose an item
if (checkout_items.length === 0) {
    var parent_container = document.getElementById('selection_container');
    var food_name = document.createElement('h1');
    food_name.innerText = `You need to choose an item!`;
    parent_container.appendChild(food_name);
    // If the cookie length is more than 0 it means a selection was made so it will go into my loop and show selected items on the selection page.
} else {
    for (var i = 0; i < checkout_items.length; i++) {

        show_selection(checkout_items[i]);
    }
}


