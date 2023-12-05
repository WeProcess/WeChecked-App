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
const BareAct = () => {
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
                  Bare Acts
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
                      Bare Acts
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={72}>
                    <Center>
                      <FormControl maxW="500" isInvalid>
                        <Box pt="16">
                          <FormControl.Label>
                            <Text
                              fontSize="lg"
                              color={Colors.onPrimary}
                              style={{ fontWeight: "300" }}
                            >
                              Segments :
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
                            borderColor={Colors.text}
                            accessibilityLabel="Choose Industries"
                            placeholder="Choose Industries"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size={3} />,
                            }}
                            mt="1"
                          >
                            <Select.Item
                              key="adminbareact1"
                              color={Colors.secondary}
                              label="test"
                              value="test"
                            />
                            <Select.Item 
                            key="adminbareact2"
                            label="test" 
                            value="test" 
                            />
                          </Select>
                          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                        </Box>

                        <Box pt="7">
                          <FormControl.Label>
                            <Text
                              fontSize="lg"
                              color={Colors.onPrimary}
                              style={{ fontWeight: "300" }}
                            >
                              States :
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
                            borderColor={Colors.text}
                            accessibilityLabel="Choose Industries"
                            placeholder="Choose Industries"
                            _selectedItem={{
                              bg: "teal.600",
                              endIcon: <CheckIcon size={3} />,
                            }}
                            mt="1"
                          >
                            <Select.Item
                              key="adminbareact3"
                              color={Colors.secondary}
                              label="test"
                              value="test"
                            />
                            <Select.Item 
                            key="adminbareact4"
                            label="test" 
                            value="test" 
                            />
                          </Select>
                          {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
                        </Box>

                        <Box pt="7">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Acts :
                          </Text>
                          <Input
                            variant="underlined"
                            placeholder="Case Study Title Display As"
                            focusOutlineColor={Colors.onPrimary}
                            w="80"
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
                            Upload PDF :
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

export default BareAct;

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
