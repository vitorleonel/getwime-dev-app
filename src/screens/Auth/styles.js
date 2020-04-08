import styled from "styled-components/native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;

  padding-horizontal: 24px;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 32 : 32}px;
`;
