<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAzlbOw_OTNBnAIa2NWWRTijJuf8UEVnNY",
    authDomain: "colegio-7e69d.firebaseapp.com",
    projectId: "colegio-7e69d",
    storageBucket: "colegio-7e69d.appspot.com",
    messagingSenderId: "166082057459",
    appId: "1:166082057459:web:7459b7abb771b281b51386",
    measurementId: "G-J5TC7W1909"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>