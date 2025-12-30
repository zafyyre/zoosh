import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

export default function AppNavigator({ session, isRecovering }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session ? ( // if a session exists, log in
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            initialParams={{ isRecovering }}
          />
        ) : (
          // if not stay here
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
