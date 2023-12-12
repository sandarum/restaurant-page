import { layout } from "./page-load";
import { homeLayout } from "./home";

const content = document.querySelector('#content');
content.appendChild(layout());

const container = document.querySelector('.container');
container.appendChild(homeLayout());