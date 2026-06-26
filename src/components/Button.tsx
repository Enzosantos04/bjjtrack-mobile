import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import styles from "../styles/components/ButtonStyles";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  buttonStyle,
  textStyle,
  onPress,
  disabled,
  ...props
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryButton;
      case "tertiary":
        return styles.tertiaryButton;
      case "primary":
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryButtonText;
      case "tertiary":
        return styles.tertiaryButtonText;
      case "primary":
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), buttonStyle]}
      activeOpacity={variant === "tertiary" ? 0.7 : 0.8}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={[getTextStyle(), textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
