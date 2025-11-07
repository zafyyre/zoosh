import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";

export const registerUser = async (email, password, displayName) => {
  // Create user in Firebase Auth (this handles password securely)
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user; // minimizes unecessary data

  await setDoc(doc(db, "users", user.uid), {
    // Create Firestore profile doc under users/{uid}
    displayName,
    email,
    createdAt: serverTimestamp(),
  });

  return user.uid; // helper
};

export const updateUser = async (id, updates) => {
  await updateDoc(doc(db, "users", id), updates);
};
