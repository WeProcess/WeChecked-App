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
  HStack,
  Input,
  useDisclose,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Accordion from "../../components/Accordion";
import React, { useState, Component, useEffect } from "react";

const FAQScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [searchQuery, setSearchQuery] = useState("");

  const [name, setName] = useState<any[]>([]);

  useEffect(() => {
    getName();
  }, []);

  async function getName() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/faq_view.php",
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
          // alert(JSON.stringify(data[2].qa));
          setName(data);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
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
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <VStack
                  alignItems="center"
                  position="absolute"
                  justifyContent="center"
                  left={2}
                  top={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/social-engagement.gif")}
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
                      FAQs
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={5}>
                    <Center>
                      <Box
                        safeArea
                        style={{
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Box alignItems="center">
                          <Input
                            mb={2}
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
                          {name &&
                            name.length > 0 &&
                            name.map((name, index) => (
                              <Box key={"topic" + index} w="80">
                                <Accordion
                                  title={name.topic}
                                  quation_ans={name.qa}
                                />
                              </Box>
                            ))}
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
          FAQs
        </Text>
      </Box>
    </VStack>
  );
};

export default FAQScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
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
});
