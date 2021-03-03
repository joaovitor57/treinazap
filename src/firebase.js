import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyCfaSTLFBcxo10bnJeRgXf4Sl4GRJHCk5s",
    authDomain: "zipzop-da7b8.firebaseapp.com",
    projectId: "zipzop-da7b8",
    storageBucket: "zipzop-da7b8.appspot.com",
    messagingSenderId: "997382589406",
    appId: "1:997382589406:web:cebffbdfc7cd5b9e4deb4f"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
