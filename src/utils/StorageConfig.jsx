import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics, logEvent } from 'firebase/analytics'

// config
const firebaseConfig = {
  apiKey: "AIzaSyDJFSTjOOEJWXTeLmau6Q5HDlnZlEvT75c",
  authDomain: "mmaanalyticawebapplication.firebaseapp.com",
  projectId: "mmaanalyticawebapplication",
  storageBucket: "mmaanalyticawebapplication.appspot.com",
  messagingSenderId: "988227867428",
  appId: "1:988227867428:web:472487544517a4b54759b1",
  measurementId: "G-5BL5F7LFQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create storage container
const storage = getStorage(app);
// Create Analytics container
const analytics = getAnalytics(app)
// Create logPageVisit
const logPageVisit = (pageName) => {
  logEvent(analytics, 'page_visit', {
    pageName: pageName,
  })
}
// Create logSearchEvent 
const logSearchEvent = (searchItem) => {
  logEvent(analytics, 'search', {
    search_term: searchItem,
  })
}
export { storage, logPageVisit, logSearchEvent };