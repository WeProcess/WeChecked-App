import { Alert, StyleSheet, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import Colors from "../../constants/Colors";
import DonutChat from "../../components/DonutChart";
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  ScrollView,
  Divider,
  Pressable,
  Image,
  useDisclose,
  Actionsheet,
  Avatar,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CarouselImages from "../../components/CarouselImages";
import MinWageScreen from "./MinWageScreen";
import ComplianceScreens from "./ComplianceScreen";
import BareActScreen from "./BareActScreen";
import AbstractActScreen from "./AbstractActScreen";
import HolidayListScreen from "./HolidayListScreen";
import ComplianceNotScreen from "./ComplianceNotScreen";
import { RouteProp, useRoute } from "@react-navigation/native";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import { HomeStackNavigatorParamList } from "../navigation/types";
import { useEffect, useState } from "react";
import HomeStackNavigator from "../navigation/HomeStack";
import ContactUs from "../../components/ContactUs";
import Feedback from "../../components/Feedback";
import UserProfile from "../../components/UserProfile";

interface HomeScreenProps {
  route: RouteProp<HomeStackNavigatorParamList, "Home">;
}

const HomeScreen = ({ route }: HomeScreenProps) => {
  const [UserData, setUserData] = useState([]);
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [usernumber, setUserNumber] = useState("");

  const email = route.params.email;

  async function openLink(url: string) {
    Linking.openURL(url);
  }

  useEffect(() => {
    getUserData();
    // alert(props.sname);
  }, []);

  async function getUserData() {
    try {
      // alert(email);
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/home_page.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => {
          // alert(JSON.stringify(data[0].data_var.name));

          setUserName(data[0].data_var.name);
          setUserEmail(data[0].data_var.email);
          setUserNumber(data[0].data_var.mobile_number);
          setUserData(data[0].data_var.user_id);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try." + error);
    }
  }

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Box flex="1" maxWidth="100%" bg={Colors.background}>
      <Center mb={16}>
        <Center>
          <Box px="6" pt="6">
            <HStack space={12}>
              <Box pt={2}>
                <Image
                  source={require("../../assets/icon.png")}
                  size="sm"
                  alt="Logo"
                />
              </Box>
              <Box pt="5">
                <Text fontSize="2xl" color={Colors.primary}>
                  WeChecked
                </Text>
              </Box>
              <Box pt="5">
                <Pressable onPress={onOpen}>
                  <Ionicons
                    name="menu-outline"
                    size={40}
                    color={Colors.onPrimary}
                  />
                  <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
                    <Actionsheet.Content bg={Colors.text}>
                      <Center pb={5}>
                        <Image
                          source={require("../../assets/icon.png")}
                          size="lg"
                          alt="Logo"
                        />
                        <Text
                          style={styles.text}
                          color={Colors.primary}
                          fontSize="sm"
                        >
                          Welcome to
                        </Text>
                        <Text
                          // style={styles.text}
                          color={Colors.primary}
                          fontSize="lg"
                        >
                          WeChecked
                        </Text>
                      </Center>
                      <Actionsheet.Item bg={Colors.text}>
                        <UserProfile email={useremail} />
                      </Actionsheet.Item>
                      <Actionsheet.Item
                        onPress={() => openLink("https://www.wechecked.ai/")}
                        bg={Colors.text}
                        startIcon={
                          <Icon
                            as={Ionicons}
                            size="8"
                            name="information-circle-outline"
                            color={Colors.primary}
                          />
                        }
                      >
                        <Text color={Colors.onPrimary} fontSize="xl">
                          About
                        </Text>
                      </Actionsheet.Item>
                      <Actionsheet.Item bg={Colors.text}>
                        <ContactUs />
                      </Actionsheet.Item>
                      <Actionsheet.Item bg={Colors.text}>
                        <PrivacyPolicy />
                      </Actionsheet.Item>
                      <Actionsheet.Item bg={Colors.text}>
                        <Feedback />
                      </Actionsheet.Item>
                      <Actionsheet.Item
                        onPress={() => navigation.navigate("Notification")}
                        bg={Colors.text}
                        startIcon={
                          <Icon
                            as={Ionicons}
                            size="8"
                            name="notifications-outline"
                            color={Colors.primary}
                          />
                        }
                      >
                        <Text color={Colors.onPrimary} fontSize="xl">
                          Notifications
                        </Text>
                      </Actionsheet.Item>
                      <Actionsheet.Item bg={Colors.text}></Actionsheet.Item>
                    </Actionsheet.Content>
                  </Actionsheet>
                </Pressable>
              </Box>
            </HStack>
          </Box>
        </Center>
        <ScrollView>
          <Box safeArea>
            <Box pl="5" mt="-8" alignItems="flex-start" flexDirection="column">
              <Text style={styles.text1} fontSize="xl" color={Colors.primary}>
                Welcome,
              </Text>
              <Text style={styles.text} fontSize="4xl" color={Colors.onPrimary}>
                {username}
              </Text>
            </Box>
            <Box pb={5} style={styles.shadow} mt="3">
              <Box style={styles.shadow}>
                <CarouselImages />
              </Box>
            </Box>
          </Box>
          <Box alignItems="center">
            <HStack space={48} pt={1}>
              <Text style={styles.text3} fontSize="2xl">
                Services
              </Text>
              <Text
                style={styles.text}
                fontSize="sm"
                pt={1}
                onPress={() => navigation.navigate("Services")}
              >
                View All
              </Text>
            </HStack>
            {/* <Divider
              mt={1}
              my="1"
              w="80"
              h="0.2"
              _light={{ bg: Colors.onPrimary }}
              _dark={{ bg: Colors.text }}
            /> */}
            <VStack pt="5">
              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                space={3}
                pb="3"
              >
                <Pressable
                  onPress={() => navigation.navigate("Compliance")}
                  position="relative"
                >
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
                        <HStack
                          alignItems="center"
                          justifyContent="center"
                          flexWrap="wrap"
                        >
                          <Image
                            source={require("../../assets/icons/2023.gif")}
                            alt="Alternate Text"
                            w="16"
                            h="16"
                          />
                          <Text
                            style={styles.text2}
                            color={Colors.onPrimary}
                            textAlign="center"
                            w={90}
                          >
                            Compliance Calendar
                          </Text>
                        </HStack>
                      </Box>
                    );
                  }}
                </Pressable>

                <MinWageScreen />
                <ComplianceNotScreen />
              </HStack>
              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                space={3}
                pb="5"
              >
                <BareActScreen />
                <AbstractActScreen />
                <HolidayListScreen />
              </HStack>
            </VStack>
          </Box>
          <Box alignItems="center" bg={Colors.background}>
            <Divider
              my="1"
              w="80"
              h="0.3"
              _light={{ bg: Colors.onPrimary }}
              _dark={{ bg: "muted.50" }}
            />
          </Box>
          <Box
            alignItems="center"
            style={{
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              elevation: 13,
            }}
            pb="5"
            bg={Colors.text}
            mx="5"
            mt="5"
            mb="12"
            rounded={10}
          >
            <HStack space={48} pt={5} pb={5}>
              <Text style={styles.text3} fontSize="xl">
                Number of Audits Done
              </Text>
            </HStack>
            <DonutChat />
          </Box>
          {/* <Testimonial /> */}
        </ScrollView>
      </Center>
    </Box>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
  },
  text1: {
    fontWeight: "300",
    color: "#ffffff",
    letterSpacing: 0.8,
  },
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.8,
    fontSize: 13,
    bottom: -10,
  },
  text3: {
    fontWeight: "300",
    color: Colors.primary,
    letterSpacing: 0.8,
    textAlign: "left",
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
