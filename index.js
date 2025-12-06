import { registerRootComponent } from "expo";
import SignInScreen from "./screens/auth/signin/signInScreen";

export default function App() {
  return <SignInScreen />;
}

registerRootComponent(App);
