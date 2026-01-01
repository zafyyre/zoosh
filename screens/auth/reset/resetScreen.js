import styles from "./resetStyles";
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
import icon from "../../../assets/images/logo-transparent-black.png";
import color from "../../../styles/colors";
import supabase from "../../../services/supabase/supabaseClient";
import BackButton from "../../../components/back/back";
import { OtpInput } from "react-native-otp-entry";

export default function ResetScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [isSent, setIsSent] = useState(false);

  async function sendEmail() {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (!error) {
      setIsSent(true);
    } else {
      console.error("Error sending email:", error.message);
    }
  }

  async function submitToken(otp) {
    const { error } = await supabase.auth.verifyOtp({
      email: email,
      token: otp,
      type: "recovery",
    });

    if (error) {
      console.error("Error verifying token:", error.message);
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
            <Image
              source={icon}
              style={[styles.logo, { tintColor: color.black }]}
            />
            <Text style={styles.resetPasswordText}>Reset Password</Text>
            {!isSent ? (
              // Enter Email
              <>
                <Text style={styles.passwordContext}>
                  Enter your email and we'll send a
                </Text>
                <Text style={styles.passwordContext}>
                  verification code instantly.
                </Text>
                <View>
                  <Text style={styles.emailText}>Email</Text>
                  <TextInput
                    style={styles.emailInput}
                    placeholder="your@email.com"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <TouchableOpacity
                  style={styles.sendCodeButton}
                  activeOpacity={0.7}
                  onPress={sendEmail}
                >
                  <Text style={styles.sendCodeButtonText}>Send Code</Text>
                </TouchableOpacity>
              </>
            ) : (
              // Enter 6-Digit Code
              <>
                <Text style={styles.passwordContext}>
                  Enter the verification code sent
                </Text>
                <Text style={styles.passwordContext}>to your email.</Text>
                <View>
                  {/* <TextInput
                style={styles.emailInput}
                placeholder="123456"
                value={token}
                onChangeText={setToken}
              /> */}
                  <View style={{ tintColor: color.black }}>
                    <OtpInput
                      numberOfDigits={6}
                      onTextChange={(text) => setToken(text)}
                      onFilled={(text) => {
                        setToken(text);
                        submitToken(text); // <-- pass the OTP directly
                      }}
                      theme={{
                        containerStyle: {
                          marginTop: 20,
                          width: "100%",
                          paddingHorizontal: 0,
                        },
                        pinCodeContainerStyle: styles.pinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,
                        focusedPinCodeContainerStyle: {
                          borderColor: color.black,
                        },
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.sendCodeButton}
                  activeOpacity={0.7}
                  onPress={submitToken}
                >
                  <Text style={styles.sendCodeButtonText}>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
