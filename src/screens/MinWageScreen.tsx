import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import DataTable from "../../components/Table";
import { tableDataSample as tableDataSamplea } from "../../components/Table";
import { StyleSheet } from "react-native";
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
  useDisclose,
  HStack,
  Modal,
  Button,
  Input,
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, Component, useEffect } from "react";
const MinWageScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [date_var, setDate] = useState([]);

  //Avinash Start Code
  let [selectedstateOption, selectedStateOption] = React.useState("");
  let [selectedindustryOption, selectedIndustryOption] = React.useState("");
  let [selecteddateOption, selectedDateOption] = React.useState("");

  let [mwstate, MWState] = React.useState("");
  let [MWnotificationdate, MWNotificationDate] = React.useState("");
  let [mwindustry, MWIndustry] = React.useState("");
  let [mwapplicabledate, MWApplicableDate] = React.useState("");
  let [mwenddate, MWEndDate] = React.useState("");
  let [mwtableheaders, MWTableHeaders] = React.useState("");
  let [mwtablebody, MWTableBody] = React.useState("");

  let [stateid] = React.useState("MinState");
  let [industryid] = React.useState("minIndustry");
  let [dateid] = React.useState("minDate");

  //Avinash end Code

  useEffect(() => {
    getState();
  }, []);

  async function getState() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/minwage_state.php",
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

  async function getIndustry() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/minwage_industry.php",
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
        .then(async (data) => setIndustry(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getDate() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/minwage_date.php",
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
        .then(async (data) => setDate(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getminwage() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/minwage_view.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedstateOption,
            industry: selectedindustryOption,
            applicabledate: selecteddateOption,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data[6].table_body));

          MWState(data[0].state);
          MWNotificationDate(data[1].notification_date);
          MWIndustry(data[2].industryname);
          MWApplicableDate(data[3].applicable_date);
          MWEndDate(data[4].end_date);

          tableDataSamplea.tableHead = data[5].table_headers;
          tableDataSamplea.tableData = data[6].table_body;

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
                      scale: isPressed || isHovered ? 0.96 : 1,
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
                    source={require("../../assets/icons/money-Bag.gif")}
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
                      Minimum Wages
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={48}>
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
                              Industries
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
                            onOpen={getIndustry}
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
                                  key={industryid + index}
                                  label={industry}
                                  value={industry}
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
                              Applicable Dates
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
                            onOpen={getDate}
                            onValueChange={(itemValue) =>
                              selectedDateOption(itemValue)
                            }
                            color={Colors.primary}
                            fontSize="sm"
                            rounded={10}
                            marginTop={2}
                            accessibilityLabel="Choose Dates"
                            placeholder="Choose Dates"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size={3} />,
                            }}
                            mt="1"
                          >
                            {date_var &&
                              date_var.length > 0 &&
                              date_var.map((date_var, index) => (
                                <Select.Item
                                  key={dateid + index}
                                  label={date_var}
                                  value={date_var}
                                />
                              ))}
                          </Select>
                          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                        </Box>

                        <Box alignItems="center" pt="10">
                          <Pressable onPress={() => getminwage()}>
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
                                        Minimum Wages Notifications
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
                                          <HStack>
                                            <Text bold>Minimum Wages : </Text>
                                            <Text ml={2}>{mwstate}</Text>
                                          </HStack>
                                          <HStack>
                                            <Text bold>
                                              Notification Date :{" "}
                                            </Text>
                                            <Text ml={2}>
                                              {MWnotificationdate}
                                            </Text>
                                          </HStack>
                                          <HStack>
                                            <Text bold>Industry Name : </Text>
                                            <Text ml={2}>{mwindustry}</Text>
                                          </HStack>
                                          <HStack>
                                            <Text bold>Applicable Date : </Text>
                                            <Text ml={2}>
                                              {mwapplicabledate} TO {mwenddate}
                                            </Text>
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
          w={90}
        >
          Minimum Wage
        </Text>
      </Box>
    </VStack>
  );
};

export default MinWageScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -20,
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
  top: {
    marginBottom: "auto",
    marginTop: 100,
  },
  border: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
});
