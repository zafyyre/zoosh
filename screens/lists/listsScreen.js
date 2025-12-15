import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./listsStyles"

export default function ListsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.listSection}>
        <View style={styles.list}></View>
      </View>
      <TouchableOpacity style={styles.addListButton}></TouchableOpacity>
    </View>
  )
}