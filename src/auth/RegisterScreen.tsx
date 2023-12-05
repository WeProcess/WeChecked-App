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

const RegisterScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hidePasswordConf, setHidePasswordConf] = React.useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const togglePasswordVisibility_conf = () => {
    setHidePasswordConf(!hidePasswordConf);
  };

  const handleRegister = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      mobile === ""
    ) {
      () => {
        alert("Please fill all the fields!");
      };
      return;
    }

    if (password !== confirmPassword) {
      () => {
        alert("Passwords do not match!");
      };
      return;
    }
    UserRegistrationFunction();
  };

  async function UserRegistrationFunction() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/samplesignup1.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            mobile: mobile,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (response) => {
          alert(
            "Filled information is" + " Empty or " + JSON.stringify(response)
          );
        })
        .catch((error) => {
          alert("Error in responce. " + error);
          navigation.navigate("Login");
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
          height: height / 3.4,
        }}
        resizeMode="contain"
        source={require("../../assets/img/Register.png")}
      />
      <ScrollView>
        <Center>
          <HStack justifyContent="space-between">
            <Box alignSelf="center" justifyContent="space-between">
              <VStack space={4} alignItems="center">
                <Text
                  fontSize="3xl"
                  bold
                  color={Colors.primary}
                  style={styles.text}
                >
                  Create Account
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
                    cursorColor={Colors.onPrimary}
                    focusOutlineColor={Colors.onPrimary}
                  />
                  <Input
                    fontSize="sm"
                    px="3"
                    w={{ base: "100%", md: "100%" }}
                    value={email}
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
                    w={{ base: "100%", md: "25%" }}
                    type={show ? "text" : "password"}
                    value={password}
                    color={Colors.onPrimary}
                    onChangeText={setPassword}
                    style={styles.text}
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
                    cursorColor={Colors.onPrimary}
                  />
                  <Input
                    fontSize="sm"
                    px="3"
                    w={{ base: "100%", md: "25%" }}
                    type={show ? "text" : "password"}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    color={Colors.onPrimary}
                    InputRightElement={
                      <Pressable onPress={togglePasswordVisibility_conf}>
                        <Icon
                          as={
                            <Ionicons
                              name={hidePasswordConf ? "eye-off" : "eye"}
                            />
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
                    secureTextEntry={hidePasswordConf}
                    autoComplete="password"
                    borderRadius="10"
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    cursorColor={Colors.onPrimary}
                  />
                  <Input
                    fontSize="sm"
                    px="3"
                    w={{ base: "100%", md: "100%" }}
                    value={mobile}
                    color={Colors.onPrimary}
                    focusOutlineColor={Colors.onPrimary}
                    cursorColor={Colors.onPrimary}
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
              <Box alignItems="center" pt="5">
                <Pressable onPress={UserRegistrationFunction}>
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
                          Create Account
                        </Text>
                      </Box>
                    );
                  }}
                </Pressable>
              </Box>
              <Box mt="5" mb="5" alignItems="center">
                <Pressable flexDirection="row">
                  <Text
                    color={Colors.onPrimary}
                    fontSize="xs"
                    style={styles.text}
                  >
                    Already have an account ?
                  </Text>
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    fontSize="xs"
                    underline
                    color={Colors.gray}
                  >
                    Log In
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

RegisterScreen.navigationOptions = {
  tabBarVisible: false,
};

export default RegisterScreen;

AppRegistry.registerComponent("Register", () => RegisterScreen);

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.8,
  },
});
