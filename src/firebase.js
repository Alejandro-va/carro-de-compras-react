import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMOwy2lRbddSvyv9NXUxxDctxyUJg47Oo",
  authDomain: "carro-de-compras-react.firebaseapp.com",
  projectId: "carro-de-compras-react",
  storageBucket: "carro-de-compras-react.appspot.com",
  messagingSenderId: "920739482613",
  appId: "1:920739482613:web:3c3a0681878ce5156deebc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
