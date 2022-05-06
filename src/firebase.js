import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
	apiKey: "AIzaSyAYxcWmb5pBrGrm3WPGPNXJfQddLjqEXmY",
	authDomain: "blood-donation-community-1000.firebaseapp.com",
	databaseURL:
		"https://blood-donation-community-1000-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "blood-donation-community-1000",
	storageBucket: "blood-donation-community-1000.appspot.com",
	messagingSenderId: "786435141656",
	appId: "1:786435141656:web:54b8ac04fe2d6fd6f1536d",
	measurementId: "G-0FRN6EQWF3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
