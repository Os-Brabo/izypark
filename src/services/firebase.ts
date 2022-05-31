// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCuYO94ZTBUyqetY0Sz759L_Ly0iA7X41I",
  authDomain: "izipark-5b433.firebaseapp.com",
  databaseURL: "https://izipark-5b433-default-rtdb.firebaseio.com",
  projectId: "izipark-5b433",
  storageBucket: "izipark-5b433.appspot.com",
  messagingSenderId: "882850359819",
  appId: "1:882850359819:web:fd524edc2d4a3925c8b50e",
  measurementId: "G-11B9GYRDQL"
};

export const app = initializeApp(firebaseConfig);

// Initialize Firebase
// const analytics = getAnalytics(app);
