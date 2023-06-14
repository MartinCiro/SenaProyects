import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Configuración de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyC7gTiSk86I8d0ywX_qyebeh-xMQwxnuWs",
  authDomain: "todo-13ec0.firebaseapp.com",
  projectId: "todo-13ec0",
  storageBucket: "todo-13ec0.appspot.com",
  messagingSenderId: "269794992645",
  appId: "1:269794992645:web:127e48795e6ddd10d0726c"
};

// Inicializar la app de Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db; //es la unica que exporto porque es la que se va a usar afuera