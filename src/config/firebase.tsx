import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBB720h_2ddm7EGXx3PoxqyWkL6MMCceuo",
	authDomain: "teampick-1d391.firebaseapp.com",
	projectId: "teampick-1d391",
	storageBucket: "teampick-1d391.appspot.com",
	messagingSenderId: "627066458377",
	appId: "1:627066458377:web:89a32e54a9c5a0173843d8",
	measurementId: "G-4D4LME1VXP",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
