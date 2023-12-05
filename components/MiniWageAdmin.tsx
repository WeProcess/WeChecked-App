import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
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
  Input,
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
const MiniWageAdmin = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <VStack>
      <Box flex={1} alignItems="center">
        <Pressable onPress={onOpen} position="relative">
          {({ isHovered, isPressed }) => {
            return (
              <Box
                alignItems="center"
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
                bg={Colors.text}
                w="72"
                h="8"
                rounded="10"
                shadow={3}
                borderWidth="1"
                borderColor={Colors.text}
              >
                <Text color={Colors.onPrimary} style={styles.text1} pt="1">
                  Click Here
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
                      Add Minimum Wage
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={72}>
                    <Center>
                      <FormControl maxW="500" isInvalid pt="10">
                        <Box pt="10">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Download Sample template :
                          </Text>
                          <Pressable
                            onPress={() => navigation.navigate("Home")}
                            pt={3}
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
                                  bg={Colors.onPrimary}
                                  px="50"
                                  py="1"
                                  rounded="10"
                                  shadow={3}
                                  borderWidth="1"
                                  borderColor={Colors.secondary}
                                >
                                  <Text
                                    fontSize="lg"
                                    color={Colors.text}
                                    style={{ fontWeight: "300" }}
                                  >
                                    Download
                                  </Text>
                                </Box>
                              );
                            }}
                          </Pressable>
                        </Box>

                        <Box pt="10">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Upload Minimum Wages Format Excel :
                          </Text>
                          <Pressable
                            onPress={() => navigation.navigate("Home")}
                            position="relative"
                            mt={5}
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
                                  <HStack>
                                    <Text
                                      color={Colors.text}
                                      fontSize="md"
                                      style={styles.text1}
                                      pt="1"
                                    >
                                      Choose File :
                                    </Text>
                                    <Text
                                      color={Colors.warn}
                                      fontSize="md"
                                      style={styles.text1}
                                      pt="1"
                                      pl="2"
                                    >
                                      No File Chosen
                                    </Text>
                                  </HStack>
                                </Box>
                              );
                            }}
                          </Pressable>
                        </Box>

                        <Box pt="10">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Upload Notification Data :
                          </Text>
                          <Pressable
                            onPress={() => navigation.navigate("Home")}
                            position="relative"
                            mt={5}
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
                                  <HStack>
                                    <Text
                                      color={Colors.text}
                                      fontSize="md"
                                      style={styles.text1}
                                      pt="1"
                                    >
                                      Choose File :
                                    </Text>
                                    <Text
                                      color={Colors.warn}
                                      fontSize="md"
                                      style={styles.text1}
                                      pt="1"
                                      pl="2"
                                    >
                                      No File Chosen
                                    </Text>
                                  </HStack>
                                </Box>
                              );
                            }}
                          </Pressable>
                        </Box>

                        <Box alignItems="center" pt="10">
                          <Pressable
                            onPress={() => navigation.navigate("Home")}
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

export default MiniWageAdmin;

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
});
