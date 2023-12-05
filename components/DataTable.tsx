import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import Colors from "../constants/Colors";
const tableDataSample = {
  tableHead: [
    "Sr. No.",
    "Category of Law",
    "Name of Lagalisations",
    "Appropriate Government",
    "State",
    "Regulating Authority",
    "Appropriate Authority",
    "Authority",
    "Address",
    "Contact",
    "Email",
  ],
  widthArr: [90, 130, 130, 150, 120, 150, 150, 140, 150, 140, 150],
  tableData: [
    [
      "Semi-Skilled/Unskilled Supervisory",
      "586.00",
      "15236.00",
      "$3.49",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
      "Semi-Skilled/Unskilled Supervisory",
      "$359,080,563,225",
      "$359,080,563,225",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
    ],
    [
      "Semi-Skilled/Unskilled Supervisory",
      "586.00",
      "15236.00",
      "$3.49",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
      "Semi-Skilled/Unskilled Supervisory",
      "$359,080,563,225",
      "$359,080,563,225",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
    ],
    [
      "Semi-Skilled/Unskilled Supervisory",
      "586.00",
      "15236.00",
      "$3.49",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
      "Semi-Skilled/Unskilled Supervisory",
      "$359,080,563,225",
      "$359,080,563,225",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
    ],
    [
      "Semi-Skilled/Unskilled Supervisory",
      "586.00",
      "15236.00",
      "$3.49",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
      "Semi-Skilled/Unskilled Supervisory",
      "$359,080,563,225",
      "$359,080,563,225",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
    ],
    [
      "Semi-Skilled/Unskilled Supervisory",
      "586.00",
      "15236.00",
      "$3.49",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
      "Semi-Skilled/Unskilled Supervisory",
      "$359,080,563,225",
      "$359,080,563,225",
      "$359,080,563,225",
      "Semi-Skilled/Unskilled Supervisory",
    ],
  ],
};
const DataTable_1 = () => {
  const [data, setData] = React.useState(tableDataSample);
  const [datatableid] = useState("DataTable");

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table
            borderStyle={{ borderWidth: 0.7, borderColor: Colors.onPrimary }}
          >
            <Row
              data={data.tableHead}
              widthArr={data.widthArr}
              style={styles.head}
              textStyle={{
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            />
          </Table>
          <ScrollView>
            <Table
              borderStyle={{ borderWidth: 0.7, borderColor: Colors.primary }}
            >
              {data.tableData.map((rowData, index) => (
                <Row
                  key={datatableid + index}
                  data={rowData}
                  widthArr={data.widthArr}
                  style={styles.rowSection}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  rowSection: { height: "auto" },
  head: { height: 34, backgroundColor: Colors.primary },
  headText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text: { margin: 5, fontSize: 12, textAlign: "center" },
});
export default DataTable_1;
