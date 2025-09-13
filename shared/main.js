import {MainPage} from "../pages/main-component.js";
import {FrontendPage} from "../pages/frontend-component.js";
import {BackendPage} from "../pages/backend-component.js";
import React from "./react.js";

const routing = {
    '#main': MainPage,
    '#frontend': FrontendPage,
    '#backend': BackendPage
}
window.addEventListener('hashchange', (e) => {
    const PageComponent = routing[location.hash];
    React.render(PageComponent, document.getElementById("root"));
});

const PageComponent = routing[location.hash];

React.render(PageComponent ?? MainPage, document.getElementById("root"));