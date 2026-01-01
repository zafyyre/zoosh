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
    backgroundColor: "white",
    position: "relative",
    marginTop: -50,
  },
  topLeft: {
    color: colors.black,
    fontSize: 16,
    position: "absolute",
    left: 40, // username on the left
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
  deleteAction: {
    backgroundColor: "#FF3B30", // Official iOS Red
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%", // This allows the red to fill the screen as you pull
    flex: 1,
  },
  deleteText: {
    color: "white",
    fontWeight: "600",
    paddingHorizontal: 30, // Distance from the right edge
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
