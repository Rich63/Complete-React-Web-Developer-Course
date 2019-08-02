const app = {
  title: 'Indecision app',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  };
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const getOptions = (options) => {
  if(options.length > 0) {        
    const items = options.map((option, index) => {            
       return <li key={index}>{option}</li>;        
    });        
    return items;    
  } 
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subTitle && <h4>{ app.subTitle }</h4>}
      <p>{ app.options.length > 0 ? "Here are the options" : "No options" }</p>
      <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>What should i do?</button>
      <button onClick={ onRemoveAll }>Removel all</button>
      { app.options.length > 0 && <ol>{getOptions(app.options)}</ol> }
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot)
};

render();