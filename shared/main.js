import {MainPage} from "../pages/main-component.js";
import {FrontendPage} from "../pages/frontend-component.js";
import {BackendPage} from "../pages/backend-component.js";
import React from "./react.js";

const routing = {
    '/main': MainPage,
    '/frontend': FrontendPage,
    '/backend': BackendPage
}

const allLinks = document.querySelectorAll('a')
allLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState({}, '', el.href);
    });
});

navigation.addEventListener('currententrychange', () => {
    render();
});

const render = () => {
    const PageComponent = routing[window.location.pathname];
    React.render(PageComponent, document.getElementById("root"));
}

render();
