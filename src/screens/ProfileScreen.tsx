import { StyleSheet, View } from "react-native";
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
  route: RouteProp<HomeStackNavigatorParamList, "Profile">;
}

const ProfileScreen = ({ route }: HomeScreenProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [name, setName] = React.useState("");
  const [emailID, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [userID, setuserID] = React.useState("");

  const email = route.params.email;

  // const email = "avinash@karmamgmt.com";

  useEffect(() => {
    getUserData();
    // alert(props.sname);
  }, []);

  async function getUserData() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/home_page.php",
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
        .then(async (data) => {
          // alert(JSON.stringify(data[0].data_var.name));
          // setUserData(data[0].data_var);
          setName(data[0].data_var.name);
          setEmail(data[0].data_var.email);
          setMobile(data[0].data_var.mobile_number);
          setuserID(data[0].data_var.userid);

          // alert(HomeStackNavigator);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
    }
  }

  async function updateUserData() {
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
            mobile_number: mobile,
            userid: userID,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data[0].data_var.name));
          // setUserData(data[0].data_var);
          setName(data[0].data_var.name);
          setEmail(data[0].data_var.email);
          setMobile(data[0].data_var.mobile_number);
          setuserID(data[0].data_var.userid);
          alert("Profile updated successfully.");
          navigation.navigate("Login");
          // alert(HomeStackNavigator);
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
            <Avatar
              bg={Colors.text}
              size="2xl"
              mr="2"
              source={require("../../assets/profile.jpg")}
            >
              RS
            </Avatar>

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
                      placeholder="Name"
                      style={styles.text}
                      aria-required="true"
                      focusOutlineColor={Colors.onPrimary}
                    />
                    <Input
                      fontSize="sm"
                      px="3"
                      w={{ base: "100%", md: "100%" }}
                      value={emailID}
                      onChangeText={setEmail}
                      variant="underlined"
                      borderColor={Colors.primary}
                      color={Colors.onPrimary}
                      borderRadius="10"
                      cursorColor={Colors.primary}
                      autoCapitalize="none"
                      textContentType="emailAddress"
                      blurOnSubmit
                      autoComplete="email"
                      keyboardType="email-address"
                      placeholder="Email"
                      style={styles.text}
                      focusOutlineColor={Colors.onPrimary}
                    />

                    <Input
                      fontSize="sm"
                      px="3"
                      w={{ base: "100%", md: "100%" }}
                      value={mobile}
                      color={Colors.onPrimary}
                      focusOutlineColor={Colors.onPrimary}
                      onChangeText={(text) => setMobile(text)}
                      variant="underlined"
                      borderColor={Colors.primary}
                      borderRadius="10"
                      maxLength={10}
                      autoComplete="username"
                      keyboardType="number-pad"
                      placeholder="Contact No."
                      style={styles.text}
                    />
                  </Stack>
                </Box>
                <Box alignItems="center" mt="5">
                  <Pressable mt="5" onPress={() => updateUserData()}>
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
                            Save
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

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.8,
  },
});
