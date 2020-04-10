import React from "react";
import RNPickerSelect from "react-native-picker-select";

import styles from "./styles";

export default function Select(props) {
  return (
    <RNPickerSelect
      style={styles}
      useNativeAndroidPickerStyle={false}
      placeholder={{
        label: props.placeholder || "Escolha uma opção",
        value: null,
      }}
      {...props}
    />
  );
}
