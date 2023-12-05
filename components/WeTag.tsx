import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
import { StyleSheet, ScrollView, Linking } from "react-native";
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
import EHSCentral from "./EHSCentral";
import EHSState from "./EHSState";
import { useEffect, useState } from "react";
const WeTag = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [wetag_var, setWeTag] = useState([]);

  useEffect(() => {
    getWeTag();
  }, []);

  async function getWeTag() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/wetag_view.php",
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
          // alert(JSON.stringify(data));
          setWeTag(data[0].wetag_data);
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
                  <HStack py="3">
                    <Image
                      source={require("../assets/icons/WeTag.png")}
                      alt="Alternate Text"
                      w="9"
                      h="9"
                    />
                    <Text bold color={Colors.primary} fontSize="xl" px="2">
                      WeTag
                    </Text>
                    <Text color={Colors.secondary} fontSize="xl">
                      "Weekly Newsletter"
                    </Text>
                  </HStack>
                  <Text fontSize="md" color={Colors.secondary}>
                    Karma Global's own Compliance related news magazine.
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
                      WeTag
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={2}>
                    <Center>
                      <ScrollView>
                        <Box safeArea alignItems="center">
                          {wetag_var &&
                            wetag_var.length > 0 &&
                            wetag_var.map((wetag_var, index) => (
                              <Pressable
                                key={"wTag" + index}
                                onPress={() => downloadFile(wetag_var[1])}
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
                                    <Text>{wetag_var[0]}</Text>
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

export default WeTag;

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
