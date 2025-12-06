import supabase from "../../config/supabaseClient";
// import {
//   collection,
//   addDoc,
//   onSnapshot,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";
import stringSimilarity from "string-similarity";

export async function addItem(item) {
  const { data, error } = await supabase.from("items").insert({ item: item });
}

export async function fetchAllItems() {
  const { data, error } = await supabase.from("items").select("id, item");

  if (error) {
    console.error("Cannot retrive data from items:", error.message);
    return null;
  }

  console.log("All items retrieved:", data);

  return data;
}

// export async function updateItem(id, groceryItem) {
//   const itemRef = doc(db, "groceryItems", id);
//   await updateDoc(itemRef, { groceryItem });
// }

// export async function deleteItem(id) {
//   await deleteDoc(doc(db, "groceryItems", id));
// }
