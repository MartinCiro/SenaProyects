// Configuración de Firebase
export const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};

// Inicializar la app de Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db; //es la unica que exporto porque es la que se va a usar afuera