import { StyleSheet } from "react-native";
import color from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 225,
    flex: 1,
  },
  containerBorder: {
    borderColor: color.white,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "left",
    marginHorizontal: 20,
    padding: 20,
    width: undefined,
  },
  logo: {
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  resetPasswordText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 13,
    color: color.black,
    alignSelf: "center",
  },
  passwordContext: {
    alignSelf: "center",
    fontSize: 12,
    color: color.grayLight,
  },
  emailText: {
    paddingVertical: 10,
  },
  emailInput: {
    borderColor: color.black,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    width: 250,
    paddingHorizontal: 15,
  },
  sendCodeButton: {
    backgroundColor: color.black,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 15,
  },
  sendCodeButtonText: {
    color: color.white,
  },
  pinCodeContainer: {
    width: 40, // Increased width slightly
    height: 50,
    borderRadius: 10, // Match your app's rounded aesthetic better
    borderWidth: 1.5,
    borderColor: color.black,
    backgroundColor: color.white,
  },
  pinCodeText: {
    fontSize: 20,
    color: color.black,
  },
});

export default styles;
