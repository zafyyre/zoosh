export default {
  expo: {
    name: "zoosh",
    slug: "zoosh",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.zafyyre.zoosh",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff",
      },
      package: "com.zafyyre.zoosh",
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/logo.png",
    },
    extra: {
      SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      eas: { projectId: "c80a17dc-7db6-4a2f-bdbd-2b256f81d2ba" },
    },
  },
};
