import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "./signInStyles";
import icon from "../../../assets/images/logo.png";
import Checkbox from "expo-checkbox";
import color from "../../../styles/colors";
import * as userService from "../../../services/supabase/usersService";

export default function SignInScreen() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

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
          />
          <Text style={styles.emailPassText}>Password</Text>
          <TextInput style={styles.emailPassInput} placeholder="******" />
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
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.forgotText}>
          <Text>Forgot your password?</Text>
        </View>
      </View>
    </View>
  );
}
