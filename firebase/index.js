import firebase from 'firebase'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBB1m7Qr4B7KFlve0QzIljd69kNVki0qj4",
    authDomain: "roller-303917.firebaseapp.com",
    projectId: "roller-303917",
    storageBucket: "roller-303917.appspot.com",
    messagingSenderId: "753059760153",
    appId: "1:753059760153:web:fd477c184572a7dd9c8288"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}