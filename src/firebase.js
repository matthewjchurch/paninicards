import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkUNK59NImnZ_rNFV_cWwfOK0CjUEEc2A",
    authDomain: "fantasy-football-planner.firebaseapp.com",
    databaseURL: "https://fantasy-football-planner.firebaseio.com",
    projectId: "fantasy-football-planner",
    storageBucket: "fantasy-football-planner.appspot.com",
    messagingSenderId: "198127418517",
    appId: "1:198127418517:web:33819475a71fdf8df1af9c",
    measurementId: "G-X4S2GH8WG0"
};

firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;