import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

 //Add configuration here
  apiKey: "AIzaSyB0XkGp8NyUjRC0H9KX_UaJQJNX-WMafXA",
  authDomain: "project-61-complaint-forum.firebaseapp.com",
  projectId: "project-61-complaint-forum",
  storageBucket: "project-61-complaint-forum.appspot.com",
  messagingSenderId: "404100158591",
  appId: "1:404100158591:web:68a97ad28f9c0fda4d5b4a"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();