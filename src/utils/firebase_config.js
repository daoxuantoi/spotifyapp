import{initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAY-BDIHZtJ3ipw6YAi49jzLhNBLNRNgI",
    authDomain: "spotifylogin-5b0e2.firebaseapp.com",
    projectId: "spotifylogin-5b0e2",
    storageBucket: "spotifylogin-5b0e2.appspot.com",
    messagingSenderId: "812701817297",
    appId: "1:812701817297:web:972524dbaaa12f1245e8f0",
    measurementId: "G-1X9R3B9V45"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)