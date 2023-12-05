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
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import EHSCentral from "./EHSCentral";
import EHSState from "./EHSState";
const EHS = () => {
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
                      EHS Bare Acts
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={72}>
                    <Center>
                      <Box safeArea alignItems="center">
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
                            <Text bold fontSize="md" color={Colors.secondary}>
                              Central
                            </Text>
                            <Box pt={3}>
                              <EHSCentral />
                            </Box>
                          </VStack>
                          <VStack
                            w="80"
                            h="24"
                            bg={Colors.onPrimary}
                            p="4"
                            rounded={10}
                            mt="8"
                            borderColor="#ccc"
                            borderWidth="1"
                            position="relative"
                            style={styles.shadow}
                          >
                            <Text bold fontSize="md" color={Colors.secondary}>
                              State
                            </Text>
                            <Box pt={3}>
                              <EHSState />
                            </Box>
                          </VStack>
                        </Box>
                      </Box>
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

export default EHS;

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
