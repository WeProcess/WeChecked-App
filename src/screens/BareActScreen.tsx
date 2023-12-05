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
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import EHS from "../../components/EHS";
import HRActs from "../../components/HRActs";
const BareActScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <VStack>
      <Box flex={1} alignItems="center">
        <Pressable onPress={onOpen} position="relative">
          {({ isHovered, isPressed }) => {
            return (
              <Box
                w={100}
                h="24"
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
                  justifyContent="center"
                  left={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/trial.gif")}
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
                      Bare Acts
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
                              EHS
                            </Text>
                            <Box pt={3}>
                              <EHS />
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
                              HR
                            </Text>
                            <Box pt={3}>
                              <HRActs />
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
      <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Bare Acts
        </Text>
      </Box>
    </VStack>
  );
};

export default BareActScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -25,
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
