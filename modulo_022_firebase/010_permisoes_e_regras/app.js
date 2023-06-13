const firebaseConfig = {
  apiKey: "AIzaSyC3shIgSC_ayjb5FeyKfrTx692MRMFz9xY",
  authDomain: "teste2-f7381.firebaseapp.com",
  projectId: "teste2-f7381",
  storageBucket: "teste2-f7381.appspot.com",
  messagingSenderId: "130202986954",
  appId: "1:130202986954:web:a846e4c58410f1c837c733"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

function createUser(userMail, userPassword) {
  auth.createUserWithEmailAndPassword(userMail, userPassword).then((user) => {
    console.log('Usuário criado com sucesso!');
  }).catch(error => {
    console.log(error);
  })
}

function ler() {
  db.collection('lista').get().then(snapshot => {
    snapshot.forEach(item => {
      console.log(item.data());
    })
  }).catch(error => {
    console.log(error);
  })
}

function escrever() {
  db.collection('lista')
    .add({item: 'limão'})
    .then((doc) => {
      console.log(doc);
    })
    .catch(error => {
      console.log(error);
    })
}

// createUser('teste@teste.com', '123abc');

function logar(uMail, uPassword) {
  auth.signInWithEmailAndPassword('wesley@gmail.com', '123abc').then(user => {
    console.log('Logado!');
  }).catch(error => {
    console.log(error);
  })
}

// logar('teste@teste.com', '123abc');
// escrever();

// escrever();