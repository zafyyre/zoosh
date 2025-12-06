import { registerRootComponent } from "expo";
import ItemsScreen from "./features/items/itemsScreen";
import ListsScreen from "./features/lists/listsScreen";
import SignUpScreen from "./features/signup/signUpScreen";
import { useEffect } from "react";
import {
  signInUser,
  getCurrentUser,
  getUserProfile,
  signOutUser,
} from "./services/supabase/usersService";

// registerRootComponent(GroceryListItems);
// registerRootComponent(GroceryLists);

function App() {
  useEffect(() => {
    async function testAuth() {
      // console.log("Testing sign up...");

      // const userId = await registerUser(
      //   "Test",
      //   `User`,
      //   `zaaf@hotmail.com`,
      //   "pass1234"
      // );

      // console.log("Register result:", userId);

      console.log("Testing login...");
      const loginResult = await signInUser("zaaf@hotmail.com", "pass1234");
      console.log("Login result:", loginResult);
      const result = await getCurrentUser();
      getUserProfile(result.id);
      signOutUser();
    }

    testAuth();
  }, []);

  return null; // or <GroceryListItems />
}

registerRootComponent(App);
