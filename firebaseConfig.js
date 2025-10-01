// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MfwMryN59Nc0MNyiK05fOwveYFtO-SU",
  authDomain: "soulease-prueba.firebaseapp.com",
  projectId: "soulease-prueba",
  storageBucket: "soulease-prueba.appspot.com",
  messagingSenderId: "178779495706",
  appId: "1:178779495706:web:c49cf10b0082116dd9e0a3"
};

const app = initializeApp(firebaseConfig);

export default app;