import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyA8Mo41B_NOu_9vvxYowzvQf4GowBgxK0o",
  authDomain: "platzimusic-1a969.firebaseapp.com",
  databaseURL: "https://platzimusic-1a969.firebaseio.com",
  projectId: "platzimusic-1a969",
  storageBucket: "",
  messagingSenderId: "195972716067"
};

firebase.initializeApp(config);
export const firebaseAuth=firebase.auth()
export const fireDatabase = firebase.database();
export default firebase
