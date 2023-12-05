import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import DataTable from "../../components/Table";
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
  Divider,
  Modal,
  useDisclose,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, Component, useEffect } from "react";
import DataTable_1 from "../../components/DataTable";
const ComplianceNotScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [showModal, setShowModal] = useState(false);

  let [selectedstateOption, selectedStateOption] = React.useState("");
  let [selectedindustryOption, selectedIndustryOption] = React.useState("");

  const [state, setState] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [compnot, setCompNot] = useState([]);

  useEffect(() => {
    getState();
    getind();
  }, []);

  async function getState() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/compl_state.php",
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

  async function getind() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/compl_industry.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setIndustry(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getCompNot() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/compl_notify.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedstateOption,
            industry: selectedindustryOption,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data));
          setCompNot(data);
          setShowModal(true);
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
                    source={require("../../assets/icons/calendar.gif")}
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
                      Compliance Notification
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={72}>
                    <Center>
                      <FormControl maxW="500" isInvalid>
                        <Box pt={5}>
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
                                  key={"compNotState" + index}
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
                              Industry
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
                            onValueChange={(itemValue) =>
                              selectedIndustryOption(itemValue)
                            }
                            color={Colors.primary}
                            fontSize="sm"
                            rounded={10}
                            marginTop={2}
                            borderColor={Colors.text}
                            accessibilityLabel="Choose Industries"
                            placeholder="Choose Industries"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size={3} />,
                            }}
                            mt="1"
                          >
                            {industry &&
                              industry.length > 0 &&
                              industry.map((industry, index) => (
                                <Select.Item
                                  key={"comNotIndu" + index}
                                  label={industry}
                                  value={industry}
                                />
                              ))}
                          </Select>
                          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                        </Box>

                        <Box alignItems="center" pt="10">
                          <Pressable onPress={() => getCompNot()}>
                            {({ isHovered, isPressed }) => {
                              return (
                                <Box
                                  alignItems="center"
                                  minWidth="300"
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
                                  <Modal
                                    isOpen={showModal}
                                    onClose={() => setShowModal(false)}
                                    size="full"
                                  >
                                    <Modal.Content
                                      style={styles.top}
                                      w="95%"
                                      h="auto"
                                    >
                                      <Modal.CloseButton />
                                      <Modal.Header>
                                        Compliance Notifications
                                      </Modal.Header>
                                      <Modal.Body>
                                        <ScrollView>
                                          <Center>
                                            <VStack space={3}>
                                              {compnot &&
                                                compnot.length > 0 &&
                                                compnot.map(
                                                  (compnot, index) => (
                                                    <Box
                                                      key={"compNot" + index}
                                                      bg={Colors.gray}
                                                      h="auto"
                                                      w="72"
                                                      rounded={20}
                                                      shadow={5}
                                                      p={5}
                                                      my={3}
                                                    >
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          Published On
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[0]}
                                                        </Text>
                                                      </Box>
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          Applicable From
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[1]}
                                                        </Text>
                                                      </Box>
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          State Name
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[2]}
                                                        </Text>
                                                      </Box>
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          Industry Name
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[3]}
                                                        </Text>
                                                      </Box>
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          Applicable On
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[4]}
                                                        </Text>
                                                      </Box>
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          Title
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[5]}
                                                        </Text>
                                                      </Box>
                                                      <Box mb={2}>
                                                        <Text
                                                          fontSize="md"
                                                          color={Colors.primary}
                                                        >
                                                          Content
                                                        </Text>
                                                        <Text
                                                          fontSize="sm"
                                                          color={
                                                            Colors.background
                                                          }
                                                        >
                                                          {compnot[6]}
                                                        </Text>
                                                      </Box>
                                                      <Pressable
                                                        onPress={() =>
                                                          downloadFile(
                                                            compnot[7]
                                                          )
                                                        }
                                                      >
                                                        {({
                                                          isHovered,
                                                          isPressed,
                                                        }) => {
                                                          return (
                                                            <Box
                                                              alignItems="center"
                                                              bgColor={
                                                                isPressed
                                                                  ? "#353841"
                                                                  : isHovered
                                                                  ? "#353841"
                                                                  : "#353841"
                                                              }
                                                              style={{
                                                                transform: [
                                                                  {
                                                                    scale:
                                                                      isPressed
                                                                        ? 0.96
                                                                        : 1,
                                                                  },
                                                                ],
                                                              }}
                                                              bg={
                                                                Colors.primary
                                                              }
                                                              shadow={5}
                                                              borderWidth="1"
                                                              borderColor={
                                                                Colors.primary
                                                              }
                                                              h="auto"
                                                              rounded={5}
                                                            >
                                                              <Text
                                                                color={
                                                                  Colors.onPrimary
                                                                }
                                                                fontSize="md"
                                                              >
                                                                Click Here to
                                                                Download!
                                                              </Text>
                                                            </Box>
                                                          );
                                                        }}
                                                      </Pressable>
                                                    </Box>
                                                  )
                                                )}
                                            </VStack>
                                          </Center>
                                        </ScrollView>
                                      </Modal.Body>
                                    </Modal.Content>
                                  </Modal>
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
          Compliance Notifications
        </Text>
      </Box>
    </VStack>
  );
};

export default ComplianceNotScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -20,
  },
  top: {
    marginBottom: "auto",
    marginTop: 100,
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
