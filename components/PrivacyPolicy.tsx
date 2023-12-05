import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
import { StyleSheet, Linking, ScrollView } from "react-native";
import {
  Text,
  Pressable,
  Actionsheet,
  Center,
  Icon,
  VStack,
  useDisclose,
  Image,
  Box,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Communications from "react-native-communications";
import MapView, { Marker } from "react-native-maps";

const PrivacyPolicy = () => {
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
          name="layers-outline"
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
          Privacy & Policy
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
                Privacy & Policy
              </Text>
            </Center>
            <Box>
              <Box
                w="80"
                h="96"
                bg={Colors.onPrimary}
                p="4"
                rounded={10}
                shadow={9}
                alignItems="center"
              >
                <Center>
                  <ScrollView>
                    <Text>
                      Welcome to Karma (Website : "www.karmamgmt.com") and
                      'WeChecked' mobile application. This User Agreement, the
                      User Privacy Policy, this Privacy Policy ("Policy")
                      describes the type of personal information we collect from
                      our User, purpose for collecting such information, how we
                      use it, with whom we share it and the choices available to
                      our customers regarding our use of the information. We
                      know that you care about your personal data and how it is
                      used, and we want you to trust that Karma Global Tech
                      Management LLC uses your personal data carefully. This
                      Privacy Notice will help you understand what personal data
                      we collect, why we collect it and what we do with it. We
                      value the trust you have in us. Therefore, we insist upon
                      the highest standards for secure transactions and customer
                      information privacy. We will not disclose the personal
                      information and sensitive information shared by the User
                      other than in compliance with this Policy. If you do not
                      consent to any of the terms enumerated in this Policy, do
                      not proceed to use the Site.
                    </Text>
                    <Text>
                      Please take a moment to familiarize yourself with our
                      privacy practices and let us know if you have any
                      questions by sending us an email or submitting a request
                      through the "Contact Us" form on our Site. We have tried
                      to keep this Notice as simple as possible, but if you're
                      not familiar with terms, such as cookies, IP addresses,
                      and browsers, then please read about these key terms
                      first. You have the right to object to certain uses of
                      your personal data including the use of your personal data
                      for direct marketing. See what your rights are and how you
                      can exercise them here.
                    </Text>
                    <Text>
                      By browsing, you accept this Privacy Policy and you admit
                      that KGTML won't be responsible for the use of the Website
                      and App in any way, by any user which might seem to be
                      Defamatory to anyone.
                    </Text>
                    <Text>
                      Karma Global Tech Management LLC ("us", "we", "KGTML" or
                      "Karma Management") is the author and publisher of the
                      internet resource www.karmamgmt.com and mobile
                      applications like 'Karma' and 'WeChecked' ("Website and
                      Apps") on the world wide web as well as the application
                      provided by KGTML, including but not limited to the
                      software and applications of the brand names like 'Karma,'
                      'WeChecked,' 'WeProcess' and 'Fulcrum.'
                    </Text>
                    <Text>
                      Your privacy is important to us, so we have developed a
                      privacy policy to explain how we collect, use, share, and
                      protect personal information about the Users of the
                      Services, and the visitors of Website (jointly and
                      severally referred to as "you" or "Users" in this Privacy
                      Policy). This Privacy Policy has been created to
                      demonstrate our effort and commitment to the protection of
                      your privacy and your personal information. Any
                      capitalized term used but not defined in this Privacy
                      Policy shall have the meaning attributed to it in our
                      Terms and Conditions. We encourage you to familiarize
                      yourself with our policies and let us know if you have any
                      questions. The Privacy Policy is in compliance with GDPR
                      policies though the same at this present time apply only
                      to EU member countries' citizens and use of their personal
                      data. KGTML offers technology platforms on
                      www.Karmamgmt.com and its Mobile Applications.
                    </Text>
                    <Text>
                      By accepting this Privacy Policy, you admit that KGTML
                      won't be responsible for the use of the Website and
                      application in any way, by any user which might seem to be
                      Defamatory to anyone.
                    </Text>
                    <Text>
                      At KGTML, we value your concerns about privacy & security
                      while browsing our Website. We make every effort to
                      guarantee that the information you provide will not be
                      misused. If for some reason the following privacy and
                      security policy does not answer your questions, please
                      contact us. By using the Website, you agree to the
                      provisions of this policy.
                    </Text>
                    <Text>
                      Our goal in this policy is to be completely transparent
                      about the data we collect, why we collect it, and how we
                      use it, in order to make your experiences of browsing and
                      using our services on this Website valuable
                    </Text>
                    <Text>
                      By confirming that you are bound by this privacy policy
                      (by the means provided on this Website), by using the
                      services or by otherwise giving us your information, you
                      agree to the practices and policies outlined in this
                      privacy policy and you hereby consent to our collection,
                      use, and sharing of your information as described in this
                      privacy policy. We reserve the right to limit the usage of
                      the Website and Application to just viewing. We reserve
                      the right to change, modify, add or delete portions of the
                      terms of this privacy policy, at our sole discretion, at
                      any time. If you use the services on behalf of someone
                      else or an entity, you represent that you are authorized
                      by such an individual or entity to accept this privacy
                      policy on such individual's or entity's behalf.
                    </Text>
                    <Text>
                      If you do not agree with this privacy policy at any time,
                      kindly do not divulge any personal information nor utilize
                      any of the services provided by us. However, if you do
                      wish to comply with the policy so as to avail our
                      services; all Personal Information that you provide to us
                      when registering to communicate through the Website or
                      that you otherwise provide on the Website or by phone,
                      online chat, emai,l or postal mail, will be stored by us,
                      regardless of whether you are a Site Visitor or a
                      Registered User. You represent and warrant to us that you
                      have the right and authority to provide us all Personal
                      Information you provide about yourself or others.
                    </Text>
                    <Text>Who Is Collecting It?</Text>
                    <Text>
                      Any personal data provided to or collected and controlled
                      by KGTML, the data controller.
                    </Text>
                    <Text>
                      This Privacy Notice also applies to Karma's marketing
                      content, including offers and advertisements of Karma,
                      WeChecked and Karma's brands, which we (or a data provider
                      acting on our behalf) send to you on third-party websites,
                      platforms, and applications based on your site usage
                      information. These third-party websites generally have
                      their own Privacy Notice and Terms and Conditions. We
                      encourage you to read them before using those websites.
                    </Text>
                    <Text>
                      We make every effort to guarantee that the information you
                      provide will not be misused. If for some reason the
                      following privacy and security policy does not answer your
                      questions, please contact us. We value your feedback and
                      look forward to improving our services to better meet your
                      needs. By using the Website's services, you agree to the
                      provisions of this policy.
                    </Text>
                    <Text>
                      Our goal in this policy is to be completely transparent
                      about the data we collect, why we collect it, and how we
                      use it, in order to make your experiences of browsing and
                      using our services on this Website valuable.
                    </Text>
                    <Text>
                      By confirming that you are bound by this privacy policy
                      (by the means provided on this Website), by using the
                      services or by otherwise giving us your information, you
                      agree to the practices and policies outlined in this
                      privacy policy and you hereby consent to our collection,
                      use and sharing of your information as described in this
                      privacy policy. We reserve the right to limit the usage of
                      the Website to just viewing. We reserve the right to
                      change, modify, add or delete portions of the terms of
                      this privacy policy, at our sole discretion, at any time.
                      If you use the services on behalf of someone else or an
                      entity, you represent that you are authorized by such an
                      individual or entity to accept this privacy policy on such
                      individual's or entity's behalf.
                    </Text>
                    <Text>
                      If you do not agree with this privacy policy at any time,
                      kindly do not divulge any personal information nor access
                      the platforms provided by us. However, if you do wish to
                      comply with the policy; all Personal Information that you
                      provide to us when registering communicating through the
                      Website or that you otherwise provide on the Website or by
                      phone, online chat, email or postal mail, will be stored
                      by us, regardless of whether you are a Site Visitor or a
                      Registered User. You represent and warrant to us that you
                      have the right and authority to provide us all Personal
                      Information you provide about yourself or others.
                    </Text>
                  </ScrollView>
                </Center>
              </Box>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </Pressable>
    </VStack>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.7,
    color: Colors.onPrimary,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: "300%",
    width: "170%",
  },
});
