import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAwqqv4F_wk3EVeiNibsNfzxW-OHGydxXw',
  authDomain: 'tech-net-dfb9d.firebaseapp.com',
  projectId: 'tech-net-dfb9d',
  storageBucket: 'tech-net-dfb9d.appspot.com',
  messagingSenderId: '757576775454',
  appId: '1:757576775454:web:944bd75de34f524eedbb0f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
