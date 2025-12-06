import { db } from "../../config/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const addList = async (groceryList) => {
  const ref = await addDoc();
};
