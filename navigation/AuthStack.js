import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/auth/signin/signInScreen";
import SignUpScreen from "../screens/auth/signup/signUpScreen";
import ResetScreen from "../screens/auth/reset/resetScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ResetScreen" component={ResetScreen} />
    </Stack.Navigator>
  );
}
