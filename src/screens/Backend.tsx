import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import {
  Box,
  Text,
  Center,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Pressable,
} from "native-base";
import React, { useState, Component, useEffect } from "react";

const MinWageScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [name, setName] = React.useState("");
  const [state, setState] = useState([]);
  let [stateid] = React.useState("BackState");

  useEffect(() => {
    getState();
  }, []);

  async function getState() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/State_extract.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setState(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  return (
    <Box
      safeArea
      style={{
        backgroundColor: Colors.background,
        height: "100%",
        alignItems: "center",
      }}
    >
      <Center>
        <FormControl maxW="500" isRequired isInvalid>
          <Box>
            <FormControl.Label>
              <Text fontSize="xl" bold color={Colors.secondary}>
                States
              </Text>
            </FormControl.Label>
            <Select
              minWidth="300"
              h="10"
              fontSize="sm"
              rounded={10}
              accessibilityLabel="Choose States"
              placeholder="Choose States"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={3} />,
              }}
              mt="1"
            >
              {state &&
                state.length > 0 &&
                state.map((state, index) => (
                  <Select.Item
                    key={stateid + index}
                    label={state}
                    value={state}
                  />
                ))}
            </Select>
            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
          </Box>

          <Box py="5">
            <FormControl.Label>
              <Text fontSize="xl" bold color={Colors.secondary}>
                Industries
              </Text>
            </FormControl.Label>
            <Select
              minWidth="300"
              h="10"
              fontSize="sm"
              rounded={10}
              accessibilityLabel="Choose Industries"
              placeholder="Choose Industries"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={3} />,
              }}
              mt="1"
            >
              {/* {industry &&
                industry.length > 0 &&
                industry.map((industry, index) => (
                  <Select.Item
                    key={industry}
                    label={industry}
                    value={industry}
                  />
                ))} */}
            </Select>
            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
          </Box>

          <Box>
            <FormControl.Label>
              <Text fontSize="lg" bold color={Colors.secondary}>
                Applicable Dates
              </Text>
            </FormControl.Label>
            <Select
              minWidth="300"
              h="10"
              fontSize="sm"
              rounded={10}
              accessibilityLabel="Choose Dates"
              placeholder="Choose Dates"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={3} />,
              }}
              mt="1"
            >
              <Select.Item
                key="ux1"
                color={Colors.secondary}
                label="UX Research"
                value="ux"
              />
            </Select>
            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                    </FormControl.ErrorMessage> */}
          </Box>

          <Box alignItems="center" pt="10">
            <Pressable onPress={() => navigation.navigate("Home", { email: "string" })}>
              {({ isHovered, isPressed }) => {
                return (
                  <Box
                    alignItems="center"
                    minWidth="300"
                    bgColor={
                      isPressed ? "#3E4095" : isHovered ? "#3E4095" : "#3E4095"
                    }
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
                      color={Colors.onPrimary}
                      fontWeight="medium"
                      fontSize="xl"
                    >
                      Submit
                    </Text>
                  </Box>
                );
              }}
            </Pressable>
          </Box>
        </FormControl>
      </Center>
    </Box>
  );
};

export default MinWageScreen;
