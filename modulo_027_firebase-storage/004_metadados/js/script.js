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

  // Isso cria um novo metadado para ser passado como parâmetro para o método updateMetadata(), e depois que for aplicado no método updateMetadata(), o contentType que era ("application/octet-stream") passará a ser (arquivo.txt);
  const newMetaData = {
    contentType: 'arquivo.txt',
  }

  // Isso vai retornar os metadados do arquivo (arquivo.txt).
  ref.child('arquivo.txt').updateMetadata(newMetaData).then(metadata => {
    console.log(metadata);
  })
  .catch(error => {
    console.log(error)
  })

  



  









