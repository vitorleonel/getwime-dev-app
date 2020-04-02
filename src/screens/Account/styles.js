import styled from "styled-components/native";
import { Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const Image = styled.ImageBackground`
  width: 128px;
  height: 128px;
  border-radius: 128px;
  background-color: #bababa;

  justify-content: flex-end;
  align-items: flex-end;
`;

export const ImageChange = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #dfe6e9;
  justify-content: center;
  align-items: center;

  ${Platform.OS === "ios" &&
    `
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  `}

  ${Platform.OS === "android" &&
    `
    elevation: 3;
  `}
`;

export const Divider = styled.View`
  width: 100%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #bababa;
`;
