import styled from "styled-components/native";
import {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
  height: 56px;
  background-color: #ffffff;
  padding-horizontal: 24px;

  flex-direction: row;
  align-items: center;

  ${Platform.OS === "ios" && `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);`}
  ${Platform.OS === "android" && `elevation: 3;`}
`;

export const Messages = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 16,
    flex: 1,
  },
})``;

export const Message = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-self: ${(props) => (props.me ? "flex-end" : "flex-start")};
  max-width: 80%;
  padding: 12px;
  border-radius: 6px;
  background-color: ${(props) => (props.me ? "#0984E3" : "#f1f0f0")};
  margin-bottom: 16px;
`;

export const Write = styled.View`
  background-color: #ffffff;
  padding-horizontal: 24px;
  padding-bottom: ${getBottomSpace()}px;

  flex-direction: row;
  align-items: center;

  ${Platform.OS === "ios" && `box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.03);`}

  ${Platform.OS === "android" &&
  `
    border-top-width: 1px;
    border-top-color: rgba(0, 0, 0, 0.05);
    elevation: 10;
  `}
`;

export const WriteInput = styled.TextInput.attrs({
  multiline: true,
  placeholderTextColor: "#bababa",
})`
  flex: 1;
  min-height: 40px;
  max-height: 128px;
  font-size: 16px;
  margin-right: 16px;
  margin-vertical: 8px;
`;
