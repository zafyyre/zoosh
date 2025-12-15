import { registerRootComponent } from "expo";
import SignInScreen from "./screens/auth/signin/signInScreen";
import ListsScreen from "./screens/lists/listsScreen"

export default function App() {
  return <SignInScreen />;
}

registerRootComponent(App);
