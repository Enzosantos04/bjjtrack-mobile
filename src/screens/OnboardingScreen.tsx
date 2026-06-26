import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "../styles/screens/OnboardingStyles";
import { COLORS } from "../constants/colors";
import { BELTS } from "../constants/belts";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Button from "../components/Button";

type RootStackParamList = {
  CreateAcademy: undefined;
  SignIn: undefined;
  StudentSignIn: undefined;
};

interface BeltProps {
  name: string;
  color: string;
  sleeveColor: string;
  hasBorder?: boolean;
}

const BELT_DATA: BeltProps[] = [
  {
    name: "Branca",
    color: BELTS.white,
    sleeveColor: BELTS.sleeveBlack,
  },
  {
    name: "Azul",
    color: BELTS.blue,
    sleeveColor: BELTS.sleeveBlack,
  },
  {
    name: "Roxa",
    color: BELTS.purple,
    sleeveColor: BELTS.sleeveBlack,
  },
  {
    name: "Marrom",
    color: BELTS.brown,
    sleeveColor: BELTS.sleeveBlack,
  },
  {
    name: "Preta",
    color: BELTS.black,
    sleeveColor: BELTS.sleeveRed,
  },
];

export default function OnboardingScreen() {
  const [selectedBelt, setSelectedBelt] = useState<number>(0);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCreateAcademy = () => {
    navigation.navigate("CreateAcademy");
  };

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handleStudentSignIn = () => {
    navigation.navigate("StudentSignIn");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.canvas }}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text style={styles.tagline}>BJJ Track</Text>
            <Text style={styles.title}>
              Gerencie sua academia direto do tatame.
            </Text>
            <Text style={styles.description}>
              Uma plataforma desenvolvida sob medida para professores de
              Jiu-Jitsu. Reduza a burocracia administrativa e dedique mais tempo
              às aulas.
            </Text>
          </View>

          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <View style={styles.detailIcon} />
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailTitle}>Chamada em 3 Toques</Text>
                <Text style={styles.detailDescription}>
                  Registre a presença de toda a turma de forma rápida, sem
                  perder o ritmo dos treinos.
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.detailIcon} />
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailTitle}>Histórico de Graduações</Text>
                <Text style={styles.detailDescription}>
                  Acompanhe faixas e graus dos seus alunos com relatórios
                  automáticos de frequência.
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.detailIcon} />
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailTitle}>Gestão de Cadastro</Text>
                <Text style={styles.detailDescription}>
                  Controle a matrícula, dados de contato e ficha de saúde de
                  cada atleta em um só lugar.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.beltSection}>
            <Text style={styles.beltSectionTitle}>Evolução de faixas</Text>
            <View style={styles.beltBarContainer}>
              {BELT_DATA.map((belt, index) => {
                const isActive = selectedBelt === index;
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.beltWrapper,
                      isActive
                        ? styles.beltWrapperActive
                        : styles.beltWrapperInactive,
                    ]}
                    activeOpacity={0.7}
                    onPress={() => setSelectedBelt(index)}
                  >
                    {/* Highly Minimalist Belt Shape */}
                    <View
                      style={[
                        styles.beltShape,
                        { backgroundColor: belt.color },
                        belt.hasBorder && {
                          borderColor: BELTS.whiteBorder,
                          borderWidth: 1,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.beltSleeve,
                          { backgroundColor: belt.sleeveColor },
                        ]}
                      />
                    </View>

                    <Text
                      style={[
                        styles.beltLabel,
                        isActive && styles.beltLabelActive,
                      ]}
                    >
                      {belt.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.actionContainer}>
            <Button
              variant="primary"
              text="Cadastrar Academia"
              onPress={handleCreateAcademy}
            />

            <Button
              variant="secondary"
              text="Entrar como Administrador"
              onPress={handleSignIn}
            />

            <Button
              variant="tertiary"
              text="Entrar como Aluno"
              onPress={handleStudentSignIn}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
