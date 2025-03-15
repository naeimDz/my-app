// infrastructure/firebase/firebaseClient.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './config';
import firebase from 'firebase/compat/app';


const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
