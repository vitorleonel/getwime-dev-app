import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: ${props => props.width || 100}%;
  height: ${props => props.height || 48}px;
  border-radius: 6px;

  ${props => props.marginTop && `margin-top: ${props.marginTop}px;`}
  ${props => props.marginRight && `margin-right: ${props.marginRight}px;`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`}
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}px;`}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${props => !props.outlined && `background-color: #0984E3;`}

  ${props =>
    props.outlined &&
    `
    border-width: 1px;
    border-color: #0984E3;
  `}
`;
