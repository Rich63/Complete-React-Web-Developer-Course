console.log("App.js is running");

// const userName = 'Richard Orta';
// const age = 56;
// const located= 'Bleiswijk, Netherlands';

const user = {
  name: 'Richard.orta',
  age: 56,
  location: 'Bleiwsijk, the Netherlands'
};

// var template = (
//   <div>
//     <h1>Username: { userName }</h1>
//     <p>Age: { age }</p>
//     <p>Located: { located }</p>
//   </div>
// );

var template2 = (
  <div>
    <h1>Username: { user.name }</h1>
    <p>Age: { user.age }</p>
    <p>Location: { user.location }</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot)