import { StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import React, { useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  Pressable,
  Input,
  ScrollView,
  Image,
  Avatar,
  Icon,
} from "native-base";
import Colors from "../../constants/Colors";

import { RouteProp } from "@react-navigation/native";
import { HomeStackNavigatorParamList } from "../navigation/types";

interface HomeScreenProps {
  route: RouteProp<HomeStackNavigatorParamList, "Feedback">;
}

const FeedbackScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [name, setName] = React.useState("");
  const [emailID, setEmail] = React.useState("");

  // const email = route.params.email;

  const email = "avinash@karmamgmt.com";

  useEffect(() => {
    // getUserData();
    // alert(props.sname);
  }, []);

  async function sendFeedback() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/update_profile.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: emailID,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          alert("Profile updated successfully.");
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
    }
  }

  return (
    <ScrollView bg={Colors.background}>
      <Box alignItems="center" mb="10" mt={5}>
        <VStack justifyContent="center">
          <Center>
            <Center pb={5}>
              <Image
                source={require("../../assets/icon.png")}
                size="xl"
                alt="Logo"
              />
              <Text style={styles.text} color={Colors.onPrimary} fontSize="sm">
                Welcome to
              </Text>
              <Text style={styles.text} color={Colors.primary} fontSize="lg">
                WeChecked
              </Text>
            </Center>

            <HStack justifyContent="space-between" mt="5">
              <Box alignSelf="center" justifyContent="space-between">
                <Box w="100%">
                  <Stack space={4} w="100%" alignItems="center">
                    <Input
                      fontSize="sm"
                      px="3"
                      w={{ base: "100%", md: "100%" }}
                      value={name}
                      onChangeText={setName}
                      variant="underlined"
                      borderColor={Colors.primary}
                      color={Colors.onPrimary}
                      borderRadius="10"
                      textContentType="username"
                      blurOnSubmit
                      autoCapitalize="words"
                      autoComplete="username"
                      keyboardType="default"
                      placeholder="Feedback"
                      style={styles.input}
                      aria-required="true"
                      focusOutlineColor={Colors.onPrimary}
                      multiline={true}
                      numberOfLines={5}
                    />
                  </Stack>
                </Box>
                <Box alignItems="center" mt="5">
                  <Pressable mt="5" onPress={() => sendFeedback()}>
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
                            Send
                          </Text>
                        </Box>
                      );
                    }}
                  </Pressable>
                </Box>
              </Box>
            </HStack>
          </Center>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.8,
  },
  input: {
    fontWeight: "300",
    letterSpacing: 0.8,
    height: 240,
  },
});
