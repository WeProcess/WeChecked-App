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
  Input,
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import AbstractActAdmin from "../../components/AbstractActAdmin";
import AbstractActUpload from "../../components/AbstractActUpload";
const AbstractAct = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
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
                  Acts Abstracts
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
                      Acts Abstracts
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
                              Add Acts Abstracts
                            </Text>
                            <Box pt={3}>
                              <AbstractActAdmin />
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
                              Upload File for Acts Abstracts
                            </Text>
                            <Box pt={3}>
                              <AbstractActUpload />
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
    </VStack>
  );
};

export default AbstractAct;

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
