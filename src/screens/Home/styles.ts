import { StyleSheet } from "react-native";

export const getStyles = (isLightMode: boolean) => {
  const bgColor = isLightMode ? "#ffffff" : "#050c17";
  const textColor = isLightMode ? "#050c17" : "#fff";
  const subTextColor = isLightMode ? "#555555" : "#a0a0a0";
  const accentColor = isLightMode ? "#0088aa" : "#00d1ff";
  const footerBg = isLightMode ? "#0088aa" : "#00d1ff";
  const footerText = isLightMode ? "#ffffff" : "#050c17";

  return StyleSheet.create({
    container: { flex: 1, backgroundColor: bgColor },
    scrollContent: { paddingBottom: 20 },
    header: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 30,
    },
    logoText: {
      color: textColor,
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 2,
    },
    logoIcon: { color: accentColor, fontSize: 20, marginLeft: 5 },
    imageWrapper: { alignItems: "center", marginVertical: 20 },
    imageFrame: {
      borderWidth: 2,
      borderColor: accentColor,
      borderRadius: 15,
      padding: 5,
    },
    profileImg: { width: 300, height: 250, borderRadius: 10 },
    content: { paddingHorizontal: 30 },
    title: {
      color: textColor,
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 15,
    },
    highlight: { color: accentColor },
    description: {
      color: subTextColor,
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 25,
    },

    mainButton: {
      backgroundColor: accentColor,
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      color: isLightMode ? "#fff" : "#050c17",
      fontWeight: "bold",
      fontSize: 16,
    },

    outlineButton: {
      borderWidth: 1,
      borderColor: accentColor,
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: 30,
    },
    outlineButtonText: { color: accentColor, fontWeight: "bold", fontSize: 16 },

    sectionTitle: {
      color: textColor,
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
    },
    switchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    switchLabel: { color: subTextColor, fontSize: 14 },

    socialButton: {
      borderWidth: 1,
      borderColor: accentColor,
      padding: 12,
      borderRadius: 5,
      marginBottom: 10,
      alignItems: "center",
    },
    socialText: { color: textColor, fontWeight: "500" },

    footer: {
      backgroundColor: footerBg,
      padding: 15,
      alignItems: "center",
      marginTop: 30,
    },
    footerText: { color: footerText, fontWeight: "bold" },
    footerSubText: { color: footerText, fontSize: 12 },
  });
};
