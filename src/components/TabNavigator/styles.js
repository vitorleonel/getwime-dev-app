import styled from "styled-components/native";
import { Platform } from "react-native";
import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;
  height: ${Platform.OS === "ios" && isIphoneX()
    ? getBottomSpace() + 56
    : 56}px;
  padding-bottom: ${getBottomSpace()}px;

  ${Platform.OS === "ios" && `box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.03);`}

  ${Platform.OS === "android" &&
    `
    border-top-width: 1px;
    border-top-color: rgba(0, 0, 0, 0.05);
    elevation: 10;
  `}
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex-direction: row;
  align-items: center;
`;
