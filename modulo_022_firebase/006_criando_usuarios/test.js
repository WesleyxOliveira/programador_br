const firebaseConfig = {
    apiKey: "AIzaSyAfeqwNhzN2AlvgsrJXYAjn9YMwngUqgJ8",
    authDomain: "teste-feee9.firebaseapp.com",
    projectId: "teste-feee9",
    storageBucket: "teste-feee9.appspot.com",
    messagingSenderId: "768801044615",
    appId: "1:768801044615:web:81a8926b359bb41e55a022",
    measurementId: "G-PFE1Y0N73M"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  let newUserEmail = 'novoteste@teste.com';
  let newUserPassword = '123abc';

  let auth = firebase.auth();

  auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then(user => {
        console.log(user);
    }).catch(err => {
        console.log(err);
    });