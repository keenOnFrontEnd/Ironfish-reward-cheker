import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDFcDApoqVNfANjeexB3xe0awSRRcAPhaY",
    authDomain: "ironfish-rewards-checker.firebaseapp.com",
    databaseURL: "https://ironfish-rewards-checker-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ironfish-rewards-checker",
    storageBucket: "ironfish-rewards-checker.appspot.com",
    messagingSenderId: "743556178997",
    appId: "1:743556178997:web:f3d1d411b786558167fd7c"
  };

  const app = initializeApp(firebaseConfig);
  
  export const database = getDatabase(app);