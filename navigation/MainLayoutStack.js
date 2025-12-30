// navigation/MainLayoutStack.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import ListsScreen from "../screens/lists/listsScreen";
import ItemsScreen from "../screens/items/itemsScreen";

const Stack = createNativeStackNavigator();

export default function MainLayoutStack() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Header /> */}

      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ListsScreen" component={ListsScreen} />
          <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
        </Stack.Navigator>
      </View>

      {/* <Navbar /> */}
    </View>
  );
}
