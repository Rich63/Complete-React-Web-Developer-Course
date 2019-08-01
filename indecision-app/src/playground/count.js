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

const appRoot = document.getElementById("app");

const renderCountApp = () => {

  const template2 = (
    <div className="ui container">
      <h1>Count: { count }</h1>
      <button className="ui button green" onClick={ onIncrease }>+</button>
      <button className="ui button red" onClick={ onDecrease }>-</button>
      <button className="ui button grey" onClick={ onReset }>reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot)
}

renderCountApp();