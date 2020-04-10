import styled from "styled-components/native";

export const Container = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.placeholderColor || "#bababa",
}))`
  width: 100%;
  max-height: ${(props) => props.maxHeight || props.height || 48}px;

  color: #2d3436;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  border-radius: 6px;
  padding: 14px;
  font-size: 16px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
  text-align-vertical: top;
`;
