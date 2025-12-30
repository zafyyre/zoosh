// components/back.js
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  // Only show if there's a screen to go back to
  if (!navigation.canGoBack()) return null;

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: "absolute",
        top: 60, // Adjust this based on your phone's notch
        left: 20,
        zIndex: 10,
      }}
    >
      <Ionicons name="arrow-back" size={28} color="black" />
    </TouchableOpacity>
  );
}
