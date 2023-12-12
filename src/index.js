import { layout } from "./page-load";
import { homeLayout } from "./home";
import { contactLayout } from "./contact";
import { menuLayout } from "./menu";

const content = document.querySelector('#content');
content.appendChild(layout());

const container = document.querySelector('.container');
container.appendChild(homeLayout());
//container.appendChild(contactLayout());
// container.appendChild(menuLayout());

const buttons = document.querySelectorAll('nav li');
buttons.forEach(button => {
    button.addEventListener( 'click', () => {
        clearLayout();
        handleClick(button.textContent);
    });
});


function handleClick(button){
    switch(button){
        case "Home": container.appendChild(homeLayout());
        break;
        case "Menu": container.appendChild(menuLayout());
        break;
        case "Contact": container.appendChild(contactLayout());
        break;
    }
}

function clearLayout(){
    const element = document.querySelector('.container');
    element.removeChild(element.children[0]);
}