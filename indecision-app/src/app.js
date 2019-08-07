import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// class OldSyntax {
//   constructor() {
//     this.name = "Richard";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

/*------class NewSyntax is the same as the class OldSyntax but webpack transforms NewSyntax------*/

// class NewSyntax {
//   name = "Debbie";

//   getNewGreeting = () => {
//     return `Hi my name is ${this.name}`
//   }
// }

// const newSyntax = new NewSyntax();
// const getNewGreeting = newSyntax.getNewGreeting;
// console.log(getNewGreeting())