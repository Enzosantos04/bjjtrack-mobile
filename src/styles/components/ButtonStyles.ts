import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
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
