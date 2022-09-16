import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSSwIFXFDHe3kukkZBvJgEv74Y-59_dZo",
  authDomain: "traveling-agency.firebaseapp.com",
  projectId: "traveling-agency",
  storageBucket: "traveling-agency.appspot.com",
  messagingSenderId: "271406587527",
  appId: "1:271406587527:web:f8e94d7f402e80e6d5e222",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
