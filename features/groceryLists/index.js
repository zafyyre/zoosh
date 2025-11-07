import { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import stringSimilarity from "string-similarity";
import Lottie from "../../components/Lottie";
import styles from "./styles";
import {
  addItem,
  listenToItems,
  updateItem,
  deleteItem,
} from "../../services/firestore/items";

export default function GroceryLists() {
  const [groceryLists, setGroceryLists] = useState([]);
  const [editingListId, setEditingListId] = useState([]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined} // Avoid keyboard covering textinput
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps="handled">
            {/* Taps on items still register even if they keyboard is open */}
            <View style={styles.header}>
              <Text style={styles.headerText}>Grocery Lists</Text>
            </View>
            <View style={styles.listSection}></View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
