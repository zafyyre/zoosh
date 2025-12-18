import supabase from "./supabaseClient";

export async function fetchAllLists() {
  const { data: listData, error: listError } = await supabase
    .from("lists")
    .select("*");

  if (listError) {
    console.error("Error fetching lists:", listError.message);
    return [];
  }

  return listData;
}
