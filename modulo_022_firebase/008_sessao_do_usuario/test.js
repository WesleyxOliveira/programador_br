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

// let newUserEmail = 'novoteste@teste.com';
// let newUserPassword = '123abc';

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
//     .then(user => {
//         console.log(user);
//     }).catch(err => {
//         console.log(err);
//     });

let auth = firebase.auth();

function login() {
    let userMail = 'novoteste@teste.com';
    let userPassword = '123abc';

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(() => {
        auth.signInWithEmailAndPassword(userMail, userPassword).then(loggedUser => {
            // console.log(auth.currentUser);
        })
            .catch(error => {
                console.log(error);
            });
    }).catch(error => {
        console.log(error);
    })
}

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    } else {
        console.log('Ninguém logado!');
    }
});

function logout() {
    auth.signOut().then(() => {
        console.log('Usuário foi deslogado!');
    }).catch(error => {
        console.log(error);
    });
}

// setTimeout(login(), 2000);