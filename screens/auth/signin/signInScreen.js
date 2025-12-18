import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "./signInStyles";
import icon from "../../../assets/images/logo.png";
import Checkbox from "expo-checkbox";
import color from "../../../styles/colors";
import * as usersService from "../../../services/supabase/usersService";

export default function SignInScreen({ navigation }) {
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  async function handleSignIn(email, password) {
    try {
      const user = await usersService.signInUser(email, password);
      if (user) {
        console.log("SUCCESS");
        navigation.replace("Main");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert("Failed to sign in. Check your credentials. ");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBorder}>
        <Image source={icon} style={styles.logo} />

        <Text style={styles.signInText}>Sign In</Text>
        <View>
          <Text style={styles.emailPassText}>Email</Text>
          <TextInput
            style={styles.emailPassInput}
            placeholder="your@email.com"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.emailPassText}>Password</Text>
          <TextInput
            style={styles.emailPassInput}
            placeholder="******"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={checked}
            onValueChange={setChecked}
            color={checked ? color.greenDark : undefined}
            style={styles.checkbox}
          ></Checkbox>
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => handleSignIn(email, password)}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.forgotText}>
          <Text>Forgot your password?</Text>
        </View>
      </View>
    </View>
  );
}
