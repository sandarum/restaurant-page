import { layout } from "./page-load";
import { homeLayout } from "./home";
import { contactLayout } from "./contact";
import { menuLayout } from "./menu";

const content = document.querySelector('#content');
content.appendChild(layout());

const container = document.querySelector('.container');
//container.appendChild(homeLayout());
//container.appendChild(contactLayout());
container.appendChild(menuLayout());