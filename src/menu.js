import './style.css';

export function menuLayout() {
    const element = document.createElement('div');
    const heading = document.createElement('h2');

    heading.textContent = "Menu";
    element.appendChild(heading);
    element.classList.add('inner');

    const menuItems = [
        {
            name: "Margherita",
            desc: "Classic pizza with tomato, mozzarella, and basil."
        },
        {
            name: "Marinara",
            desc: "Simple pizza with tomato, garlic, oregano, and extra virgin olive oil."
        },
        {
            name: "Prosciutto e funghi",
            desc: "Pizza topped with prosciutto and mushrooms."
        },
        {
            name: "Quattro Stagioni",
            desc: "Four-seasons pizza with diverse toppings representing each season."
        },
        {
            name: "Capricciosa",
            desc: "Artichokes, ham, mushrooms, olives, and tomato sauce on this flavorful pizza."
        },
        {
            name: "Quattro Formaggi",
            desc: "A delightful blend of four cheeses on this cheesy pizza."
        },
        {
            name: "Diavola", 
            desc: "Spicy pizza featuring hot peppers and spicy salami."
        },
        {
            name: "Frutti di Mare",
            desc: "Seafood lovers' pizza with an array of delicious seafood toppings."
        },

    ];

    menuItems.forEach(item => {
        const itemContainer = document.createElement('div');
        const itemName = document.createElement('h3');
        const itemDescription = document.createElement('p');
        itemName.textContent = item.name;
        itemDescription.textContent = item.desc;
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.classList.add('itemContainer');
        element.appendChild(itemContainer);
    });

    return element;
}