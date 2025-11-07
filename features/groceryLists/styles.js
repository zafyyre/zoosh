import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 50,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 1,
    color: "white",
  },
  listSection: {
    paddingTop: 40,
  },
  listItem: {
    paddingVertical: 6.25,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: "#333",
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    color: "white",
    fontSize: 18,
  },
});

export default styles;
