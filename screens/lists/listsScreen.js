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
  Pressable,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "./listsStyles";
import supabase from "../../services/supabase/supabaseClient";
import * as listsService from "../../services/supabase/listsService";
import * as usersService from "../../services/supabase/usersService";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import icon from "../../assets/images/logo-transparent-black.png";
import { Ionicons } from "@expo/vector-icons";

export default function ListsScreen({ navigation }) {
  const [usersLists, setUsersLists] = useState([]);
  const [newList, setNewList] = useState("");
  const [addingList, setAddingList] = useState(false);
  const [editingListId, setEditingListId] = useState(null);
  const [editListName, setEditListName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const updating = useRef(false);

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

  async function handleLongPressToEdit(list) {
    setEditingListId(list.id);
    setEditListName(list.name);
  }

  async function handleUpdateListName() {
    if (!editListName.trim()) {
      setEditingListId(null);
      setEditListName("");
      return;
    }

    updating.current = true;

    // Call your Supabase service to update the name
    const user = await usersService.getCurrentUser();
    const updatedList = await listsService.updateListName(
      editingListId,
      user.id,
      editListName
    );

    if (updatedList) {
      setUsersLists((prev) =>
        prev.map((list) =>
          list.id === editingListId ? { ...list, name: editListName } : list
        )
      );
      setEditingListId(null); // Exit editing mode
      setEditListName("");
      updating.current = false;
      Keyboard.dismiss();
    } else {
      setEditingListId(null);
      setEditListName("");
      updating.current = false;
      setError("Could not update list name");
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

  async function handleSignOut() {
    try {
      const signOut = await supabase.auth.signOut();

      if (!signOut) {
        setError("Cannot sign out right now. Please try again later.");
      } else {
        setError("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  }

  // Use the imported Reanimated components within this function
  function renderRightActions(listId) {
    return function (progress, dragX) {
      return (
        <View style={[styles.deleteActionWrapper]}>
          <Pressable
            style={styles.deleteAction}
            onPress={() => handleDeleteList(listId)}
          >
            <Ionicons
              style={styles.deleteText}
              name="trash"
              size={24}
              color="white"
            />
          </Pressable>
        </View>
      );
    };
  }

  return (
    !loading && (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={styles.container}>
              <View style={styles.navbar}>
                <Text style={styles.topLeft}>Hello, {userName}</Text>
                <Image source={icon} style={styles.logo} />
                <Text style={styles.signOut} onPress={handleSignOut}>
                  Sign Out
                </Text>
              </View>

              <ScrollView
                contentContainerStyle={styles.listSection}
                keyboardShouldPersistTaps="handled"
              >
                {usersLists.map((list) => (
                  <ReanimatedSwipeable
                    key={list.id}
                    friction={2}
                    enableTrackpadTwoFingerGesture
                    rightThreshold={100} // Threshold should match button width
                    renderRightActions={renderRightActions(list.id)}
                  >
                    {/* Conditional Rendering: Show Input when editing, Pressable otherwise */}
                    {editingListId === list.id ? (
                      <TextInput
                        style={[styles.userList, styles.userListText]}
                        value={editListName}
                        onChangeText={setEditListName}
                        autoFocus
                        onBlur={() => {
                          if (!updating.current) {
                            setEditingListId(null);
                            setEditListName("");
                          }
                        }}
                        onSubmitEditing={handleUpdateListName}
                      />
                    ) : (
                      <Pressable
                        style={styles.userList}
                        onPress={() => handleOpenList(list)}
                        onLongPress={() => handleLongPressToEdit(list)} // Long press starts edit
                      >
                        <Text style={styles.userListText}>{list.name}</Text>
                      </Pressable>
                    )}
                  </ReanimatedSwipeable>
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
      </GestureHandlerRootView>
    )
  );
}
