import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
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
});
