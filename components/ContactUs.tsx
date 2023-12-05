import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
import { StyleSheet, Linking } from "react-native";
import {
  Text,
  Pressable,
  Actionsheet,
  Center,
  Icon,
  VStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Communications from "react-native-communications";
import MapView, { Marker } from "react-native-maps";

const ContactUs = () => {
  // const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const phoneNumber = "+91 8828852762";
  const makePhoneCall = () => {
    Communications.phonecall(phoneNumber, true);
  };
  const handleMailPress = () => {
    const recipient = "enquiry@karmamgmt.com";
    const subject = "Hello";
    const body = "I need some assistance.";

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl)
      .then(() => console.log("Mail opened"))
      .catch((error) => console.error("Mail error:", error));
  };
  const region = {
    latitude: 19.0756582,
    longitude: 72.8517412,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <VStack>
      <Pressable alignItems="flex-start" flexDirection="row" onPress={onOpen}>
        <Icon
          as={Ionicons}
          size="8"
          name="call-outline"
          color={Colors.primary}
        />
        <Text
          style={styles.text}
          color={Colors.onPrimary}
          fontSize="xl"
          pt="1"
          pl={3}
          bold
        >
          Contact Us
        </Text>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content bg={Colors.text} pb={12}>
            <Center pb={5}>
              <Text
                // style={styles.text}
                bold
                color={Colors.primary}
                fontSize="2xl"
                pt={5}
              >
                Contact Us
              </Text>
            </Center>
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
              onPress={handleMailPress}
            >
              <Text color={Colors.onPrimary} fontSize="md">
                enquiry@karmamgmt.com
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
              onPress={makePhoneCall}
            >
              <Text color={Colors.onPrimary} fontSize="md">
                88288 52762
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item
              bg={Colors.text}
              startIcon={
                <Icon
                  as={Ionicons}
                  name="location-outline"
                  size="6"
                  color={Colors.primary}
                />
              }
            >
              <Text color={Colors.onPrimary} fontSize="lg">
                Our office location
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item bg={Colors.text} h={32}>
              <Text color={Colors.onPrimary} fontSize="lg">
                Our office location
              </Text>
              <MapView
                style={styles.map}
                initialRegion={region} //your region data goes here.
              >
                <Marker coordinate={region} />
              </MapView>
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Pressable>
    </VStack>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.7,
    color: Colors.onPrimary,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: "300%",
    width: "190%",
  },
});
