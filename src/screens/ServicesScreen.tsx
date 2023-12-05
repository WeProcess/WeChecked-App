import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  Pressable,
  ScrollView,
  Image,
  Avatar,
  Icon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import MinWageScreen from "./MinWageScreen";
import BareActScreen from "./BareActScreen";
import AbstractActScreen from "./AbstractActScreen";
import HolidayListScreen from "./HolidayListScreen";
import CaseLawScreen from "./CaseLawScreen";
import GovAddressScreen from "./GovAddressScreen";
import CaseStudyScreen from "./CaseStudyScreen";
import NewsLetterScreen from "./NewsLetterScreen";
import BlogScreen from "./BlogScreen";
import FAQScreen from "./FAQScreen";
import ComplianceNotScreen from "./ComplianceNotScreen";

const ServicesScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <ScrollView bg={Colors.background}>
      <Box alignItems="center" mb="10" mt={5}>
        <VStack justifyContent="center">
          <HStack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            space={5}
            pb="7"
          >
            <Pressable
              onPress={() => navigation.navigate("Compliance")}
              position="relative"
            >
              {({ isHovered, isPressed }) => {
                return (
                  <Box
                    w={100}
                    h="24"
                    p="2"
                    style={{
                      transform: [
                        {
                          scale: isPressed || isHovered ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <HStack
                      alignItems="center"
                      justifyContent="center"
                      flexWrap="wrap"
                    >
                      <Image
                        source={require("../../assets/icons/2023.gif")}
                        alt="Alternate Text"
                        w="16"
                        h="16"
                      />
                      <Text
                        style={styles.text2}
                        color={Colors.onPrimary}
                        textAlign="center"
                        w={90}
                      >
                        Compliance Calendar
                      </Text>
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
            <MinWageScreen />
            <ComplianceNotScreen />
          </HStack>
          <HStack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            space={5}
            pb="7"
          >
            <BareActScreen />
            <AbstractActScreen />
            <HolidayListScreen />
          </HStack>
          <HStack
            space={5}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            pb="7"
          >
            <CaseLawScreen />
            <NewsLetterScreen />
            <GovAddressScreen />
          </HStack>
          <HStack
            space={5}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <BlogScreen />
            <FAQScreen />
            <CaseStudyScreen />
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.8,
    fontSize: 13,
    bottom: -10,
  },
});
