const firebaseConfig = {
    apiKey: "AIzaSyCBDxGksyLqTiB7PwcT9T3QqYQnevLKv5g",
    authDomain: "colegio-e74c5.firebaseapp.com",
    projectId: "colegio-e74c5",
    storageBucket: "colegio-e74c5.appspot.com",
    messagingSenderId: "1064292818765",
    appId: "1:1064292818765:web:75d727e9ba7ab176346104",
    measurementId: "G-TYWEXNXD23"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const TURMA = 'turmaA';

// Adicionando documento com id automatico
// db.collection(TURMA).add({
//     nome: 'Marcos',
//     sobrenome: 'Oliveira',
//     notas: [10, 10, 8.0]
// }).then((doc) => {
//     console.log('Documentos inseridos com sucesso!');
// }).catch(err => {
//     console.log(err);
// });

//Adicionando novo documento com novo definido 
// db.collection(TURMA).doc('novoAluno').set({
//     nome: 'Mariana',
//     sobrenome: 'De Souza Oliveira',
//     notas: [7.0, 8.0, 8.0]
// }).then((doc) => {
//     console.log('Documento adicionado com sucesso!');
// }).catch(err => {
//     console.log(err);
// });

// db.collection(TURMA).doc('novoAluno').update({
//     nome: 'Mariana',
//     sobrenome: 'De souza Oliveira',
//     notas: [10, 10, 8.0, 10],
// }).then((doc) => {
//     console.log('Documento inserido com sucesso!');
// }).catch(err => {
//     console.log(err);
// });

//Atualizando em tempo real(onSnapshot) para a coleção inteira
// db.collection('users').onSnapshot(snapshot => {
//     snapshot.forEach(doc => {
//         let user = doc.data();

//         console.log(user.fname, user.lname);
//         console.log('Idade: ', user.age);
//         console.log('');
//     })
// });

//Atualizando em tempo real (onSnapshot) para um único documento
// let docRef = db.collection('users').doc('Juliana');


// docRef.onSnapshot(doc => {
   
//     console.log(doc.data());
// });

// ---------------------------

// Apagando um campo de um documento
// db.collection(TURMA).doc('wesley').update({
//     cidades: firebase.firestore.FieldValue.delete()
// })

// ----------------------------------

db.collection(TURMA).doc('José').delete().then(() => {
    console.log('Documento deletado com sucesso!');
}).catch(err => {
    console.log(err);
})