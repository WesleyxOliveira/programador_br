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

  db.collection('lista').get().then(snapshot => {
    snapshot.forEach(item => {
        console.log(item.data());
    })
  }).catch(error => {
    console.log(error);
  })