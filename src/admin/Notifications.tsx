// import Colors from "../../constants/Colors";
// import { StyleSheet } from "react-native";
// import { useState, useEffect, useRef } from "react";
// import { View, Button, Platform } from "react-native";
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";
// import { Notification } from "expo-notifications";
// import {
//   Box,
//   Text,
//   Center,
//   FormControl,
//   Select,
//   CheckIcon,
//   WarningOutlineIcon,
//   Pressable,
//   Actionsheet,
//   Avatar,
//   Icon,
//   Image,
//   VStack,
//   Input,
//   HStack,
//   useDisclose,
// } from "native-base";
// import { Ionicons } from "@expo/vector-icons";
// import MiniWageAdmin from "../../components/MiniWageAdmin";
// import MiniWageUpload from "../../components/MiniWageUpload";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// // Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
// async function sendPushNotification(expoPushToken: any) {
//   const message = {
//     to: expoPushToken,
//     sound: "default",
//     title: "Original Title",
//     body: "And here is the body!",
//     data: { someData: "goes here" },
//   };

//   await fetch("https://exp.host/--/api/v2/push/send", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Accept-encoding": "gzip, deflate",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(message),
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Device.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert("Must use physical device for Push Notifications");
//   }

//   if (Platform.OS === "android") {
//     Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   return token;
// }
// {
//   const Notifications = () => {
//     const { isOpen, onOpen, onClose } = useDisclose();
//     const [expoPushToken, setExpoPushToken] = useState("");
//     const [notification, setNotification] = useState<Notification | undefined>(
//       undefined
//     );
//     const notificationListener = useRef<undefined | Notifications.Subscription>(
//       undefined
//     );
//     const responseListener = useRef<undefined | Notifications.Subscription>(
//       undefined
//     );
//     const [token, setToken] = useState<string | undefined>(undefined);

//     useEffect(() => {
//       registerForPushNotificationsAsync().then((token: any) =>
//         setExpoPushToken(token)
//       );

//       notificationListener.current =
//         Notifications.addNotificationReceivedListener((notification) => {
//           setNotification(notification);
//         });

//       responseListener.current =
//         Notifications.addNotificationResponseReceivedListener((response) => {
//           console.log(response);
//         });

//       return () => {
//         if (notificationListener.current) {
//           Notifications.removeNotificationSubscription(
//             notificationListener.current
//           );
//           notificationListener.current.remove();
//         }
//       };
//     }, []);
//     return (
//       <VStack py="3">
//         <Box flex={1} alignItems="center">
//           <Pressable onPress={onOpen} position="relative">
//             {({ isHovered, isPressed }) => {
//               return (
//                 <Box
//                   bgColor={
//                     isPressed ? "#3E4095" : isHovered ? "#3E4095" : "#3E4095"
//                   }
//                   style={{
//                     transform: [
//                       {
//                         scale: isPressed ? 0.96 : 1,
//                       },
//                     ],
//                     shadowColor: "black",
//                     shadowOffset: {
//                       width: 0,
//                       height: 6,
//                     },
//                     shadowOpacity: 0.39,
//                     shadowRadius: 8.3,
//                     elevation: 13,
//                   }}
//                   bg={Colors.onPrimary}
//                   w="80"
//                   h="10"
//                   px="4"
//                   py={1}
//                   rounded="10"
//                   shadow={3}
//                   borderWidth="1"
//                   borderColor={Colors.text}
//                 >
//                   <Text
//                     color={Colors.text}
//                     fontSize="lg"
//                     style={styles.text1}
//                     pt="1"
//                   >
//                     Send Notification
//                   </Text>
//                   <Actionsheet
//                     isOpen={isOpen}
//                     onClose={onClose}
//                     size="full"
//                     bg={Colors.background}
//                   >
//                     <HStack m={5}>
//                       <Text
//                         color={Colors.onPrimary}
//                         fontSize="3xl"
//                         style={{ fontWeight: "300" }}
//                         pt={5}
//                       >
//                         Minimum Wages
//                       </Text>
//                     </HStack>
//                     <Actionsheet.Content bg={Colors.text} pb={72}>
//                       <Center>
//                         <Box safeArea alignItems="center">
//                           <View
//                             style={{
//                               flex: 1,
//                               alignItems: "center",
//                               justifyContent: "space-around",
//                             }}
//                           >
//                             <Text>Your expo push token: {expoPushToken}</Text>
//                             <View
//                               style={{
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                               }}
//                             >
//                               <Text>
//                                 Title: {notification?.request.content.title}
//                               </Text>
//                               <Text>
//                                 Body: {notification?.request.content.body}
//                               </Text>
//                               <Text>
//                                 Data:{" "}
//                                 {notification &&
//                                   JSON.stringify(
//                                     notification.request.content.data
//                                   )}
//                               </Text>
//                             </View>
//                             <Button
//                               title="Press to Send Notification"
//                               onPress={async () => {
//                                 await sendPushNotification(expoPushToken);
//                               }}
//                             />
//                           </View>
//                         </Box>
//                       </Center>
//                     </Actionsheet.Content>
//                   </Actionsheet>
//                 </Box>
//               );
//             }}
//           </Pressable>
//         </Box>
//       </VStack>
//     );
//   };
// }
// export default Notification;

// const styles = StyleSheet.create({
//   text2: {
//     fontWeight: "300",
//     color: Colors.onPrimary,
//     letterSpacing: 0.9,
//     fontSize: 13,
//     bottom: -10,
//   },
//   text1: {
//     fontWeight: "300",
//     letterSpacing: 0.9,
//   },
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.39,
//     shadowRadius: 8.3,
//     elevation: 13,
//   },
// });
