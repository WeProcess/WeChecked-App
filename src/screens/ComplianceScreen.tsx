import Colors from "../../constants/Colors";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { StyleSheet, SafeAreaView } from "react-native";
import { useDisclose } from "native-base";
import CalendarEvent from "../../components/CalendarEvent";
const ComplianceScreens = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.background, height: "100%" }}
    >
      <CalendarEvent />
    </SafeAreaView>
  );
};

export default ComplianceScreens;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
