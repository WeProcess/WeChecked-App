import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import React, { useCallback, useState } from "react";
import DocumentPicker, {
  types,
  DocumentPickerResponse,
} from "react-native-document-picker";

const UploadFiles = () => {
  const [fileResponse, setFileResponse] = useState<
    DocumentPickerResponse | undefined
  >(undefined);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const [response] = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.pdf],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {fileResponse ? (
        <Text style={styles.uri} numberOfLines={1} ellipsizeMode={"middle"}>
          {fileResponse.uri}
        </Text>
      ) : null}
      <Button title="Select 📑" onPress={handleDocumentSelection} />
    </SafeAreaView>
  );
};

export default UploadFiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  uri: {
    fontSize: 16,
    marginVertical: 10,
  },
});
