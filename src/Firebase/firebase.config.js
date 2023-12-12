// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBET_DHf6m69Y9VRjCayd9GWYzRivfDfaw",
  authDomain: "donation-campaign-37d8f.firebaseapp.com",
  projectId: "donation-campaign-37d8f",
  storageBucket: "donation-campaign-37d8f.appspot.com",
  messagingSenderId: "918264445850",
  appId: "1:918264445850:web:52188c53be70b8da6ad823",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
