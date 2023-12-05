import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { Linking, StyleSheet } from "react-native";
import {
  Box,
  Text,
  Center,
  Input,
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
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
const BlogScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [blog_var, setBlog] = useState([]);

  useEffect(() => {
    getWeTag();
  }, []);

  async function getWeTag() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/blogs_view.php",
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
          // alert(JSON.stringify(data));
          setBlog(data[0].blog_data);
        })
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
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
                  position="absolute"
                  justifyContent="center"
                  left={2}
                  top={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/book.gif")}
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
                    >
                      Blogs
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={10}>
                    <Center>
                      <Box
                        safeArea
                        style={{
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Center>
                          <FormControl maxW="500" isInvalid>
                            <Box>
                              <Select
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                minWidth="300"
                                h="10"
                                color={Colors.primary}
                                fontSize="sm"
                                rounded={10}
                                accessibilityLabel="Reset Blogs"
                                placeholder="Reset Blogs"
                                _selectedItem={{
                                  bg: "teal.600",
                                  endIcon: <CheckIcon size={3} />,
                                }}
                                mt="1"
                              >
                                <Select.Item
                                  key="web1"
                                  label="Web Development"
                                  value="web"
                                />
                              </Select>
                            </Box>
                          </FormControl>
                          <Box alignItems="center">
                            <Input
                              mt={5}
                              mb={2}
                              bg={Colors.text}
                              color={Colors.onPrimary}
                              placeholder="Search Here"
                              w="80"
                              fontSize="md"
                              height="10"
                              borderRadius="20"
                              py="1"
                              px="2"
                              borderColor={Colors.onPrimary}
                              isHovered={false}
                              isFocused={false}
                              isDisabled={true}
                              InputLeftElement={
                                <Icon
                                  ml="4"
                                  size="5"
                                  color={Colors.onPrimary}
                                  as={<Ionicons name="ios-search" />}
                                />
                              }
                            />
                          </Box>
                          <ScrollView>
                            <HStack space={4} mt={3}>
                              {blog_var &&
                                blog_var.length > 0 &&
                                blog_var.map((blog_var, index) => (
                                  <Box
                                    key={"Blog" + index}
                                    bg={Colors.onPrimary}
                                    p={3}
                                    w="40"
                                    h="auto"
                                    rounded={9}
                                    shadow={9}
                                    borderColor="#ccc"
                                    borderWidth="1"
                                  >
                                    <VStack>
                                      <Image
                                        source={require("../../assets/Payroll_Management.png")}
                                        alt="Alternate Text"
                                        w="32"
                                        h="24"
                                        alignItems="center"
                                        mb={2}
                                      />
                                      <Divider />
                                      <Text
                                        fontSize="xs"
                                        bg={Colors.secondary}
                                        color={Colors.onPrimary}
                                        rounded={7}
                                        w="auto"
                                        my="1.5"
                                        textAlign="center"
                                      >
                                        {blog_var[0]}
                                      </Text>
                                      <Text
                                        fontSize="xs"
                                        textAlign="center"
                                      ></Text>
                                      <Text
                                        fontSize="sm"
                                        color={Colors.text}
                                        py="1.5"
                                        textAlign="center"
                                      >
                                        {blog_var[1]}
                                      </Text>
                                      <Pressable
                                        onPress={() =>
                                          downloadFile(blog_var[2])
                                        }
                                      >
                                        {({ isHovered, isPressed }) => {
                                          return (
                                            <Box
                                              alignItems="center"
                                              bgColor={
                                                isPressed
                                                  ? "#353841"
                                                  : isHovered
                                                  ? "#353841"
                                                  : "#353841"
                                              }
                                              style={{
                                                transform: [
                                                  {
                                                    scale: isPressed ? 0.96 : 1,
                                                  },
                                                ],
                                              }}
                                              bg={Colors.primary}
                                              shadow={5}
                                              borderWidth="1"
                                              borderColor={Colors.primary}
                                              rounded={5}
                                            >
                                              <Text
                                                color={Colors.onPrimary}
                                                fontSize="sm"
                                              >
                                                Read More
                                              </Text>
                                            </Box>
                                          );
                                        }}
                                      </Pressable>
                                    </VStack>
                                  </Box>
                                ))}
                            </HStack>
                          </ScrollView>
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
          Blogs
        </Text>
      </Box>
    </VStack>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
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
