import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { Linking, StyleSheet } from "react-native";
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
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
const HolidayListScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [name, setName] = useState([]);

  useEffect(() => {
    getName();
  }, []);

  async function getName() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/holiday_list.php",
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
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <VStack
                  alignItems="center"
                  justifyContent="center"
                  left={4}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/list.gif")}
                    alt="Alternate Text"
                    w="12"
                    h="12"
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
                      Holiday List
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={10}>
                    <Center>
                      <ScrollView>
                        <Box safeArea alignItems="center">
                          {name &&
                            name.length > 0 &&
                            name.map((name, index) => (
                              <Box key={"HolidayList" + index} w="80">
                                <Text
                                  bold
                                  fontSize="xl"
                                  color={Colors.primary}
                                  underline
                                >
                                  {name[0]} Hoilday List :
                                </Text>
                                <Box
                                  w="80"
                                  bg={Colors.onPrimary}
                                  p="4"
                                  rounded={10}
                                  mt="5"
                                  borderColor="#ccc"
                                  borderWidth="1"
                                  style={styles.shadow}
                                >
                                  <Text
                                    bold
                                    fontSize="md"
                                    color={Colors.secondary}
                                  >
                                    {name[0]}
                                  </Text>
                                  <Box pt="5">
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
                                              color={Colors.onPrimary}
                                              fontWeight="medium"
                                              fontSize="sm"
                                            >
                                              Click Here To Download!
                                            </Text>
                                          </Box>
                                        );
                                      }}
                                    </Pressable>
                                  </Box>
                                </Box>
                              </Box>
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
      <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Holiday List
        </Text>
      </Box>
    </VStack>
  );
};

export default HolidayListScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -25,
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
