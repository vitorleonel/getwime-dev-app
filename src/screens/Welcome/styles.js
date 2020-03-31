import styled from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background-color: #ffffff;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 32 : 32}px;
  padding-bottom: ${getBottomSpace() + 32}px;
`;

export const Image = styled.Image.attrs({
  source: require("../../images/welcome.png"),
  resizeMode: "contain"
})`
  width: 100%;
  max-height: 253px;
`;
