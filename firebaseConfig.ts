// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpxMCsSAePvM3ZHr28i69fz8KY2XhhLNg",
  authDomain: "aakriti-61f86.firebaseapp.com",
  projectId: "aakriti-61f86",
  storageBucket: "aakriti-61f86.appspot.com",
  messagingSenderId: "311508891090",
  appId: "1:311508891090:web:fd8c1fdeb06613b223c40b",
  measurementId: "G-83ZV1GSTBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
