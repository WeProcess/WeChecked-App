import Colors from "../constants/Colors";
import { StyleSheet, TextInput } from "react-native";
import {
  Box,
  Text,
  Center,
  Pressable,
  Actionsheet,
  VStack,
  Icon,
  useDisclose,
  Avatar,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
import { HomeStackNavigatorParamList } from "../src/navigation/types";
import HomeStackNavigator from "../src/navigation/HomeStack";

interface HomeScreenProps {
  route: RouteProp<HomeStackNavigatorParamList, "Home">;
}

type emailprops = { email: string };

const UserProfile = (props: emailprops) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [UserData, setUserData] = useState([]);
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [usernumber, setUserNumber] = useState("");

  const email = props.email;

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
  return (
    <VStack>
      <Pressable alignItems="flex-start" flexDirection="row" onPress={onOpen}>
        <Icon
          as={Ionicons}
          size="8"
          name="person-outline"
          color={Colors.primary}
        />
        <Text
          style={styles.text}
          color={Colors.onPrimary}
          fontSize="xl"
          pt="1"
          pl={3}
        >
          User Profile
        </Text>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content bg={Colors.text}>
            <Box
              bg={Colors.text}
              w="100%"
              h={120}
              px={4}
              justifyContent="center"
            >
              <Box
                bg={Colors.text}
                justifyContent="flex-start"
                flexDirection="row"
                alignItems="center"
              >
                <Avatar
                  bg={Colors.text}
                  size="xl"
                  mr="2"
                  source={require("../assets/profile.jpg")}
                >
                  RS
                </Avatar>
                <Box
                  justifyContent="flex-start"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text bold fontSize="2xl" color={Colors.onPrimary}>
                    Hello !!
                  </Text>
                  <Text pl="5" bold fontSize="xl" color={Colors.primary}>
                    {username}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Actionsheet.Item
              bg={Colors.text}
              startIcon={
                <Icon
                  as={Ionicons}
                  size="6"
                  name="mail-open-outline"
                  color={Colors.primary}
                />
              }
            >
              <Text color={Colors.onPrimary} fontSize="md">
                {useremail}
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item
              bg={Colors.text}
              startIcon={
                <Icon
                  as={Ionicons}
                  name="call-outline"
                  size="6"
                  color={Colors.primary}
                />
              }
            >
              <Text color={Colors.onPrimary} fontSize="md">
                {usernumber}
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() =>
                navigation.navigate("Profile", { email: useremail })
              }
              bg={Colors.text}
              startIcon={
                <Icon
                  as={Ionicons}
                  size="6"
                  name="pencil-outline"
                  color={Colors.primary}
                />
              }
            >
              <Text color={Colors.onPrimary} fontSize="md">
                Edit Profile
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={() => navigation.navigate("Welcome")}
              bg={Colors.text}
              startIcon={
                <Icon
                  as={Ionicons}
                  size="6"
                  name="exit-outline"
                  color={Colors.primary}
                />
              }
            >
              <Text color={Colors.onPrimary} fontSize="md">
                Logout
              </Text>
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Pressable>
    </VStack>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
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
  text: {
    fontWeight: "300",
    letterSpacing: 0.7,
    color: Colors.onPrimary,
  },
  textArea: {
    borderColor: "#CCCCCC",
    backgroundColor: Colors.onPrimary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    width: 300,
  },
});
