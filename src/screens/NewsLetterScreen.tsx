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
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MojoNews from "../../components/MojoNews";
import WeTag from "../../components/WeTag";
const NewsLetterScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
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
                  position="absolute"
                  justifyContent="center"
                  left={2}
                  top={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/document.gif")}
                    alt="Alternate Text"
                    w="16"
                    h="16"
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
                      News Letters
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={48}>
                    <Center>
                      <Box
                        safeArea
                        style={{
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Center>
                          <Box
                            w="80"
                            h="32"
                            bg={Colors.onPrimary}
                            p="4"
                            rounded={10}
                            shadow={9}
                            alignItems="center"
                          >
                            <MojoNews />
                          </Box>
                          <Box
                            w="80"
                            h="32"
                            bg={Colors.onPrimary}
                            p="4"
                            rounded={10}
                            mt="5"
                            shadow={9}
                            alignItems="center"
                          >
                            <WeTag />
                          </Box>
                        </Center>
                      </Box>
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
          News Letters
        </Text>
      </Box>
    </VStack>
  );
};

export default NewsLetterScreen;

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
});
