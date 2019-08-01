'use strict';

var app = {
  title: 'Indecision app',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  };
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var getOptions = function getOptions(options) {
  if (options.length > 0) {
    var items = options.map(function (option, index) {
      return React.createElement(
        'li',
        { key: index },
        option
      );
    });
    return items;
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNumber];
  alert(option);
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      'h4',
      null,
      app.subTitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? "Here are the options" : "No options"
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should i do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Removel all'
    ),
    app.options.length > 0 && React.createElement(
      'ol',
      null,
      getOptions(app.options)
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
