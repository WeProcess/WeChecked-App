import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import * as React from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  HomeScreenNavigationProp,
  HomeStack1NavigatorParamList,
} from "../navigation/types";
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
  Image,
} from "native-base";
import HomeScreen from "../screens/HomeScreen";

const { height } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [hidePassword, setHidePassword] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleRegister = () => {
    if (email === "" || password === "") {
      () => {
        alert("Please fill all the fields!");
      };
      return;
    }

    UserLoginFunction();
  };

  async function UserLoginFunction() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/samplelogin.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (response) => {
          if (JSON.stringify(response) === "1") {
            navigation.navigate("Home", { email });
          } else if (JSON.stringify(response) === "2") {
            navigation.navigate("Verification", { email });
          } else {
            alert(
              "Filled information is" + " Empty or " + JSON.stringify(response)
            );
          }
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
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
          height: height / 2.3,
          paddingBottom: 0,
        }}
        resizeMode="contain"
        source={require("../../assets/img/Onboarding.png")}
      />
      <ScrollView>
        <Center>
          <HStack justifyContent="space-between">
            <Box alignSelf="center" justifyContent="space-between">
              <VStack space={4} alignItems="center">
                <Text fontSize="3xl" color={Colors.primary} style={styles.text}>
                  Login Here
                </Text>
              </VStack>
              <VStack py="4" space={4} alignItems="center">
                <Text
                  fontSize="lg"
                  color={Colors.onPrimary}
                  style={styles.text}
                >
                  Welcome back you've been missed!
                </Text>
              </VStack>
              {/* <Box bg="#d823001c" px="5" rounded="30" > */}
              <Box w="100%">
                <Stack space={4} w="100%" alignItems="center">
                  <Input
                    fontSize="sm"
                    px="3"
                    w={{ base: "100%", md: "100%" }}
                    value={email}
                    onChangeText={setEmail}
                    variant="underlined"
                    color={Colors.onPrimary}
                    borderColor={Colors.primary}
                    borderRadius="10"
                    cursorColor={Colors.onPrimary}
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
                    w={{ base: "100%", md: "25%" }}
                    type={show ? "text" : "password"}
                    value={password}
                    color={Colors.onPrimary}
                    onChangeText={setPassword}
                    style={styles.text}
                    cursorColor={Colors.onPrimary}
                    focusOutlineColor={Colors.onPrimary}
                    InputRightElement={
                      <Pressable onPress={togglePasswordVisibility}>
                        <Icon
                          as={
                            <Ionicons name={hidePassword ? "eye-off" : "eye"} />
                          }
                          size={4}
                          mr="2"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                    variant="underlined"
                    borderColor={Colors.primary}
                    textContentType="password"
                    secureTextEntry={hidePassword}
                    autoComplete="password"
                    borderRadius="10"
                    placeholder="Password"
                    autoCapitalize="none"
                  />
                </Stack>
              </Box>
              <Box mt="3" mb="5" alignItems="flex-end">
                <Pressable>
                  <Text
                    underline
                    color={Colors.gray}
                    fontSize="xs"
                    style={styles.text}
                  >
                    Forgot password ?
                  </Text>
                </Pressable>
              </Box>
              <Box alignItems="center">
                <Pressable
                  // onPress={() => navigation.navigate("Home")}
                  onPress={UserLoginFunction}
                  style={styles.button}
                >
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
                          borderColor: Colors.text,
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
                        px="100"
                        py="1"
                        rounded="50"
                        borderWidth="3"
                        borderColor={Colors.primary}
                      >
                        <Text
                          color={Colors.onPrimary}
                          style={styles.text}
                          fontSize="xl"
                        >
                          Log In
                        </Text>
                      </Box>
                    );
                  }}
                </Pressable>
              </Box>
              <Box mt="5" mb="5" alignItems="center">
                <Pressable>
                  <Text
                    onPress={() => navigation.navigate("Register")}
                    fontSize="xs"
                    underline
                    color={Colors.gray}
                    style={styles.text}
                  >
                    Create new account !
                  </Text>
                </Pressable>
              </Box>
              {/* </Box> */}
            </Box>
          </HStack>
        </Center>
      </ScrollView>
    </Box>
  );
};

LoginScreen.navigationOptions = {
  tabBarVisible: false,
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.8,
  },
  button: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
