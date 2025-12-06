import supabase from '../../config/supabaseClient';

export async function registerUser(
  firstName,
  lastName,
  userEmail,
  userPassword
) {
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  if (signUpError) {
    console.error('Error signing up:', signUpError);
    return null;
  }
  console.log('User signed up:', signUpData);

  const userId = signUpData.user.id;

  const { data: profileData, error: profileError } = await supabase
    .from('users')
    .update({
      first_name: firstName,
      last_name: lastName,
    })
    .eq('id', signUpData.user.id);

  if (profileError) {
    console.error('Error creating profile:', profileError.message);
    return null;
  }
  console.log('Profile created:', profileData);

  return userId;
}

export async function signInUser(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  if (error) {
    console.error('Login error:', error);
    return null;
  }
  console.log('User logging in:', data);

  return data.user;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error signing out:', error.message);
    return null;
  } else {
    console.log('User signed out successfully.');
  }
}

// Grab from auth.users
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log('Cannot get user:', error.message)
    return null;
  } else {
    console.log('Got current user:', data.user)
  }
  return data.user;
}

// Grab from public.users
export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)

  if (error) {
    console.error('Cannot get user profile:', error.message)
    return null;
  } else {
    console.log('Retrieved user profile:', data)
  }
  return data.user;
}




