import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
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
import FAQUpload from "../src/admin/FAQUpload";
const FAQ = () => {
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
                h="9"
                px="2"
                rounded="10"
                shadow={3}
                borderWidth="1"
                borderColor={Colors.text}
              >
                <Text
                  color={Colors.text}
                  fontSize="md"
                  style={styles.text1}
                  pt="1"
                  alignSelf="center"
                >
                  Your Act Name
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
                      FAQs
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={80}>
                    <Center>
                      <FormControl maxW="500" isInvalid>
                        <Box pt="24">
                          <Text
                            fontSize="lg"
                            color={Colors.onPrimary}
                            style={{ fontWeight: "300" }}
                          >
                            Act Name :
                          </Text>
                          <Input
                            variant="underlined"
                            placeholder="Your Act Name"
                          />
                        </Box>

                        <Box alignItems="center" pt="10">
                          <FAQUpload />
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

export default FAQ;

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
