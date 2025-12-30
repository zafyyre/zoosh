import styles from "./updateInfoStyles";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import icon from "../../../assets/images/logo-transparent-black.png";
import color from "../../../styles/colors";
import { useState } from "react";
import supabase from "../../../services/supabase/supabaseClient";
import BackButton from "../../../components/back/back";

export default function UpdateInfoScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState("");

  async function updateUserPassword(newPassword) {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Error updating password:", error.message);
      return { error };
    }

    console.log("Password updated successfully.");
    navigation.replace("MainLayout");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <BackButton />

          <View style={styles.containerBorder}>
            <TouchableOpacity onPress={() => navigation.replace("MainLayout")}>
              <Text>Cancel</Text>
            </TouchableOpacity>

            <Image
              source={icon}
              style={[styles.logo, { tintColor: color.black }]}
            />
            <Text style={styles.updatePasswordText}>Update Password</Text>
            <Text style={styles.passwordContext}>
              Please enter a new password
            </Text>
            <View>
              <Text style={styles.passwordText}>New Password</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="******"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.7}
              onPress={() => updateUserPassword(newPassword)}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
