import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
   apiKey: 'AIzaSyB2KRBrAM_GCDLRCwp3CsVzOg97Gb_gqpQ',
   authDomain: 'database-2766e.firebaseapp.com',
   projectId: 'database-2766e',
   storageBucket: 'database-2766e.appspot.com',
   messagingSenderId: '296530598674',
   appId: '1:296530598674:web:7789f598250a91b4be31cb',
   databaseURL:
      'https://database-2766e-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
