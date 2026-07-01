import React from "react";
import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import styles from "../styles/screens/CreateAcademyStyles";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import BackButton from "../components/BackButton";
import { useState } from "react";
import { useCreateAcademy } from "@/hooks/useCreateAcademy";

export default function CreateAcademyScreen() {
  const { mutate: createAcademy } = useCreateAcademy();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleCreateAcademy = () => {
    createAcademy(
      {
        academy: {
          name: name,
          slug: slug,
          logoUrl: logoUrl,
        },
        admin: {
          name: adminName,
          email: adminEmail,
          password: adminPassword,
        },
      },
      {
        onSuccess: (data) => {
          Alert.alert("Academy created successfully:", data);
        },
      },
    );
  };
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
                editable={true}
                value={name}
                onChangeText={setName}
              />
              <Input
                label="Slug da Academia"
                placeholder="Ex: gracie-barra-centro"
                editable={true}
                value={slug}
                onChangeText={setSlug}
              />

              <Input
                label="Professor Responsável"
                placeholder="Ex: Mestre Carlos Gracie"
                editable={true}
                value={adminName}
                onChangeText={setAdminName}
              />

              <Input
                label="Email do Administrador"
                placeholder="Ex: admin@graciebarra.com"
                editable={true}
                value={adminEmail}
                onChangeText={setAdminEmail}
              />

              <Input
                label="Senha do Administrador"
                placeholder="*******"
                editable={true}
                value={adminPassword}
                onChangeText={setAdminPassword}
                secureTextEntry
              />
            </View>
          </View>

          <View style={styles.actionContainer}>
            <Button
              variant="primary"
              text="Criar Perfil da Academia"
              onPress={handleCreateAcademy}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
