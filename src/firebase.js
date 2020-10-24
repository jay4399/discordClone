import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBXvh_O4UJQPThbGyyDvnPv7fUgqjkBG5o",
  authDomain: "discord-clone-4399.firebaseapp.com",
  databaseURL: "https://discord-clone-4399.firebaseio.com",
  projectId: "discord-clone-4399",
  storageBucket: "discord-clone-4399.appspot.com",
  messagingSenderId: "167088394235",
  appId: "1:167088394235:web:a8b31f123bfb875e5d455e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;