import supabase from "../supabase/supabaseClient";

export async function getAllItemsByList(listId) {
  const { data: userListData, error: userListDataError } = await supabase
    .from("items")
    .select("*")
    .eq("list_id", listId);

  if (userListDataError) {
    console.error("Error fetching list items:", userListDataError.message);
    return null;
  }

  return userListData;
}
