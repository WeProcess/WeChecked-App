import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import Colors from "../constants/Colors";

export const tableDataSample = {
  tableHead: [
    // "Class Of Employment",
    // "Total Per Day",
    // "Total Per Month",
    // "Class Of Employment",
    // "Total Per Day",
  ],
  // widthArr: [150, 110, 110, 150, 120, 150],
  tableData: [
    // ["Unskilled", "529.00", "13754.00", "$2.70", "$839,702,328,904"],
    // [
    //   "Semi-Skilled/Unskilled Supervisory",
    //   "586.00",
    //   "15236.00",
    //   "$3.49",
    //   "$359,080,563,225",
    // ],
    // ["Skilled/Clerical", "671.00", "17446.00", "$0.03", "$79,470,820,738"],
    // ["Highly Skilled", "729.00", "18954.00", "$4.68", "$69,446,144,361"],
    // ["Unskilled", "529.00", "13754.00", "$2.70", "$839,702,328,904"],
    // [
    //   "Semi-Skilled/Unskilled Supervisory",
    //   "586.00",
    //   "15236.00",
    //   "$3.49",
    //   "$359,080,563,225",
    // ],
    // ["Skilled/Clerical", "671.00", "17446.00", "$0.03", "$79,470,820,738"],
    // ["Highly Skilled", "729.00", "18954.00", "$4.68", "$69,446,144,361"],
    // ["Unskilled", "529.00", "13754.00", "$2.70", "$839,702,328,904"],
    // [
    //   "Semi-Skilled/Unskilled Supervisory",
    //   "586.00",
    //   "15236.00",
    //   "$3.49",
    //   "$359,080,563,225",
    // ],
    // ["Skilled/Clerical", "671.00", "17446.00", "$0.03", "$79,470,820,738"],
    // ["Highly Skilled", "729.00", "18954.00", "$4.68", "$69,446,144,361"],
    // ["Unskilled", "529.00", "13754.00", "$2.70", "$839,702,328,904"],
    // [
    //   "Semi-Skilled/Unskilled Supervisory",
    //   "586.00",
    //   "15236.00",
    //   "$3.49",
    //   "$359,080,563,225",
    // ],
    // ["Skilled/Clerical", "671.00", "17446.00", "$0.03", "$79,470,820,738"],
    // ["Highly Skilled", "729.00", "18954.00", "$4.68", "$69,446,144,361"],
  ],
};

const DataTable = () => {
  const [data, setData] = React.useState(tableDataSample);
  const widthArr = new Array(data.tableHead.length).fill(100);

  const [tabid] = useState("tab");

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table
            borderStyle={{ borderWidth: 0.7, borderColor: Colors.onPrimary }}
          >
            <Row
              data={data.tableHead}
              widthArr={widthArr}
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
                  key={tabid + index}
                  data={rowData}
                  widthArr={widthArr}
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
export default DataTable;
