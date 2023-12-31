const firebaseConfig = {
    apiKey: "AIzaSyASXEa5HsKvtmS8T08yMvXw-TMv0Iac7g4",
    authDomain: "cursodevweb-7c15b.firebaseapp.com",
    projectId: "cursodevweb-7c15b",
    storageBucket: "cursodevweb-7c15b.appspot.com",
    messagingSenderId: "679842901906",
    appId: "1:679842901906:web:84a61bda95911b86d85b4b"
  };
  
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  // Referência a pasta images que está dentro do db
  const ref = storage.ref('/images');

  const fileInput = document.getElementById('file-input');

  fileInput.addEventListener('change', e => {
    const file = e.target.files[0]

    ref.child(file.name).put(file).then(snapshot => {
      console.log(snapshot);
    })
  })




  









