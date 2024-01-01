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

  // Referência a input do html
  const fileInput = document.getElementById('file-input');

  // Escuta um evento no input, para pegar o arquivo
  fileInput.addEventListener('change', e => {
    //Armazena na variável o arquivo que fica salvo em um array chamado files sempre que um input:files carrega algum arquivo
    const file = e.target.files[0]

    //Adiciona ao banco de dados (ref.child:adiciona o arquivo dentro do filho da referência) e (file.name define o nome do arquivo no db)
    ref.child(file.name).put(file).then(snapshot => {
      console.log(snapshot);
    })
  })


  // BASE64

  // Outra maneira de fazer isso é com é convertendo o arquivo que eu quero colocar no db em string(base 64) e dps fazer o upload e isso se chama base 64.

  //Coloque dentro de uma variável o arquivo convertido para base 64
  const fileBase64 = 'Q29sb3F1ZSBhcXVpIG8gYXJxdWl2byBjb252ZXJ0aWRvIHBhcmEgYmFzZSA2NChpbWcsIHRleHRvLCB2aWRlbyBlIGV0Yyku';

  ref.child('arquivo.txt').putString(fileBase64, 'base64').then(snapshot => {
    console.log(snapshot);
  })

  



  









