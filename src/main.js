import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
// import { getAuth, connectAuthEmulator } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXxpwdsVxmxYUPsrDIRzNXRg9zpVnyJeg",
  authDomain: "dunder-mifflin-29a33.firebaseapp.com",
  projectId: "dunder-mifflin-29a33",
  storageBucket: "dunder-mifflin-29a33.appspot.com",
  messagingSenderId: "481570212814",
  appId: "1:481570212814:web:5932f46a5a83259cccb99f",
    measurementId: "G-NWVMCCX5R5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// if (location.hostname === "localhost") {
//   connectAuthEmulator(getAuth(), "http://localhost:8080");
// }
const app = createApp(App);
app.use(router);
app.mount("#app");
