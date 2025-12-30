import { StyleSheet } from "react-native";
import color from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    alignItems: "center",
    paddingVertical: 225,
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
  updatePasswordText: {
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
  passwordText: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  passwordInput: {
    borderColor: color.black,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    width: 250,
    paddingHorizontal: 15,
  },
  submitButton: {
    backgroundColor: color.black,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 15,
  },
  submitButtonText: {
    color: color.white,
  },
});

export default styles;
