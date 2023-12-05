import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
import { StyleSheet, ScrollView } from "react-native";
import { Linking } from "react-native";

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
import { useEffect, useState } from "react";
const MojoNews = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [mojo_var, setMojo] = useState([]);

  useEffect(() => {
    getMojoNews();
  }, []);

  async function getMojoNews() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/mojo_view.php",
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
          setMojo(data[0].mojo_data);
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
              <Box alignItems="center">
                <VStack>
                  <HStack>
                    <Image
                      source={require("../assets/icons/Mojo.png")}
                      alt="Alternate Text"
                      w="12"
                      h="12"
                    />
                    <Text bold color={Colors.primary} fontSize="xl" px="2">
                      MOJO
                    </Text>
                    <Text color={Colors.secondary} fontSize="xl">
                      "Monthly Journal"
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={Colors.secondary}>
                    An initiative by Karma Global consists of Monthly News
                  </Text>
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
                      Mojo
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={2}>
                    <Center>
                      <ScrollView>
                        <Box safeArea alignItems="center">
                          {mojo_var &&
                            mojo_var.length > 0 &&
                            mojo_var.map((mojo_var, index) => (
                              <Pressable
                                key={"MNews" + index}
                                onPress={() => downloadFile(mojo_var[1])}
                              >
                                <Box w="80">
                                  <VStack
                                    w="80"
                                    h="24"
                                    bg={Colors.onPrimary}
                                    p="4"
                                    rounded={10}
                                    mt="5"
                                    borderColor="#ccc"
                                    borderWidth="1"
                                    position="relative"
                                    style={styles.shadow}
                                  >
                                    <Text>{mojo_var[0]}</Text>
                                  </VStack>
                                </Box>
                              </Pressable>
                            ))}
                        </Box>
                      </ScrollView>
                    </Center>
                  </Actionsheet.Content>
                </Actionsheet>
              </Box>
            );
          }}
        </Pressable>
      </Box>
      {/* <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Bare Acts
        </Text>
      </Box> */}
    </VStack>
  );
};

export default MojoNews;

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
