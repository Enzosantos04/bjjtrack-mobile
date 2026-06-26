import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import CreateAcademyScreen from "../screens/CreateAcademyScreen";
import SignInScreen from "../screens/SignInScreen";
import StudentSignInScreen from "../screens/StudentSignInScreen";

export type RootStackParamList = {
  Onboarding: undefined;
  CreateAcademy: undefined;
  SignIn: undefined;
  StudentSignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="CreateAcademy" component={CreateAcademyScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="StudentSignIn" component={StudentSignInScreen} />
    </Stack.Navigator>
  );
}
