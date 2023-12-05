import Colors from "../../constants/Colors";

import { StyleSheet, AppRegistry, Linking } from "react-native";
import {
  Box,
  Text,
  Center,
  Pressable,
  Actionsheet,
  Input,
  Icon,
  Image,
  VStack,
  HStack,
  useDisclose,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const CaseStudyScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [name, setName] = useState([]);

  useEffect(() => {
    getName();
  }, []);

  async function getName() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/case_study.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data[0].data_var));
          setName(data[0].data_var);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
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
                      scale: isPressed || isHovered ? 0.96 : 1,
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
                    source={require("../../assets/icons/search.gif")}
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
                      Case Study
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={22}>
                    <Center>
                      <Box safeArea alignItems="center">
                        <Box alignItems="center" mb={5}>
                          <Input
                            bg={Colors.text}
                            color={Colors.onPrimary}
                            placeholder="Search Here"
                            w="80"
                            fontSize="md"
                            height="10"
                            borderRadius="20"
                            py="1"
                            px="2"
                            borderColor={Colors.onPrimary}
                            isHovered={false}
                            isFocused={false}
                            isDisabled={true}
                            InputLeftElement={
                              <Icon
                                ml="4"
                                size="5"
                                color={Colors.onPrimary}
                                as={<Ionicons name="ios-search" />}
                              />
                            }
                          />
                        </Box>
                        <ScrollView>
                          <Box safeArea alignItems="center">
                            <Box w="80" mb="3">
                              {name &&
                                name.length > 0 &&
                                name.map((name, index) => (
                                  <Box
                                    key={"HRCentral" + index}
                                    w="80"
                                    h="auto"
                                    bg={Colors.onPrimary}
                                    p="4"
                                    rounded={10}
                                    borderColor="#ccc"
                                    borderWidth="1"
                                    position="relative"
                                    style={styles.shadow}
                                    mb="5"
                                  >
                                    <Text
                                      style={{ textTransform: "capitalize" }}
                                      fontSize="md"
                                    >
                                      {name[0]}
                                    </Text>

                                    <Box pt={3}>
                                      <Pressable
                                        onPress={() => downloadFile(name[1])}
                                      >
                                        {({ isHovered, isPressed }) => {
                                          return (
                                            <Box
                                              alignItems="center"
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
                                              bg={Colors.text}
                                              w="72"
                                              h="8"
                                              rounded="10"
                                              shadow={3}
                                              borderWidth="1"
                                              borderColor={Colors.text}
                                            >
                                              <Text
                                                color={Colors.onPrimary}
                                                style={styles.text1}
                                                pt="1"
                                              >
                                                Click Here to Download
                                              </Text>
                                            </Box>
                                          );
                                        }}
                                      </Pressable>
                                    </Box>
                                  </Box>
                                ))}
                            </Box>
                          </Box>
                        </ScrollView>
                      </Box>
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
          Case Study
        </Text>
      </Box>
    </VStack>
  );
};

export default CaseStudyScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
    top: -20,
  },
  text1: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
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
