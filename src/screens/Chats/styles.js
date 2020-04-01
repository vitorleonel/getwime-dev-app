import styled from "styled-components/native";
import { Platform } from "react-native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 24 : 24}px;
  padding-horizontal: 24px;
`;

export const Search = styled.View`
  background-color: #ffffff;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;

  ${Platform.OS === "ios" &&
    `
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  `}

  ${Platform.OS === "android" &&
    `
    elevation: 2;
  `}
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#bababa",
  autoCapitalize: "none"
})`
  flex: 1;
  height: 48px;
  padding-horizontal: 12px;
  color: #2d3436;
  font-size: 16px;
  border-right-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.1);
`;

export const SearchAddChat = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 48px;
  justify-content: center;
`;
