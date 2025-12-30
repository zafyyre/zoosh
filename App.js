import { View, Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { useEffect, useState } from "react";
import supabase from "./services/supabase/supabaseClient";

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRecovering, setIsRecovering] = useState(false); // Add this

  useEffect(() => {
    // 1. Restore saved session when app opens
    supabase.auth.getSession().then(({ data }) => {
      // Rememeber me getSession()
      setSession(data.session); // storres the restored session in react state
      setLoading(false); // Prevents rednering the wrong navigator
    });

    // 2. Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);

        // If the event is PASSWORD_RECOVERY, we want to make sure
        // the navigator knows to show the Update screen
        if (event === "PASSWORD_RECOVERY") {
          setIsRecovering(true);
        } else if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
          setIsRecovering(false);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) return null; // prevents login screen flashing or flickering

  return (
    <View style={{ flex: 1 }}>
      {/* Beta Banner */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "orange",
          paddingVertical: 4,
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>BETA VERSION</Text>
      </View>

      {/* Your app */}
      <AppNavigator session={session} isRecovering={isRecovering} />
    </View>
  );
}
