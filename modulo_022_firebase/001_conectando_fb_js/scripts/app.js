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

let db = firebase.firestore()

firebase.firestore().settings({
    experimentalForceLongPolling: true,
    merge: true,
});

// // let todos os dados de uma coleção
// db.collection('turmaA').get()
//     .then((snapshot) => {
//         snapshot.forEach(doc => {
//             let aluno = doc.data();

//             console.log(aluno.nome);
//         });
//     });

let docRef = db.collection('turmaA').doc('MeUMpwdoSRyV7uDuEQtW');

docRef.get().then((doc) => {
    let aluno = doc.data();
    console.log(aluno.nome);
})