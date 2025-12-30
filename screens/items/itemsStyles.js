import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 110,
    paddingBottom: 100,
  },
  listNameText: {
    color: colors.white,
  },
  listSection: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  listItem: {
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

    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  listItemText: {
    color: "white",
    fontSize: 15,
  },
  input: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#222",
    color: "white",
  },
  inputSection: {
    padding: 50,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#444",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 10,
    height: 47.5,
    marginVertical: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  checkContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    width: 20,
    height: 20,
    transform: [{ scale: 4 }],
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  emptyCircle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "transparent",
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
});

export default styles;
