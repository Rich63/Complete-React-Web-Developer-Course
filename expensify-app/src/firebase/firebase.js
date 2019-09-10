import * as firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyADoenx7216OqVsQoiiAtTlA7f5lYko0o4",
  authDomain: "expensify-9cc9e.firebaseapp.com",
  databaseURL: "https://expensify-9cc9e.firebaseio.com",
  projectId: "expensify-9cc9e",
  storageBucket: "expensify-9cc9e.appspot.com",
  messagingSenderId: "574347211331",
  appId: "1:574347211331:web:f69f77a9ca7402c4d09af6"
};

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database()

// child_removed
database
  .ref('expenses')
  .on('child_removed', (snapshot) => {
    console.log('Removed item: ', snapshot.key, snapshot.val())
  })

// child_changed
database
  .ref('expenses')
  .on('child_changed', (snapshot) => {
    console.log('Item changed: ', snapshot.key, snapshot.val())
  })

// child_added
database
  .ref('expenses')
  .on('child_added', (snapshot) => {
    console.log('Item added: ', snapshot.key, snapshot.val())
  })

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database
//   .ref('expenses')
//   .push({
//     description: 'collected receives',
//     note: '',
//     amount: 68.73,
//     createdAt: 1568038976583
//   })

// database.ref('notes/-LoLMGNQ9Lbmq_nz18KL').remove()

// database.ref('notes/-LoLMGNQ9Lbmq_nz18KL').update({
//   body: 'React, React native, Python, Java'
// })

// database.ref().set({
//   name: 'Richard',
//   age: 56,
//   stresslevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Finalist',
//     location: {
//       street: 'Stationsplein',
//       streetNumber: 45,
//       postcode: '3013AK',
//       city: 'Rotterdam',
//       country: 'Netherlands'
//     }
//   },
//   location: {
//     street: "Hazenweg",
//     streetNumber: 67,
//     postcode: "2665CZ",
//     city: "Bleiswijk",
//     country: "Netherlands"
//   }
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((error) => {
//   console.log('Something went wrong saving the data!', error)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   }, (e) => {
//     console.log('Error fetching data!!!', e)
//   })

// setTimeout(() => {
//   database
//     .ref('age')
//     .set(45)
// }, 3000);
