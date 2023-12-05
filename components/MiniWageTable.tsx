// import React, { Component } from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { Table, TableWrapper, Row } from "react-native-table-component";

// interface MyTableProps {}

// interface MyTableState {
//   tableData: string[][];
//   tableHead: string[];
// }

// class MyTable extends Component<MyTableProps, MyTableState> {
//   constructor(props: MyTableProps) {
//     super(props);
//     this.state = {
//       tableData: [
//         ["John", "Doe", "25", "32"],
//         ["Jane", "Doe", "28", "32"],
//         ["Bob", "Smith", "32", "32"],
//       ],
//       tableHead: ["First Name", "Last Name", "Age", "Age"],
//     };
//   }

//   render() {
//     const { tableData, tableHead } = this.state;
//     return (
//       <View style={styles.container}>
//         <ScrollView horizontal={true}>
//           <View>
//             <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
//               <Row
//                 data={tableHead}
//                 style={styles.head}
//                 textStyle={styles.textHeader}
//                 widthArr={[100, 100, 100]}
//               />
//             </Table>
//             <ScrollView style={styles.dataWrapper}>
//               <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
//                 {tableData.map((rowData, index) => (
//                   <Row
//                     key={index}
//                     data={rowData}
//                     style={[styles.row]}
//                     textStyle={styles.text}
//                     widthArr={[100, 100, 100]}
//                   />
//                 ))}
//               </Table>
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: 30 },
//   head: { height: 40, backgroundColor: "#f1f8ff" },
//   textHeader: { margin: 6, fontWeight: "bold" },
//   text: { margin: 6 },
//   row: { height: 30, backgroundColor: "#FFF1C1" },
// });

// export default MyTable;
