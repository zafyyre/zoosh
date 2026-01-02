export default {
  expo: {
    name: "zoosh",
    slug: "zoosh",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/logo-transparent-black.png",
    userInterfaceStyle: "light",
    scheme: "exp://s83sldu-zafyyre-8081.exp.direct",
    plugins: ["expo-audio", "expo-asset"],
    splash: {
      image: "./assets/images/logo-transparent-black.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.zafyyre.zoosh",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/logo-transparent-black.png",
        backgroundColor: "#ffffff",
      },
      package: "com.zafyyre.zoosh",
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/images/logo-transparent-black.png",
    },
    extra: {
      SUPABASE_URL: process.env.REACT_APP_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.REACT_APP_SUPABASE_ANON_KEY,
      eas: { projectId: "c80a17dc-7db6-4a2f-bdbd-2b256f81d2ba" },
    },
  },
};
