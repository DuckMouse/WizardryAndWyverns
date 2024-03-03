
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFoTDCkven6e30fcSLZVW2YnvNet8GD3I",
  authDomain: "teampick-99790.firebaseapp.com",
  projectId: "teampick-99790",
  storageBucket: "teampick-99790.appspot.com",
  messagingSenderId: "493084048516",
  appId: "1:493084048516:web:7eaaacc1319256a9fd96d1",
  measurementId: "G-5CRPXGHCYF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);