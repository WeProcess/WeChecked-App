import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { Linking, StyleSheet } from "react-native";
import {
  Box,
  Text,
  Center,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Pressable,
  Actionsheet,
  Avatar,
  Icon,
  Image,
  VStack,
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, Component, useEffect } from "react";
const AbstractActScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [state, setState] = useState([]);
  const [act, setAct] = useState([]);
  const [lang, setLang] = useState([]);

  //Avinash Start Code
  let [selectedstateOption, selectedStateOption] = React.useState("");
  let [selectedactOption, selectedActOption] = React.useState("");
  let [selectedlangOption, selectedLangOption] = React.useState("");

  let [stateid] = React.useState("AbsState");
  let [actid] = React.useState("Act");
  let [langid] = React.useState("Lang");

  //Avinash end Code

  useEffect(() => {
    getState();
  }, []);

  async function getState() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/act_abst_state.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setState(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getAct() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/act_abst_act.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedstateOption,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setAct(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getLang() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/act_abst_lang.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedstateOption,
            act: selectedactOption,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setLang(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getAbstract() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/act_abst_download.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedstateOption,
            act: selectedactOption,
            lang_var: selectedlangOption,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data));
          downloadFile(data);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }
  async function downloadFile(url: string) {
    Linking.openURL(url);
  }

  return (
    <VStack>
      <Box flex={1} alignItems="center">
        <Pressable onPress={onOpen} position="relative">
          {({ isHovered, isPressed }) => {
            return (
              <Box
                w={100}
                h="24"
                p="2"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <VStack
                  alignItems="center"
                  justifyContent="center"
                  left={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/law.gif")}
                    alt="Alternate Text"
                    w="16"
                    h="16"
                  />
                </VStack>
                <Actionsheet
                  isOpen={isOpen}
                  onClose={onClose}
                  size="full"
                  bg={Colors.background}
                >
                  <HStack m={5}>
                    <Text
                      color={Colors.onPrimary}
                      fontSize="3xl"
                      style={{ fontWeight: "300" }}
                      pt={5}
                    >
                      Abstract Acts
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={48}>
                    <Center>
                      <FormControl maxW="500" isInvalid>
                        <Box pt={9}>
                          <FormControl.Label>
                            <Text
                              fontSize="lg"
                              color={Colors.onPrimary}
                              style={{ fontWeight: "300" }}
                            >
                              State
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
                            onValueChange={(itemValue) =>
                              selectedStateOption(itemValue)
                            }
                            color={Colors.primary}
                            fontSize="sm"
                            rounded={10}
                            marginTop={2}
                            accessibilityLabel="Choose States"
                            placeholder="Choose States"
                            _selectedItem={{
                              bg: "teal.600",
                              color: Colors.primary,
                              endIcon: (
                                <Icon
                                  as={
                                    <Ionicons
                                      name="chevron-down"
                                      size={2}
                                      color="black"
                                    />
                                  }
                                />
                              ),
                            }}
                          >
                            {state &&
                              state.length > 0 &&
                              state.map((state, index) => (
                                <Select.Item
                                  key={stateid + index}
                                  label={state}
                                  value={state}
                                />
                              ))}
                          </Select>
                          {/* <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                          >
                            Please make a selection!
                          </FormControl.ErrorMessage> */}
                        </Box>

                        <Box py="7">
                          <FormControl.Label>
                            <Text
                              fontSize="lg"
                              color={Colors.onPrimary}
                              style={{ fontWeight: "300" }}
                            >
                              Name of the Act
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
                            onOpen={getAct}
                            onValueChange={(itemValue) =>
                              selectedActOption(itemValue)
                            }
                            color={Colors.primary}
                            fontSize="sm"
                            rounded={10}
                            marginTop={2}
                            borderColor={Colors.text}
                            accessibilityLabel="Choose Act"
                            placeholder="Choose Act"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size={3} />,
                            }}
                            mt="1"
                          >
                            {act &&
                              act.length > 0 &&
                              act.map((act, index) => (
                                <Select.Item
                                  key={actid + index}
                                  label={act}
                                  value={act}
                                />
                              ))}
                          </Select>
                          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                        </Box>

                        <Box pt={3}>
                          <FormControl.Label>
                            <Text
                              fontSize="lg"
                              color={Colors.onPrimary}
                              style={{ fontWeight: "300" }}
                            >
                              Language
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
                            onOpen={getLang}
                            onValueChange={(itemValue) =>
                              selectedLangOption(itemValue)
                            }
                            color={Colors.primary}
                            fontSize="sm"
                            rounded={10}
                            marginTop={2}
                            accessibilityLabel="Choose Language"
                            placeholder="Choose Language"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size={3} />,
                            }}
                            mt="1"
                          >
                            {lang &&
                              lang.length > 0 &&
                              lang.map((lang, index) => (
                                <Select.Item
                                  key={langid + index}
                                  label={lang}
                                  value={lang}
                                />
                              ))}
                          </Select>
                          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                        </Box>

                        <Box alignItems="center" pt="10">
                          <Pressable onPress={() => getAbstract()}>
                            {({ isHovered, isPressed }) => {
                              return (
                                <Box
                                  alignItems="center"
                                  minWidth="300"
                                  bgColor={
                                    isPressed
                                      ? "#3E4095"
                                      : isHovered
                                      ? "#3E4095"
                                      : "#3E4095"
                                  }
                                  style={{
                                    transform: [
                                      {
                                        scale: isPressed ? 0.96 : 1,
                                      },
                                    ],
                                  }}
                                  bg={Colors.secondary}
                                  px="50"
                                  py="1"
                                  rounded="10"
                                  shadow={3}
                                  borderWidth="1"
                                  borderColor={Colors.secondary}
                                >
                                  <Text
                                    fontSize="lg"
                                    color={Colors.onPrimary}
                                    style={{ fontWeight: "300" }}
                                  >
                                    Submit
                                  </Text>
                                </Box>
                              );
                            }}
                          </Pressable>
                        </Box>
                      </FormControl>
                    </Center>
                  </Actionsheet.Content>
                </Actionsheet>
              </Box>
            );
          }}
        </Pressable>
      </Box>
      <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Abstract Acts
        </Text>
      </Box>
    </VStack>
  );
};

export default AbstractActScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -25,
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
