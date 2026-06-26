import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.canvas,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
    justifyContent: "space-between",
  },

  // Navigation / Header row
  navHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },
  backButton: {
    paddingVertical: 8,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    color: COLORS.accent,
  },

  // Header text
  headerSection: {
    marginBottom: 32,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 28,
    color: COLORS.ink,
    lineHeight: 34,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.mutedInk,
    marginTop: 8,
  },

  // Form Fields
  formContainer: {
    gap: 20,
    marginBottom: 40,
  },
  fieldGroup: {
    gap: 6,
  },
  label: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: COLORS.mutedInk,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  input: {
    fontFamily: "Inter_400Regular",
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.cardBg,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.ink,
  },

  // Helper Hint
  gestureHint: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: COLORS.mutedInk,
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },

  // CTA Stack
  actionContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: COLORS.accent,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontFamily: "Inter_600SemiBold",
    color: COLORS.canvas,
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
