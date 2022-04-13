// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRvpnkDBD6P0bB_Cp0iF9tAm30n-_dDyw",
    authDomain: "genius-car-services-84e68.firebaseapp.com",
    projectId: "genius-car-services-84e68",
    storageBucket: "genius-car-services-84e68.appspot.com",
    messagingSenderId: "643338727518",
    appId: "1:643338727518:web:f1e3722eabff0e621504cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;