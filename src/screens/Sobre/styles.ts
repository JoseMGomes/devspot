import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050c17",
  },
  scrollContent: {
    paddingBottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  logoIcon: {
    color: "#00d1ff",
    fontSize: 20,
    marginLeft: 5,
  },
  backButton: {
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  backButtonText: {
    color: "#00d1ff",
    fontSize: 16,
    fontWeight: "600",
  },
  mainTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  profileSection: {
    paddingHorizontal: 25,
    marginBottom: 50,
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#00d1ff",
    borderRadius: 15,
    padding: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 10,
    backgroundColor: "#1a222f",
  },
  nameTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  bioText: {
    color: "#a0a0a0",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "justify",
  },
  footer: {
    backgroundColor: "#00d1ff",
    padding: 20,
    alignItems: "center",
    marginTop: 10,
  },
  footerText: {
    color: "#050c17",
    fontWeight: "bold",
    fontSize: 14,
  },
  footerSubText: {
    color: "#050c17",
    fontSize: 12,
  },
});
