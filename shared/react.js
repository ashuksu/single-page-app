const React = {
    render(Component, rootElement) {
        rootElement.innerHTML = Component();
    }
}

export default React;