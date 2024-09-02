import { firebaseConfig, app } from './config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { doc, onSnapshot } from 'firebase/firestore';


export const db = getFirestore(app);

// Get a list of cities from your database
export async function getData() {
  const citiesCol = collection(db, 'people');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());

  return cityList;
}