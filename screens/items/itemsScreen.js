import { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import stringSimilarity from "string-similarity";
import { useAudioPlayer, setAudioModeAsync } from "expo-audio";
import styles from "./itemsStyles";
import * as itemsService from "../../services/supabase/itemsService";

export default function ItemsScreen({ navigation, route }) {
  const { listId } = route.params;
  // State to manage input, grocery list items, and currently editing item ID
  const inputRef = useRef(null);

  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [loading, setLoading] = useState(true);

  // Listen to grocery items from Firestore constantly
  // and update the state when items change
  useEffect(
    function () {
      async function loadData() {
        const result = await itemsService.getAllItemsByList(listId);

        console.log(result);
        setListItems(result);
        setLoading(false);
      }

      loadData();
    },
    [listId]
  );

  // const handleSaveItem = async () => {
  //   const trimmedInput = input.trim();
  //   if (trimmedInput === "") return;

  //   const SIMILARITY_THRESHOLD = 0.7;

  //   const exactMatch = listItems.some(
  //     (item) => item.groceryItem.toLowerCase() === trimmedInput.toLowerCase()
  //   );

  //   const fuzzyMatch = listItems.find(
  //     (item) =>
  //       stringSimilarity.compareTwoStrings(
  //         item.groceryItem.toLowerCase(),
  //         trimmedInput.toLowerCase()
  //       ) > SIMILARITY_THRESHOLD
  //   );

  //   // Ask before adding if a similar or exact item is found
  //   if (!editingItemId && (exactMatch || fuzzyMatch)) {
  //     const matchedItem = fuzzyMatch?.groceryItem || trimmedInput;
  //     Alert.alert(
  //       "Duplicate or Similar Item",
  //       `"${trimmedInput}" looks similar to "${matchedItem}". Add it anyway?`,
  //       [
  //         { text: "No", style: "cancel" },
  //         {
  //           text: "Yes",
  //           onPress: async () => {
  //             try {
  //               await addItem(trimmedInput);
  //               setInput("");
  //             } catch (e) {
  //               console.error("Error adding item:", e);
  //             }
  //           },
  //         },
  //       ]
  //     );
  //     return;
  //   }

  // If no duplicates, proceed with adding or updating the item
  // If editing, update the item; otherwise, add a new item
  // Reset the input field after submission
  // and clear the editing state
  //   try {
  //     if (editingItemId) {
  //       await updateItem(editingItemId, trimmedInput);
  //       setEditingItemId(null);
  //       Keyboard.dismiss();
  //     } else {
  //       await addItem(trimmedInput);
  //     }
  //     setInput("");
  //     setEditingItemId(null);
  //   } catch (e) {
  //     console.error("Error submitting item:", e);
  //   }
  // };

  // Handle checkmark press to delete the item
  // const handleCheckmark = (id, name) => {
  //   // Unpack the current checked items
  //   // and set the item as checked
  //   // After a short delay, delete the item
  //   // to allow the animation to play
  //   // before removing it from the list
  //   const newCheckedItems = { ...checkedItems };
  //   newCheckedItems[id] = true;
  //   setCheckedItems(newCheckedItems);

  //   // Play ding sound
  //   playDing();

  //   setTimeout(() => {
  //     deleteItem(id);
  //   }, 1500); // Give it a second and a half to play the animation before deleting
  // };

  // const handleDelete = (id, name) => {
  //   Alert.alert("Delete Item", `Are you sure you want to delete "${name}"?`, [
  //     { text: "Cancel", style: "cancel" },
  //     {
  //       text: "Delete",
  //       style: "destructive",
  //       onPress: async () => {
  //         try {
  //           await deleteItem(id);
  //         } catch (e) {
  //           console.error("Error deleting item:", e);
  //         }
  //       },
  //     },
  //   ]);
  // };

  // const dingPlayer = useAudioPlayer(require("../../assets/sounds/ding.mp3"));

  // async function playDing() {
  //   await setAudioModeAsync({ playsInSilentMode: false }); // iOS mute-switch fix
  //   dingPlayer.seekTo(0); // reset because expo-audio doesn't auto-rewind
  //   dingPlayer.play();
  // }

  {
    loading && <Text>Loading...</Text>;
  }

  // Render the grocery list items
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.listSection}
        showsVerticalScrollIndicator={false}
      >
        {listItems.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <View style={styles.checkContainer}>
              <View style={styles.emptyCircle} />
            </View>

            <View style={styles.textContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ alignSelf: "flex-start" }}
                activeOpacity={0.7}
              >
                <Text style={styles.listItemText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addList} activeOpacity={0.8}>
        <Text style={styles.addListButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
