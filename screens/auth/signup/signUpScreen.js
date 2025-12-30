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
import { useState } from "react";
import styles from "./signUpStyles";
import icon from "../../../assets/images/logo-transparent-black.png";
import * as usersService from "../../../services/supabase/usersService";
import BackButton from "../../../components/back/back";
import { useAssets } from "expo-asset";

export default function SignUpScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordRules, setPasswordRules] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
  });

  async function handlePasswordChange(text) {
    setPassword(text);

    setPasswordRules({
      length: text.length >= 8,
      lowercase: /[a-z]/.test(text),
      uppercase: /[A-Z]/.test(text),
      number: /\d/.test(text),
    });
  }

  const [assetsLoaded] = useAssets([
    require("../../../assets/images/logo-transparent-black.png"),
  ]);

  if (!assetsLoaded) {
    return null; // or a loading indicator
  }

  async function handleSignUp(userName, email, password) {
    try {
      const user = await usersService.registerUser(userName, email, password);

      if (user) {
        setError(""); // clear error
        navigation.replace("MainStack");
      } else {
        setError("Unable to register. Please check your information.");
      }
    } catch (err) {
      // Catch network errors or Supabase errors
      if (err.message.includes("duplicate")) {
        setError("Email already in use.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
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
            <Image source={icon} style={styles.logo} />

            <Text style={styles.signUpText}>Sign Up</Text>
            <Text style={styles.registerContext}>
              Sign up to create shared lists and
            </Text>
            <Text style={styles.registerContext}>save important coupons.</Text>

            <View>
              <Text style={styles.userInfoText}>Full Name</Text>
              <TextInput
                style={styles.userInfoInput}
                placeholder="John Doe"
                value={userName}
                onChangeText={(text) => {
                  setUserName(text);
                  setError("");
                }}
              />

              <Text style={styles.userInfoText}>Email</Text>
              <TextInput
                style={styles.userInfoInput}
                placeholder="your@email.com"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setError("");
                }}
              />

              <Text style={styles.userInfoText}>Password</Text>
              <TextInput
                style={styles.userInfoInput}
                placeholder="******"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setError("");
                  handlePasswordChange(text);
                }}
                secureTextEntry
              />
              <View style={{ marginTop: 10, alignItems: "center" }}>
                <Text
                  style={{
                    color: passwordRules.length ? "green" : "red",
                    fontSize: 12,
                  }}
                >
                  • At least 8 characters
                </Text>
                <Text
                  style={{
                    color: passwordRules.lowercase ? "green" : "red",
                    fontSize: 12,
                  }}
                >
                  • Contains a lowercase letter
                </Text>
                <Text
                  style={{
                    color: passwordRules.uppercase ? "green" : "red",
                    fontSize: 12,
                  }}
                >
                  • Contains an uppercase letter
                </Text>
                <Text
                  style={{
                    color: passwordRules.number ? "green" : "red",
                    fontSize: 12,
                  }}
                >
                  • Contains a number
                </Text>
              </View>

              {error.length > 0 && (
                <Text style={styles.errorText}>{error}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => handleSignUp(userName, email, password)}
              activeOpacity={0.7}
            >
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.seperator}>
              <View style={styles.line}></View>
              <Text style={styles.alternateOption}>or</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.signInContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("SignInScreen")}
              >
                <Text style={styles.signIn}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
