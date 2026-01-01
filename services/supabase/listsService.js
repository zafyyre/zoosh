import supabase from "./supabaseClient";

export async function fetchAllListsByUser(userId) {
  const { data: listData, error: listError } = await supabase
    .from("lists")
    .select("*")
    .eq("owner_id", userId);

  if (listError) {
    console.error("Error fetching lists:", listError.message);
    return [];
  }

  return listData;
}

export async function fetchListById(listId) {
  const { data, error } = await supabase
    .from("lists")
    .select("name")
    .eq("id", listId)
    .single();

  if (error) {
    console.error("Error fetching list name:", error.message);
    return;
  }

  return data;
}

export async function createList(userId, listName) {
  const { data, error } = await supabase
    .from("lists")
    .insert({
      owner_id: userId,
      name: listName,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating list:".error.message);
    return null;
  }

  return data;
}

export async function deleteList(listId, userId) {
  if (!userId) {
    console.error("User ID is required to delete a list.");
    return null;
  }

  const { data, error } = await supabase
    .from("lists")
    .delete()
    .eq("id", listId)
    .eq("owner_id", userId)
    .select(); // returns the deleted row

  if (error) {
    console.error("Error deleting list:", error.message);
    return null;
  }

  if (!data || data.length === 0) {
    console.warn(
      "No list deleted. Either it doesn't exist or you don't own it."
    );
    return null;
  }

  return data[0]; // deleted list object
}
