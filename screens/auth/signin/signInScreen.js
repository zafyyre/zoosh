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
import styles from "./signInStyles";
import icon from "../../../assets/images/logo-transparent-black.png";
import * as usersService from "../../../services/supabase/usersService";
import BackButton from "../../../components/back/back";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn(email, password) {
    try {
      const success = await usersService.signInUser(email, password);

      if (!success) {
        // your signInUser can return false or throw
        setError("Invalid email or password. Please try again.");
      } else {
        setError(""); // clear error on success
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
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

            <Text style={styles.signInText}>Sign In</Text>
            <Text style={styles.appContext}>
              Sign in to access and keep track of your
            </Text>
            <Text style={styles.appContext}>shared lists and coupons.</Text>
            <View>
              <Text style={styles.emailPassText}>Email</Text>
              <TextInput
                style={styles.emailPassInput}
                placeholder="your@email.com"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setError("");
                }}
              />
              <Text style={styles.emailPassText}>Password</Text>
              <TextInput
                style={styles.emailPassInput}
                placeholder="******"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setError("");
                }}
                secureTextEntry
              />
              {error.length > 0 && (
                <Text style={styles.errorText}>{error}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => handleSignIn(email, password)}
              activeOpacity={0.7}
            >
              <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotTextSection}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("ResetScreen")}
            >
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>

            <View style={styles.seperator}>
              <View style={styles.line}></View>
              <Text style={styles.alternateOption}>or</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.signUpContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text style={styles.signUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
