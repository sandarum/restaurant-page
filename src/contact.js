import './style.css';

export function contactLayout() {
    const element = document.createElement('div');
    const heading = document.createElement('h2');
    const phoneNum = document.createElement('h3');
    const address = document.createElement('p');

    heading.textContent = "Contact Us";
    phoneNum.textContent = "(123) 456-7890"
    address.textContent = "Via Santa Teresa 150, Sarteano, Siena 53047"

    element.appendChild(heading);
    element.appendChild(phoneNum);
    element.appendChild(address);
    element.classList.add('inner');

    return element;
}