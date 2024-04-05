import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCOiZzwgN-I_ITXSukmkC3ENm6Lq9vZpt8',
  authDomain: 'music-e449b.firebaseapp.com',
  projectId: 'music-e449b',
  storageBucket: 'music-e449b.appspot.com',
  appId: '1:931119965846:web:f95e8cacdc73a875bc44b7'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistance error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
