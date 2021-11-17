Cookies.set("selected_item", JSON.stringify([]));

function get_menu_item(item_json) {

    var item = JSON.parse(item_json);
    var checkout_menu = JSON.parse(Cookies.get("selected_item"));
    checkout_menu.push(item);
    Cookies.set("selected_item", JSON.stringify(checkout_menu));
}

function show_item(object) {


    var parent = document.getElementById('menu_parent');
    var menu_card = document.createElement('article');

    var item_name = document.createElement('h1');
    item_name.innerText = object.name;
    menu_card.appendChild(item_name);

    var description = document.createElement('p');
    description.innerText = object.description;
    menu_card.appendChild(description);

    var img = document.createElement('img');
    img.src = object.img_src;
    menu_card.appendChild(img);

    var price = document.createElement('h3');
    price.innerText = object.price;
    menu_card.appendChild(price);

    parent.appendChild(menu_card);
    var stringified_menu = JSON.stringify(object);
    menu_card.setAttribute(`onclick`, `get_menu_item('${stringified_menu}')`);

}

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

for (var i = 0; i < menu_items.length; i++) {
    show_item(menu_items[i]);
}