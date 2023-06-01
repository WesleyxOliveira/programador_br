const firebaseConfig = {
    apiKey: "AIzaSyCBDxGksyLqTiB7PwcT9T3QqYQnevLKv5g",
    authDomain: "colegio-e74c5.firebaseapp.com",
    projectId: "colegio-e74c5",
    storageBucket: "colegio-e74c5.appspot.com",
    messagingSenderId: "1064292818765",
    appId: "1:1064292818765:web:828ac37f0c091315346104",
    measurementId: "G-N7V9YFT4VV"
};

firebase.initializeApp(firebaseConfig);

const TURMA = 'turma';

let db = firebase.firestore()

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

db.collection(TURMA).doc('novoAluno').update({
    nome: 'Mariana',
    sobrenome: 'De souza Oliveira',
    notas: [10, 10, 8.0, 10],
}).then((doc) => {
    console.log('Documento inserido com sucesso!');
}).catch(err => {
    console.log(err);
});