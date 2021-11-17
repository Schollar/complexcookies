

function show_selection(items) {

    var selected_cookie = Cookies.get('selected_item');
    var food_name = document.createElement('h1');
    var selected_data = JSON.parse(selected_cookie);
    food_name.innerText = `You have chosen ${items.name}`

    var selected_image = document.createElement('img');
    selected_image.src = items.img_src;

    var selected_description = document.createElement('p');
    selected_description.innerText = items.description;

    var selected_price = document.createElement('h3');
    selected_price.innerText = items.price;

    show_cookie.appendChild(food_name);
    show_cookie.appendChild(selected_description);
    show_cookie.appendChild(selected_image);
    show_cookie.appendChild(selected_price);
}

function clear_cookies() {
    Cookies.remove('selected_item');
}
var parent_container = document.getElementById('selection_container');
var show_cookie = document.createElement('article');
parent_container.appendChild(show_cookie);



var checkout_items = JSON.parse(Cookies.get('selected_item'))

if (checkout_items.length === 0) {
    console.log('Null')
    var food_name = document.createElement('h1');
    food_name.innerText = `You need to choose an item!`;
    parent_container.appendChild(food_name);
} else {
    for (var i = 0; i < checkout_items.length; i++) {
        show_selection(checkout_items[i]);
        // var empty_array = Cookies.get(JSON.stringify('selected_item'))
    }
}


