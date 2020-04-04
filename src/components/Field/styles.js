import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#bababa"
})`
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  border-radius: 6px;
  padding-horizontal: 14px;
  font-size: 16px;

  ${Platform.OS === "ios" &&
    `
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  `}

  ${Platform.OS === "android" &&
    `
    elevation: 3;
  `}
`;
