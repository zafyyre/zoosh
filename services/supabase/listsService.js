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
