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
    borderColor: color.greenDark,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "left",
    padding: 20,
  },
  logo: {
    width: 90,
    height: 90,
  },
  signInText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
    color: color.black,
  },
  emailPassText: {
    paddingVertical: 10,
  },
  emailPassInput: {
    borderColor: color.greenDark,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 6,
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
    borderColor: color.greenDark,
    width: 24,
    height: 24,
    borderRadius: 6,
  },
  checkboxText: {
    marginLeft: 8,
  },
  signInButton: {
    backgroundColor: color.greenDark,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 15,
  },
  signInButtonText: {
    color: color.white,
  },
  forgotText: {
    alignItems: "center",
    marginTop: 20,
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
    // textDecorationLine: "underline",
    borderBottomWidth: 0.5,
    paddingBottom: 0.01,
  },
});

export default styles;
