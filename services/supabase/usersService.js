import supabase from "./supabaseClient";

export async function registerUser(userName, userEmail, userPassword) {
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  if (signUpError) {
    console.error("Error signing up:", signUpError);
    return null;
  }
  console.log("User signed up:", signUpData);

  const userId = signUpData.user.id;

  if (!userId) {
    console.error("Signup succeeded but user object missing");
    return null;
  }

  const { data: profileData, error: profileError } = await supabase
    .from("users")
    .upsert({
      id: userId,
      name: userName,
    })
    .select();

  if (profileError) {
    console.error("Error creating profile:", profileError.message);
    return null;
  }

  return {
    userId,
    email: signUpData.user.email,
  };
}

export async function signInUser(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  if (error) {
    console.error("Login error:", error.message);
    return null;
  }
  console.log("User logging in:");

  return data.user;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error.message);
    return null;
  } else {
    console.log("User signed out successfully.");
  }
}

// Grab from auth.users
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log("Cannot get user:", error.message);
    return null;
  }
  return data.user;
}

// Grab from public.users
export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Cannot get user profile:", error.message);
    return null;
  }
  return data;
}
