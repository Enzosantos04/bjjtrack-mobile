import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
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
});
