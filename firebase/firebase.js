import firebase from 'firebase/compat/app';
import firebaseConfig from './config';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
class Firebase{
    constructor() {
        firebase.initializeApp(firebaseConfig );
        this.storage = firebase.storage();
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }
}

const firebaseObject = new Firebase()

export default firebaseObject;