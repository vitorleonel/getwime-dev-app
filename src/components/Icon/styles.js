import styled from "styled-components/native";
import Icons from "@expo/vector-icons/Feather";

export const Container = styled(Icons)`
  ${props => props.marginTop && `margin-top: ${props.marginTop}px;`}
  ${props => props.marginRight && `margin-right: ${props.marginRight}px;`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`}
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}px;`}
`;
