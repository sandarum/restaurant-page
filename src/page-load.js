import './style.css';

export function layout(){
    const element = document.createElement('div');

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const main = document.createElement('main');
    const container = document.createElement('div');
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');

    const liData = ['Home', 'Menu', 'Contact'];

    liData.forEach(li => {
        const liElement = document.createElement('li');
        liElement.textContent = li;
        ul.appendChild(liElement);
    });

    nav.appendChild(ul);

    container.classList.add('container');
    main.appendChild(container);

    footerText.textContent = '© 2023 Sandarum. All rights reserved.';
    footer.appendChild(footerText);

    element.appendChild(nav);
    element.appendChild(main);
    element.appendChild(footer);

    element.classList.add('wrapper');
    
    return element;
    
}