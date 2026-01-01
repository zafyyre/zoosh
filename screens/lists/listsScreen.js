import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./listsStyles";
import * as listsService from "../../services/supabase/listsService";
import * as usersService from "../../services/supabase/usersService";
// import Navbar from "../../navigation/Navbar/Navbar";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import icon from "../../assets/images/logo-transparent-black.png";

export default function ListsScreen({ navigation }) {
  const [usersLists, setUsersLists] = useState([]);
  const [newList, setNewList] = useState("");
  const [addingList, setAddingList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const user = await usersService.getCurrentUser();
      const profile = await usersService.getUserProfile(user.id);
      if (profile) {
        setUserName(profile.name); // adjust if your column name is different
      }
      const result = await listsService.fetchAllListsByUser(user.id);
      setUsersLists(result);
      setLoading(false);
    }
    loadData();
  }, []);

  function handleOpenList(list) {
    navigation.navigate("ItemsScreen", { listId: list.id });
  }

  async function handleCreateNewList() {
    if (!newList.trim()) return; // ignore empty input

    const user = await usersService.getCurrentUser();
    const newListObject = await listsService.createList(user.id, newList);

    if (newListObject) {
      setUsersLists((prev) => [...prev, newListObject]); // add new item
      setAddingList(false);
      setNewList(""); // clear input
      Keyboard.dismiss();
    }
  }

  async function handleDeleteList(listId) {
    try {
      const user = await usersService.getCurrentUser();
      const result = await listsService.deleteList(listId, user.id);

      if (!result) {
        setError(
          "Only the owner can delete this list. To remove it from your library, please leave the list."
        );
      } else {
        setError("");
        setUsersLists((prev) => prev.filter((list) => list.id !== listId));
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  }

  function renderRightActions(listId) {
    return function (progress, dragX) {
      return (
        <TouchableOpacity
          style={styles.deleteAction}
          onPress={() => handleDeleteList(listId)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      );
    };
  }

  return (
    !loading && (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <View style={styles.navbar}>
              <Text style={styles.topLeft}>Hello, {userName}</Text>
              <Image source={icon} style={styles.logo} />
            </View>

            <ScrollView
              contentContainerStyle={styles.listSection}
              keyboardShouldPersistTaps="handled"
            >
              {usersLists.map((list) => (
                <TouchableOpacity
                  key={list.id}
                  style={styles.userList}
                  onPress={() => handleOpenList(list)}
                >
                  <Text style={styles.userListText}>{list.name}</Text>
                </TouchableOpacity>
              ))}

              {addingList && (
                <TextInput
                  key="new-list-input"
                  style={[styles.userList, styles.userListText]}
                  value={newList}
                  onChangeText={setNewList}
                  placeholder="New List Name..."
                  placeholderTextColor="grey"
                  autoFocus
                  onSubmitEditing={handleCreateNewList}
                  onBlur={() => {
                    if (!newList.trim()) {
                      setAddingList(false);
                      setNewList("");
                    }
                  }}
                />
              )}
            </ScrollView>

            <TouchableOpacity
              style={styles.addList}
              activeOpacity={0.8}
              onPress={() => setAddingList(true)}
            >
              <Text style={styles.addListButton}>+</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  );
}
