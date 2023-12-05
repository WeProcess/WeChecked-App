import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigatorParamList } from "./types";
import Colors from "../../constants/Colors";
import WelcomeScreen from "../auth/WelcomeScreen";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import ComplianceScreen from "../screens/ComplianceScreen";
import ComplianceNotScreen from "../screens/ComplianceNotScreen";
import ServicesScreen from "../screens/ServicesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MinWageScreen from "../screens/MinWageScreen";
import HolidayListScreen from "../screens/HolidayListScreen";
import BareActScreen from "../screens/BareActScreen";
import AbstractActScreen from "../screens/AbstractActScreen";
import CaseLawScreen from "../screens/CaseLawScreen";
import GovAddressScreen from "../screens/GovAddressScreen";
import NewsLetterScreen from "../screens/NewsLetterScreen";
import CaseStudyScreen from "../screens/CaseStudyScreen";
import AdminScreen from "../screens/AdminScreen";
import PrivacyScreen from "../screens/PrivacyScreen";
import NotificationScreen from "../screens/NotificationScreen";
import VerificationScreen from "../auth/VerificationScreen";
import BottomTabs from "./Tabs";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerBackVisible: true,
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />

      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Verification"
        component={VerificationScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
          headerBackVisible: false,
          headerTintColor: Colors.primary,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          title: "WeChecked",
          headerTitleStyle: {
            fontWeight: "300",
            fontSize: 22,
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
          title: "Compliance",
        }}
        name="Compliance"
        component={ComplianceScreen}
      />
      <HomeStack.Screen
        options={{ title: "Compliance" }}
        name="ComplianceNot"
        component={ComplianceNotScreen}
      />
      <HomeStack.Screen
        options={{ title: "Minimum Wages" }}
        name="MinWage"
        component={MinWageScreen}
      />
      <HomeStack.Screen
        options={{ title: "Holiday List" }}
        name="Holiday"
        component={HolidayListScreen}
      />
      <HomeStack.Screen
        options={{ title: "Bare Acts" }}
        name="BareAct"
        component={BareActScreen}
      />
      <HomeStack.Screen
        options={{ title: "Abstracts Acts" }}
        name="Abstracts"
        component={AbstractActScreen}
      />
      <HomeStack.Screen
        options={{ title: "Case Laws" }}
        name="CaseLaw"
        component={CaseLawScreen}
      />
      <HomeStack.Screen
        options={{ title: "Government Address" }}
        name="GovAddress"
        component={GovAddressScreen}
      />
      <HomeStack.Screen
        options={{ title: "News Letter" }}
        name="NewsLetter"
        component={NewsLetterScreen}
      />
      <HomeStack.Screen
        options={{ title: "Case Study" }}
        name="CaseStudy"
        component={CaseStudyScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
          // headerShown: false,
        }}
        name="Services"
        component={ServicesScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
        }}
        name="Admin"
        component={AdminScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
          // headerShown: false,
        }}
        name="Privacy"
        component={PrivacyScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
        }}
        name="Notification"
        component={NotificationScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
