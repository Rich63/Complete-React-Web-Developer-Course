const App = {
  title: 'Indecision App',
  subTitle: 'Some information!'
};

const template = (
  <div>
    <h1>Title: { App.title }</h1>
    <h4>subTitle: { App.subTitle}</h4>
  </div>
);

let count=0;

const onIncrease = () => {
  count++;
  renderCountApp();
}

const onDecrease = () => {
  count--;
  renderCountApp();
}

const onReset = () => {
  count=0;
  renderCountApp();
}

var appRoot = document.getElementById("app");

const renderCountApp = () => {

  const template2 = (
    <div>
      <h1>Count: { count }</h1>
      <button onClick={ onIncrease }>+</button>
      <button onClick={ onDecrease }>-</button>
      <button onClick={ onReset }>reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot)
}

renderCountApp();