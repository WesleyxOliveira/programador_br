const firebaseConfig = {
    apiKey: "AIzaSyASXEa5HsKvtmS8T08yMvXw-TMv0Iac7g4",
    authDomain: "cursodevweb-7c15b.firebaseapp.com",
    projectId: "cursodevweb-7c15b",
    storageBucket: "cursodevweb-7c15b.appspot.com",
    messagingSenderId: "679842901906",
    appId: "1:679842901906:web:84a61bda95911b86d85b4b"
  };
  
  firebase.initializeApp(firebaseConfig);

  // 1 - Criar um objeto storage
  const storage = firebase.storage();

  // 2 - Criar uma referência, nesse caso para uma pasta chamada images, mas se não passo nada como parâmetro, ficaria sendo uma referência para a pasta raiz.
  const ref = storage.ref('/images');

  // 3 - Esse método .listAll() é um método para pastas e retorna os arquivos dentro desta pasta. Existem método para pastas e para arquivos.

  ref.listAll().then(res => {
    console.log(res.items);
  })

  // 4 - Exemplo de método para arquivos: O método .getDownloadURL() retorna uma url para download do arquivo. Ex:

  ref.listAll().then(res => {
    res.items[0].getDownloadURL().then(url => {
      console.log(url)
    });
  })










