import styled from "styled-components/native";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const Search = styled.View`
  background-color: #ffffff;
  border-radius: 6px;
  margin-horizontal: 24px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);

  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#bababa",
  autoCapitalize: "none",
})`
  flex: 1;
  height: 48px;
  padding-horizontal: 12px;
  color: #2d3436;
  font-size: 16px;
  border-right-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.15);
`;

export const SearchAddChat = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 48px;
  justify-content: center;
`;

export const ChatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
})``;

export const Chat = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;

  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

export const ChatImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 86px;
  height: 86px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
