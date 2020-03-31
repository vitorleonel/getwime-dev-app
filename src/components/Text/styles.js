import styled from "styled-components/native";

export const Container = styled.Text`
  font-size: ${props => props.size || 16}px;
  ${props => props.weight && `font-weight: ${props.weight}`}
  color: ${props => props.color || "#2D3436"};

  ${props => props.align && `text-align: ${props.align};`}
  ${props => props.lineHeight && `line-height: ${props.lineHeight}px;`}

  ${props => props.marginTop && `margin-top: ${props.marginTop}px;`}
  ${props => props.marginRight && `margin-right: ${props.marginRight}px;`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`}
  ${props => props.marginLeft && `margin-left: ${props.marginLeft}px;`}

  ${props => props.paddingTop && `padding-top: ${props.paddingTop}px;`}
  ${props => props.paddingRight && `padding-right: ${props.paddingRight}px;`}
  ${props => props.paddingBottom && `padding-bottom: ${props.paddingBottom}px;`}
  ${props => props.paddingLeft && `padding-left: ${props.paddingLeft}px;`}
`;
