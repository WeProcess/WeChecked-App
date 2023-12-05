import { StyleSheet, Text, TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      selectionColor={Colors.primary}
      style={[
        {
          fontSize: FontSize.small,
          padding: Spacing * 1,
          borderColor: Colors.gray,
          borderBottomWidth: 2,
          borderRadius: Spacing,
          marginVertical: 5,
        },
        focused && {
          borderBottomWidth: 2,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
