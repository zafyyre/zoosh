import { Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import icon from "../../assets/images/logo-transparent-black.png";
import styles from "./NavbarStyles";
import * as usersService from "../../services/supabase/usersService";

export default function Navbar({ screen, currentList }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUserName() {
      const user = await usersService.getCurrentUser();
      if (user) {
        const profile = await usersService.getUserProfile(user.id);
        if (profile) {
          setUserName(profile.name); // adjust if your column name is different
        }
      }
    }

    fetchUserName();
  }, []);

  // return (
  //   <View style={styles.container}>
  //     {screen === "ListsScreen" && (

  //     )}
  //     {screen === "ItemsScreen" && (
  //       <Text style={styles.topLeft}>{currentList}</Text>
  //     )}
  //     <Image source={icon} style={styles.logo} />
  //   </View>
  // );
}
