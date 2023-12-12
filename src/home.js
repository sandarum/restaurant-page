import './style.css';
import Margherita_Pizza from './Margherita_Pizza.jpg'

export function homeLayout() {
    const element = document.createElement('div');
    const heading = document.createElement('h1');
    const description = document.createElement('p');

    heading.textContent = "Pizzería Mediterránea";
    description.textContent = "Indulge in authentic Italian pizzas at Pizzería Mediterránea since 1940. Crafted with passion and premium ingredients, our pizzas offer a delightful taste of Italy in every bite. Join us for a true Italian dining experience."

    const homeImage = new Image();
    homeImage.src = Margherita_Pizza;

    element.appendChild(heading);
    element.appendChild(description);
    element.appendChild(homeImage);

    homeImage.classList.add('home');
    description.classList.add('home');
    element.classList.add('inner');

    return element;
}