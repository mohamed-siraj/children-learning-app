import { initializeApp,  } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpiLnFjcv_pukg3D6ON_5g9_pInGl_qnI",
    authDomain: "children-app-5145d.firebaseapp.com",
    projectId: "children-app-5145d",
    storageBucket: "children-app-5145d.appspot.com",
    messagingSenderId: "851038319976",
    appId: "1:851038319976:web:f01f178842157f86f1d2dd",
    measurementId: "G-EWNSCFMSCC"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

/**
 * Initialize firestore
 */
const db = getFirestore(app);

/**
 * Initialize auth
 */

const auth = getAuth(app);

export {app, db, auth};