
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from
    "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBcIv3tzsXaUwUflCtfKVhkE1rm0gqpEBY",
    authDomain: "netflix-react-f44a2.firebaseapp.com",
    projectId: "netflix-react-f44a2",
    storageBucket: "netflix-react-f44a2.appspot.com",
    messagingSenderId: "569200314538",
    appId: "1:569200314538:web:ecb86e947c17f560e9a8d3"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const createEmail = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
