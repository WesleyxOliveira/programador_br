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

  /* Criando referência para pasta raiz 

  const ref = storage.ref();

  */

  /* Cria referência para a pasta images que esta dentro da pasta raiz */
  // const ref = storage.ref('images');

  // ref.listAll().then(res => {
  //   res.items[0].getDownloadURL().then(url => {
  //     console.log(url);
  //   })
  // })


  // Referência para arquivo com caminho completo
  const imagesArquivos = storage.ref('images/DEPENDE.png');


  imagesArquivos.getDownloadURL().then(url => {
    console.log(url);
  })


