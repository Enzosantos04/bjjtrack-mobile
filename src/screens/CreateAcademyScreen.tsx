import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "../styles/screens/CreateAcademyStyles";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import BackButton from "../components/BackButton";

export default function CreateAcademyScreen() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.canvas }}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View>
            <View style={styles.navHeader}>
              <BackButton />
            </View>

            <View style={styles.headerSection}>
              <Text style={styles.title}>Cadastre sua Academia</Text>
              <Text style={styles.subtitle}>
                Preencha os dados básicos para iniciar o perfil administrativo
                da sua equipe.
              </Text>
            </View>

            <View style={styles.formContainer}>
              <Input
                label="Nome da Academia"
                placeholder="Ex: Gracie Barra Centro"
                editable={false}
              />

              <Input
                label="Professor Responsável"
                placeholder="Ex: Mestre Carlos Gracie"
                editable={false}
              />

              <Input
                label="Cidade / Estado"
                placeholder="Ex: Rio de Janeiro, RJ"
                editable={false}
              />

              <Input
                label="WhatsApp / Telefone"
                placeholder="Ex: (21) 99999-9999"
                keyboardType="phone-pad"
                editable={false}
              />
            </View>
          </View>

          <View style={styles.actionContainer}>
            <Button variant="primary" text="Criar Perfil da Academia" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
