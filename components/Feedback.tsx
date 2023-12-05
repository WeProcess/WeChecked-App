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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
const Feedback = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <VStack>
      <Pressable alignItems="flex-start" flexDirection="row" onPress={onOpen}>
        <Icon
          as={Ionicons}
          size="8"
          name="chatbox-ellipses-outline"
          color={Colors.primary}
        />
        <Text
          style={styles.text}
          color={Colors.onPrimary}
          fontSize="xl"
          pt="1"
          pl={3}
        >
          Feedback
        </Text>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content bg={Colors.text} pb={12}>
            <Center>
              <Box
                safeArea
                style={{
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <Text
                  // style={styles.text}
                  bold
                  color={Colors.primary}
                  fontSize="2xl"
                  pb={5}
                >
                  Feedback
                </Text>
                <Center>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Enter your Feedback Here"
                    style={styles.textArea}
                  />
                  <Box alignItems="center" pt="10">
                    <Pressable>
                      {({ isHovered, isPressed }) => {
                        return (
                          <Box
                            alignItems="center"
                            minWidth="300"
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
                              Submit
                            </Text>
                          </Box>
                        );
                      }}
                    </Pressable>
                  </Box>
                </Center>
              </Box>
            </Center>
          </Actionsheet.Content>
        </Actionsheet>
      </Pressable>
    </VStack>
  );
};

export default Feedback;

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
