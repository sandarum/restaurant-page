import './style.css';
import restaurantImage from './restaurant.jpeg'

export function contactLayout() {
    const element = document.createElement('div');
    const heading = document.createElement('h2');
    const phoneNum = document.createElement('h3');
    const address = document.createElement('p');

    heading.textContent = "Contact Us";
    phoneNum.textContent = "(123) 456-7890"
    address.textContent = "Via Santa Teresa 150, Sarteano, Siena 53047"

    const contactImage = new Image();
    contactImage.src = restaurantImage;

    element.appendChild(heading);
    element.appendChild(phoneNum);
    element.appendChild(address);
    element.appendChild(contactImage);

    contactImage.classList.add('contact');
    element.classList.add('inner');

    return element;
}