import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 110,
    paddingBottom: 100,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // center everything by default
    paddingVertical: 5,
    paddingHorizontal: 55,
    backgroundColor: "white",
    position: "relative",
    marginTop: -50,
  },
  topLeft: {
    color: colors.black,
    fontSize: 16,
    position: "absolute",
    left: 45,
  },
  signOut: {
    color: colors.black,
    fontSize: 16,
    position: "absolute",
    right: 60,
  },
  logo: {
    width: 60,
    height: 60,
  },
  listSection: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  userList: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: colors.black,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // Shadows
    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  userListText: {
    color: colors.white,
    fontSize: 15,
  },
  addList: {
    position: "absolute",
    bottom: 140,
    right: 40,
    width: 60,
    height: 60,
    backgroundColor: colors.black,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addListButton: {
    color: colors.white,
    fontSize: 30,
  },
  deleteActionWrapper: {
    left: 10,
    paddingLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  deleteAction: {
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    backgroundColor: "red",
    color: "white",
    fontWeight: "600",
    paddingVertical: 12,
    paddingHorizontal: 25, // Distance from the right edge
    borderRadius: 20,
  },
  errorText: {
    // Add this style so your error message looks decent
    color: "#FF3B30",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    fontWeight: "500",
  },
});

export default styles;
