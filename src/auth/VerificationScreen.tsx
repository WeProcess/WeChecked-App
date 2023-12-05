import {
  Dimensions,
  StyleSheet,
  AppRegistry,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
const { height } = Dimensions.get("window");
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  Input,
  Stack,
  Pressable,
  Icon,
  Alert,
} from "native-base";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackNavigatorParamList } from "../navigation/types";
import { useEffect, useState } from "react";

interface HomeScreenProps {
  route: RouteProp<HomeStackNavigatorParamList, "Verification">;
}

const VerificationScreen = ({ route }: HomeScreenProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [code, setCode] = React.useState("");

  const email = route.params.email;

  useEffect(() => {
    getOTP();
  }, []);

  async function getOTP() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/email-otp.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (response) => {
          alert("Please check your email for OTP.");
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
    }
  }

  async function checkOTP() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/check-otp.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: code,
            email: email,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (response) => {
          if (JSON.stringify(response) === "1") {
            navigation.navigate("Home", { email });
          } else {
            alert("Please enter correct OTP.");
          }
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
    }
  }

  return (
    <Box
      flex="1"
      px="5"
      h="100"
      maxWidth="100%"
      safeArea
      bg={Colors.background}
    >
      <ImageBackground
        style={{
          height: height / 3.4,
        }}
        resizeMode="contain"
        source={require("../../assets/img/verification.png")}
      />
      <ScrollView>
        <Center>
          <HStack justifyContent="space-between" pt="24">
            <Box alignSelf="center" justifyContent="space-between">
              <VStack space={4} alignItems="center">
                <Text
                  fontSize="3xl"
                  bold
                  color={Colors.primary}
                  style={styles.text}
                >
                  Email Verification
                </Text>
              </VStack>
              <VStack w="96" py="4" space={4} alignItems="center">
                <Text
                  fontSize="md"
                  color={Colors.onPrimary}
                  style={styles.text}
                >
                  We send verification code on your email id
                </Text>
              </VStack>
              <Center>
                <Box w="100%" pt="12" alignItems="center">
                  <Stack space={4} w="80%" alignItems="center">
                    <Input
                      cursorColor={Colors.onPrimary}
                      borderColor={Colors.primary}
                      focusOutlineColor={Colors.onPrimary}
                      fontSize="md"
                      placeholder="Enter Verification code"
                      // value="code"
                      onChangeText={setCode}
                      color={Colors.onPrimary}
                    />
                  </Stack>
                </Box>
              </Center>
              <Box alignItems="center" pt="5">
                <Pressable onPress={checkOTP}>
                  {({ isHovered, isPressed }) => {
                    return (
                      <Box
                        alignItems="center"
                        w="300"
                        bgColor={
                          isPressed
                            ? "#e2e9fe"
                            : isHovered
                            ? "#e2e9f"
                            : "#e2e9f"
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
                        bg={Colors.text}
                        px="50"
                        py="1"
                        rounded="50"
                        borderWidth="1"
                        borderColor={Colors.text}
                      >
                        <Text
                          style={styles.text}
                          color={Colors.onPrimary}
                          fontWeight="medium"
                          fontSize="xl"
                        >
                          Click to Verify
                        </Text>
                      </Box>
                    );
                  }}
                </Pressable>
              </Box>
              <Box mt="5" mb="5" alignItems="center">
                <Pressable flexDirection="row">
                  <Text
                    onPress={getOTP}
                    fontSize="xs"
                    underline
                    color={Colors.gray}
                  >
                    Resend Code
                  </Text>
                </Pressable>
              </Box>
            </Box>
          </HStack>
        </Center>
      </ScrollView>
    </Box>
  );
};

VerificationScreen.navigationOptions = {
  tabBarVisible: false,
};

export default VerificationScreen;

AppRegistry.registerComponent("Register", () => VerificationScreen);

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.8,
  },
});
