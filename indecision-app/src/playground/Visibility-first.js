
const app = {
  title: 'Visability Toggle',
  detail: 'Hey. These are some details you can now see!',
  show: false
};

const toggleVisibility = () => {
  app.show = !app.show; // toggle from false to true and true to false
  render(); // couse this is not imported React rerender has to be called
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div className="ui container">
      <h1>{ app.title }</h1>
      <button onClick={ toggleVisibility }>
        { (app.show) ? 'Hide details' : 'Show details' }
      </button>
      {/* { (app.show) ? <p><br />{ app.detail }</p> : null } */}
      {app.show && (
        <div>
          <br />
          <p>{ app.detail }</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot)
};

render();