import { StyleSheet } from "react-native";
import color from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  containerBorder: {
    borderColor: color.white,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "left",
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  signInText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 13,
    color: color.black,
    alignSelf: "center",
  },
  appContext: {
    alignSelf: "center",
    fontSize: 12,
    color: color.grayLight,
  },
  emailPassText: {
    paddingVertical: 10,
  },
  emailPassInput: {
    borderColor: color.black,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    width: 250,
    paddingHorizontal: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  checkbox: {
    borderColor: color.black,
    width: 24,
    height: 24,
    borderRadius: 20,
  },
  checkboxText: {
    marginLeft: 8,
  },
  signInButton: {
    backgroundColor: color.black,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 15,
  },
  signInButtonText: {
    color: color.white,
  },
  forgotTextSection: {
    alignItems: "center",
    marginTop: 20,
  },
  forgotText: {
    fontWeight: "bold",
    borderBottomWidth: 0.5,
    paddingBottom: 0.01,
  },
  seperator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  line: {
    width: 110,
    height: 1,
    backgroundColor: color.grayDark,
  },
  alternateOption: {
    marginHorizontal: 10,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUp: {
    fontWeight: "bold",
    borderBottomWidth: 0.5,
    paddingBottom: 0.01,
  },
  errorText: {
    color: "#ff4d4d", // modern red
    fontSize: 12,
    marginTop: 10,
    fontWeight: "500",
  },
});

export default styles;
