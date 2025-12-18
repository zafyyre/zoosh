import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 110,
    paddingBottom: 100,
  },
  listSection: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  userList: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginVertical: 5,
    backgroundColor: colors.greenDeep,
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
    bottom: 120,
    right: 40,
    width: 60,
    height: 60,
    backgroundColor: colors.greenDark,
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
});

export default styles;
