import type { CompositeNavigationProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type HomeStackNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Verification: { email: string };
  Home: { email: string };
  Compliance: undefined;
  ComplianceNot: undefined;
  Services: undefined;
  Profile: { email: string | undefined };
  MinWage: undefined;
  Holiday: undefined;
  BareAct: undefined;
  Abstracts: undefined;
  CaseLaw: undefined;
  GovAddress: undefined;
  NewsLetter: undefined;
  CaseStudy: undefined;
  Admin: undefined;
  Privacy: undefined;
  Contact: undefined;
  Feedback: undefined;
  Settings: undefined;
  Notification: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: { email: string };
  Notification: undefined;
  Menu: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, "Home">,
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Home">
>;

export type HomeStack1NavigatorParamList = {
  Home:
    | {
        email: string;
      }
    | undefined;
};
