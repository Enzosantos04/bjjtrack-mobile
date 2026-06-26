import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/components/BackButtonStyles";

interface BackButtonProps {
  onPress?: () => void;
}

export default function BackButton({ onPress }: BackButtonProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      style={styles.backButton}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.backButtonText}>← Voltar</Text>
    </TouchableOpacity>
  );
}
