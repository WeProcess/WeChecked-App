import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
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
  TextArea,
  Input,
  HStack,
  Modal,
  Divider,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, Component, useEffect } from "react";
import FAQ from "../../components/FAQ";
const FAQUpload = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [showModal, setShowModal] = useState(false);
  return (
    <VStack py="3">
      <Box flex={1} alignItems="center">
        <Pressable onPress={onOpen} position="relative">
          {({ isHovered, isPressed }) => {
            return (
              <Box
                bgColor={
                  isPressed ? "#3E4095" : isHovered ? "#3E4095" : "#3E4095"
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
                bg={Colors.onPrimary}
                w="80"
                h="10"
                px="4"
                py={1}
                rounded="10"
                shadow={3}
                borderWidth="1"
                borderColor={Colors.text}
              >
                <Text
                  color={Colors.text}
                  fontSize="lg"
                  style={styles.text1}
                  pt="1"
                >
                  FAQ
                </Text>
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
                      FAQ
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={96}>
                    <Center>
                      <FormControl maxW="500" isInvalid>
                        <Box pt="32">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                            mb="3"
                          >
                            Act Name: :
                          </Text>
                          <Pressable
                            onPress={() => setShowModal(true)}
                            position="relative"
                          >
                            {({ isHovered, isPressed }) => {
                              return (
                                <Box
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
                                    shadowColor: "black",
                                    shadowOffset: {
                                      width: 0,
                                      height: 6,
                                    },
                                    shadowOpacity: 0.39,
                                    shadowRadius: 8.3,
                                    elevation: 13,
                                  }}
                                  bg={Colors.onPrimary}
                                  w="80"
                                  h="9"
                                  px="2"
                                  rounded="10"
                                  shadow={3}
                                  borderWidth="1"
                                  borderColor={Colors.text}
                                >
                                  <Text
                                    color={Colors.text}
                                    fontSize="md"
                                    style={styles.text1}
                                    pt="1"
                                    alignSelf="center"
                                  >
                                    Add Act Name
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
                                      <Modal.Header bg={Colors.text}>
                                        <Text
                                          color={Colors.onPrimary}
                                          fontSize="lg"
                                        >
                                          Add Act Name
                                        </Text>
                                      </Modal.Header>
                                      <Modal.Body bg={Colors.text}>
                                        <VStack>
                                          <Center>
                                            <FormControl maxW="500" isInvalid>
                                              <Box pt="24">
                                                <Text
                                                  fontSize="lg"
                                                  color={Colors.onPrimary}
                                                  style={{ fontWeight: "300" }}
                                                >
                                                  Act Name :
                                                </Text>
                                                <Input
                                                  fontSize="md"
                                                  variant="underlined"
                                                  placeholder="Your Act Name"
                                                />
                                              </Box>

                                              <Box alignItems="center" pt="10">
                                                <FAQUpload />
                                              </Box>
                                            </FormControl>
                                          </Center>
                                        </VStack>
                                      </Modal.Body>
                                    </Modal.Content>
                                  </Modal>
                                </Box>
                              );
                            }}
                          </Pressable>
                        </Box>

                        <Box alignItems="center" pt="4">
                          <Text
                            underline
                            bold
                            fontSize="lg"
                            color={Colors.onPrimary}
                          >
                            OR
                          </Text>
                        </Box>

                        <Box pt="4">
                          <FormControl.Label>
                            <Text
                              fontSize="lg"
                              color={Colors.onPrimary}
                              style={{ fontWeight: "300" }}
                            >
                              Acts :
                            </Text>
                          </FormControl.Label>
                          <Select
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            minWidth="300"
                            h="10"
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
                            <Select.Item
                              key="adminfaqupload1"
                              color={Colors.secondary}
                              label="test"
                              value="test"
                            />
                            <Select.Item
                              key="adminfaqupload2"
                              label="test"
                              value="test"
                            />
                          </Select>
                          {/* <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                          >
                            Please make a selection!
                          </FormControl.ErrorMessage> */}
                        </Box>

                        <Box pt="7">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Question :
                          </Text>
                          <Input
                            variant="underlined"
                            placeholder="Your Question"
                            maxWidth="80"
                            pl="2"
                            fontSize="sm"
                          />
                        </Box>

                        <Box pt="7">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Answer :
                          </Text>
                          <TextArea
                            h={20}
                            placeholder="Answer"
                            autoCompleteType={false}
                            w="100%"
                            borderColor={Colors.primary}
                            mt={3}
                            fontSize="sm"
                          />
                        </Box>

                        <Box alignItems="center" pt="10">
                          <Pressable
                            onPress={() =>
                              navigation.navigate("Home", { email: "string" })
                            }
                          >
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
                                    Upload
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
    </VStack>
  );
};

export default FAQUpload;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
    bottom: -10,
  },
  text1: {
    fontWeight: "300",
    letterSpacing: 0.9,
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
});
