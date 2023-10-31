import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDPhat4JsWVTZ3qFk_ldxDz8OtD5FWtiXQ',
	authDomain: 'svelte-course-68adf.firebaseapp.com',
	projectId: 'svelte-course-68adf',
	storageBucket: 'svelte-course-68adf.appspot.com',
	messagingSenderId: '359245604705',
	appId: '1:359245604705:web:6b8e3e3bb4446d66040720'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
