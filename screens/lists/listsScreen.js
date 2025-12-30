import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "./listsStyles";
import * as listsService from "../../services/supabase/listsService";
import * as usersService from "../../services/supabase/usersService";

export default function ListsScreen({ navigation }) {
  const [usersLists, setUsersLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function loadData() {
      const user = await usersService.getCurrentUser();
      const result = await listsService.fetchAllListsByUser(user.id);

      console.log(result);
      setUsersLists(result);
      setLoading(false);
    }

    loadData();
  }, []);

  async function openList(list) {
    if (list) {
      console.log("Opening list:", list.name);
      navigation.navigate("ItemsScreen", { listId: list.id });
      return;
    }
    console.log("Cannot open list:", list.name);
  }

  {
    loading && <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.listSection}
        showsVerticalScrollIndicator={false}
      >
        {usersLists.map((list) => (
          <TouchableOpacity
            key={list.id}
            style={styles.userList}
            activeOpacity={0.8}
            onPress={() => openList(list)}
          >
            <Text style={styles.userListText}>{list.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addList} activeOpacity={0.8}>
        <Text style={styles.addListButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
