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
    borderColor: color.grayLight,
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
    color: color.grayDark,
  },
  emailPassText: {
    paddingVertical: 10,
  },
  emailPassInput: {
    borderColor: color.grayLight,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
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
});

export default styles;
