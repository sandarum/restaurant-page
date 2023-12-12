import './style.css';

export function homeLayout() {
    const element = document.createElement('div');
    const heading = document.createElement('h1');
    const description = document.createElement('p');

    heading.textContent = "Pizzería Mediterránea";
    description.textContent = "Immerse yourself in the rich heritage of Italian culinary craftsmanship at Pizzería Mediterránea, where every authentic pizza is made with passion and expertise. Since our establishment in 1940, we've been dedicated to crafting the finest Italian pizzas using time-honored recipes and premium ingredients. Join us for an authentic and delightful dining experience, celebrating the essence of Italy in every bite."

    element.appendChild(heading);
    element.appendChild(description);
    element.classList.add('inner');

    return element;
}