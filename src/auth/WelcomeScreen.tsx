import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
// import Font from "../../constants/Font";
import Layout from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { ScrollView } from "native-base";
const { height } = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.background,
        height: "100%",
      }}
    >
      <SafeAreaView>
        <View>
          <ImageBackground
            style={{
              marginTop: 30,
              height: height / 2.1,
            }}
            resizeMode="contain"
            source={require("../../assets/log-2.png")}
          />
          <View
            style={{
              paddingHorizontal: Spacing * 4,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                // fontFamily: Font["poppins-bold"],
                textAlign: "center",
                fontWeight: "300",
                letterSpacing: 0.8,
              }}
            >
              Our Passion, Your Growth
            </Text>

            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.onPrimary,
                // fontFamily: "poppins-regular",
                textAlign: "center",
                marginTop: Spacing * 2,
                fontWeight: "300",
                letterSpacing: 0.8,
              }}
            >
              GoTo tool for knowledge and information on Labour Compliance.
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={(styles.button, styles.button_1)}
            >
              <Text
                style={{
                  // fontFamily: "poppins-regular",
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                  fontWeight: "300",
                  letterSpacing: 0.8,
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 3,
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: Spacing * 2,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.button_1}
            >
              <Text
                style={{
                  // fontFamily: "poppins-regular",
                  color: Colors.onPrimary,
                  fontSize: FontSize.large,
                  textAlign: "center",
                  fontWeight: "300",
                  letterSpacing: 0.8,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

WelcomeScreen.navigationOptions = {
  tabBarVisible: false,
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 0.61,
  },
  footer: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
  },
  button_1: {
    paddingVertical: Spacing * 0.8,
    backgroundColor: Colors.text,
    borderWidth: 0,
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  text: {
    // fontFamily: "poppins-regular",
    color: Colors.background,
    fontSize: FontSize.large,
    textAlign: "center",
    fontWeight: "300",
  },
});
