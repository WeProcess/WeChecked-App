import { View, StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  Pressable,
  useDisclose,
  ScrollView,
} from "native-base";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import UploadFiles from "../../components/UploadFiles";
import CaseStudy from "../admin/CaseStudy";
import AbstractAct from "../admin/AbstractAct";
import MiniWage from "../admin/MiniWage";
import BareAct from "../admin/BareAct";
import Compliance from "../admin/Compliance";
import FAQUpload from "../admin/FAQUpload";
import Amendment from "../admin/Amendment";
import CaseLaw from "../admin/CaseLaw";
import GovtAddress from "../admin/GovtAddress";
import HolidayList from "../admin/HolidayList";

const AdminScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Box safeArea bg={Colors.background} h="100%">
      <Center mb={16}>
        <ScrollView>
          <VStack>
            {/* <Pressable
              onPress={() => navigation.navigate("Home")}
              position="relative"
            >
              {({ isHovered, isPressed }) => {
                return (
                  <Box
                    bgColor={
                      isPressed ? "#3E4095" : isHovered ? "#3E4095" : "#3E4095"
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                      shadowColor: "black",
                      shadowOffset: {
                        width: 0,
                        height: 6,
                      },
                      shadowOpacity: 0.39,
                      shadowRadius: 8.3,
                      elevation: 13,
                    }}
                    bg={Colors.onPrimary}
                    w="80"
                    h="10"
                    px="4"
                    py={1}
                    rounded="10"
                    shadow={3}
                    borderWidth="1"
                    borderColor={Colors.text}
                  >
                    <Text
                      color={Colors.text}
                      fontSize="lg"
                      style={styles.text1}
                      pt="1"
                    >
                      Case Study
                    </Text>
                  </Box>
                );
              }}
            </Pressable> */}
            <CaseStudy />
            <AbstractAct />
            <MiniWage />
            <BareAct />
            <Compliance />
            <FAQUpload />
            <Amendment />
            <CaseLaw />
            <GovtAddress />
            <HolidayList />
          </VStack>
        </ScrollView>
      </Center>
    </Box>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
    bottom: -10,
  },
  text1: {
    fontWeight: "300",
    color: Colors.text,
    letterSpacing: 0.9,
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
