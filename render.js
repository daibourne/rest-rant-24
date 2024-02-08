const Path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const render = (viewName, props) => {
    const componentPath = join(__dirname, 'views', viewName);
    const Component = require(componentPath);

    return renderToString(createElement(Component, props));
};

module.exports = render;