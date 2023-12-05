import {
  Box,
  Center,
  Icon,
  Pressable,
  Text,
  Image,
  useDisclose,
} from "native-base";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { Linking, StyleSheet } from "react-native";
import ContactUs from "../../components/ContactUs";
import Feedback from "../../components/Feedback";

const SettingsScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const email = "avinash@karmamgmt.com";

  async function openLink(url: string) {
    Linking.openURL(url);
  }

  return (
    <Box safeArea flex="1" h="100" maxWidth="100%" bg={Colors.background}>
      <Center pb={5}>
        <Image source={require("../../assets/icon.png")} size="xl" alt="Logo" />
        <Text style={styles.text} color={Colors.onPrimary} fontSize="sm">
          Welcome to
        </Text>
        <Text style={styles.text} color={Colors.primary} fontSize="lg">
          WeChecked
        </Text>
      </Center>
      <Box py={3} px={6}>
        <Pressable
          alignItems="flex-start"
          flexDirection="row"
          onPress={() => openLink("https://karmamgmt.com/about/")}
        >
          <Icon
            as={Ionicons}
            size="8"
            name="home-outline"
            color={Colors.primary}
          />
          <Text
            style={styles.text}
            color={Colors.onPrimary}
            fontSize="xl"
            pt="1"
            pl={3}
          >
            About
          </Text>
        </Pressable>
      </Box>
      <Box py={3} px={6}>
        <Pressable
          alignItems="flex-start"
          flexDirection="row"
          onPress={() => navigation.navigate("Privacy")}
        >
          <Icon
            as={Ionicons}
            size="8"
            name="layers-outline"
            color={Colors.primary}
          />
          <Text
            style={styles.text}
            color={Colors.onPrimary}
            fontSize="xl"
            pt="1"
            pl={3}
          >
            Privacy Policy
          </Text>
        </Pressable>
      </Box>
      <Box py={3} px={6}>
        <ContactUs />
      </Box>
      <Box py={3} px={6}>
        <Feedback />
      </Box>
    </Box>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.7,
  },
});
