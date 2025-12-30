import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Clear AsyncStorage safely (optional, for testing only)
const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage cleared");
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};

// Call it immediately (optional)
clearStorage();

const extra = Constants.expoConfig?.extra || Constants.manifest?.extra;

const supabaseUrl = extra?.SUPABASE_URL;
const supabaseAnonKey = extra?.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
