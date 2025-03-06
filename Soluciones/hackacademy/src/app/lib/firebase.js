// Importa las funciones necesarias del SDK modular de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia a Auth
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, createUserWithEmailAndPassword, googleProvider  };
