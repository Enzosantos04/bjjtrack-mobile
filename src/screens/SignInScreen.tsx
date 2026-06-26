import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/screens/SignInStyles';
import { COLORS } from '../constants/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import BackButton from '../components/BackButton';

export default function SignInScreen() {
  const handleSignIn = () => {
    console.log('Action: Authenticate administrator account');
  };

  const handleForgotPassword = () => {
    console.log('Action: Request password recovery flow');
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
            {/* Nav Header (Back Option) */}
            <View style={styles.navHeader}>
              <BackButton />
            </View>

            {/* Header Title & Intro */}
            <View style={styles.headerSection}>
              <Text style={styles.title}>Acesse sua Conta</Text>
              <Text style={styles.subtitle}>
                Entre com suas credenciais para gerenciar os alunos, frequências e graduações.
              </Text>
            </View>

            {/* Input Form Fields using Reusable Inputs */}
            <View style={styles.formContainer}>
              <Input 
                label="E-mail"
                placeholder="Ex: professor@academia.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={false} // No logic for the moment
              />

              <Input 
                label="Senha"
                placeholder="Digite sua senha"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                editable={false}
              />
            </View>
          </View>

          {/* Action buttons stack using Reusable Buttons */}
          <View style={styles.actionContainer}>
            <Button 
              variant="primary"
              text="Entrar"
              onPress={handleSignIn}
            />
            
            <Button 
              variant="tertiary"
              text="Esqueci minha senha"
              onPress={handleForgotPassword}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
