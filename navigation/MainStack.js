// navigation/MainStack.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayoutStack from "./MainLayoutStack";
import UpdateInfoScreen from "../screens/auth/updateInfo/updateInfoScreen";

const Stack = createNativeStackNavigator();

export default function MainStack({ route }) {
  const isRecovering = route.params?.isRecovering;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isRecovering ? "UpdateInfoScreen" : "MainLayout"}
    >
      <Stack.Screen name="UpdateInfoScreen" component={UpdateInfoScreen} />

      <Stack.Screen name="MainLayout" component={MainLayoutStack} />
    </Stack.Navigator>
  );
}
