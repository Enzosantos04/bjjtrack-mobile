import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import styles from "../styles/components/InputStyles";
import { COLORS } from "../constants/colors";

interface InputProps extends TextInputProps {
  label: string;
}

export default function Input({ label, style, ...props }: InputProps) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={COLORS.mutedInk}
        {...props}
      />
    </View>
  );
}
