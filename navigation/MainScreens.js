import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListsScreen from "../screens/lists/listsScreen";
import ItemsScreen from "../screens/items/itemsScreen";
// import CouponsScreen from "../screens/coupons/couponsScreen";

const Stack = createNativeStackNavigator();

export default function MainScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListsScreen" component={ListsScreen} />
      <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
    </Stack.Navigator>
  );
}
