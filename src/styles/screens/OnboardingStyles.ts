import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.canvas,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },

  // Upper text layout
  headerSection: {
    marginBottom: 24,
  },
  tagline: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 40,
    color: COLORS.accent,
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 28,
    color: COLORS.ink,
    lineHeight: 34,
    letterSpacing: -0.5,
  },
  description: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.mutedInk,
    marginTop: 12,
  },

  // Detailed features list (Portuguese)
  detailsSection: {
    marginBottom: 32,
    gap: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  detailIcon: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
    marginTop: 8,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: COLORS.ink,
    marginBottom: 2,
  },
  detailDescription: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.mutedInk,
  },

  // Minimalist Belt Bar Section
  beltSection: {
    marginBottom: 24,
  },
  beltSectionTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    color: COLORS.ink,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  beltBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.cardBg,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  // Minimalist horizontal belt shapes
  beltWrapper: {
    alignItems: "center",
    width: "18%", // Even horizontal distribution
  },
  beltWrapperActive: {
    opacity: 1,
  },
  beltWrapperInactive: {
    opacity: 0.5,
  },
  beltShape: {
    height: 14,
    width: "100%",
    borderRadius: 2,
    position: "relative",
    overflow: "hidden",
  },
  beltSleeve: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "32%",
  },
  // Subtitle/Text for each belt
  beltLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    color: COLORS.mutedInk,
    marginTop: 6,
    textAlign: "center",
  },
  beltLabelActive: {
    fontFamily: "Inter_700Bold",
    color: COLORS.ink,
  },

  // CTA Stack
  actionContainer: {
    gap: 12,
    marginTop: 16,
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
  secondaryButton: {
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "transparent",
  },
  secondaryButtonText: {
    fontFamily: "Inter_600SemiBold",
    color: COLORS.ink,
    fontSize: 15,
  },
  tertiaryButton: {
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  tertiaryButtonText: {
    fontFamily: "Inter_600SemiBold",
    color: COLORS.accent,
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
