import {MainPage} from "../pages/main-component.js";
import {FrontendPage} from "../pages/frontend-component.js";
import {BackendPage} from "../pages/backend-component.js";
import React from "./react.js";

const routing = {
    'main': MainPage,
    'frontend': FrontendPage,
    'backend': BackendPage
}


document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', () => {
        const PageComponent = routing[el.dataset.target];
        React.render(PageComponent, document.getElementById("root"));
    });
});

React.render(MainPage, document.getElementById("root"));