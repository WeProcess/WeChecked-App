// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Animated,
//   StyleSheet,
// } from "react-native";
// import Colors from "../constants/Colors";

// interface AccordionProps {
//   title: string;
//   quation_ans: string[];
// }
// const Accordion = ({ title, quation_ans }: AccordionProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const animatedValue = useState(new Animated.Value(0))[0];

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//     Animated.timing(animatedValue, {
//       toValue: isOpen ? 0 : 1,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
//         <Text style={styles.title}>{title}</Text>
//       </TouchableOpacity>
//       <Animated.View
//         style={{
//           height: isOpen
//             ? "auto"
//             : animatedValue.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0, 200],
//               }),
//           overflow: "hidden",
//         }}
//       >
//         {quation_ans.map((quation_ans, index) => (
//           <View key={"Acco" + index} style={styles.content}>
//             <Text style={styles.title}>{quation_ans.question}</Text>
//             <Text>{quation_ans.answer}</Text>
//           </View>
//         ))}
//       </Animated.View>
//     </View>
//   );
// };

// export default Accordion;

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   header: {
//     padding: 10,
//     backgroundColor: "#f1f1f1",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   quation: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   content: {
//     padding: 10,
//     backgroundColor: Colors.onPrimary,
//   },
// });
