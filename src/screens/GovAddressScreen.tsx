import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import DataTable from "../../components/Table";
import { StyleSheet } from "react-native";
import { tableDataSample as tableDataSamplea } from "../../components/Table";
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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, Component, useEffect } from "react";
import DataTable_1 from "../../components/DataTable";
const GovAddressScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([]);
  const [law, setLaw] = useState([]);

  let [selectedstateOption, selectedStateOption] = React.useState("");
  let [selectedlawOption, selectedLawOption] = React.useState("");

  let [stateid] = React.useState("GovAddState");
  let [lawid] = React.useState("GovAddLaw");

  useEffect(() => {
    getState();
    getLaw();
  }, []);

  async function getState() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/govt_state.php",
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

  async function getLaw() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/govt_cate_law.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setLaw(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getgovadd() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/govt_add_view.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedstateOption,
            law: selectedlawOption,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data[1].table_body));

          tableDataSamplea.tableHead = data[0].table_headers;
          tableDataSamplea.tableData = data[1].table_body;

          setShowModal(true);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  return (
    <VStack>
      <Center>
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
                    position="absolute"
                    justifyContent="center"
                    left={4}
                    top={2}
                    flexWrap="wrap"
                  >
                    <Image
                      source={require("../../assets/icons/gps.gif")}
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
                        Govt. Address
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
                                Category Of Law
                              </Text>
                            </FormControl.Label>
                            <Select
                              borderLeftWidth={0}
                              borderRightWidth={0}
                              borderTopWidth={0}
                              minWidth="300"
                              h="10"
                              onValueChange={(itemValue) =>
                                selectedLawOption(itemValue)
                              }
                              color={Colors.primary}
                              fontSize="sm"
                              rounded={10}
                              marginTop={2}
                              borderColor={Colors.text}
                              accessibilityLabel="Choose Law"
                              placeholder="Choose Law"
                              _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={3} />,
                              }}
                              mt="1"
                            >
                              {law &&
                                law.length > 0 &&
                                law.map((law, index) => (
                                  <Select.Item
                                    key={lawid + index}
                                    label={law}
                                    value={law}
                                  />
                                ))}
                            </Select>
                            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                          </Box>

                          <Box alignItems="center" pt="10">
                            <Pressable onPress={() => getgovadd()}>
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
                                          Government Address
                                        </Modal.Header>
                                        <Modal.Body>
                                          <VStack>
                                            <HStack justifyContent="space-between">
                                              <Image
                                                source={require("../../assets/kmlogopdf.png")}
                                                alt="Alternate Text"
                                                w="32"
                                                h="32"
                                              />
                                              <Image
                                                source={require("../../assets/icon.png")}
                                                alt="Alternate Text"
                                                w="24"
                                                h="24"
                                              />
                                            </HStack>
                                            <Divider mt={9} />
                                            <DataTable />
                                          </VStack>
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
            w={100}
          >
            Govt. Address
          </Text>
        </Box>
      </Center>
    </VStack>
  );
};

export default GovAddressScreen;

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
