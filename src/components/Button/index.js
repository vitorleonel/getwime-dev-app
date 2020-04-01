import React from "react";

import { Container } from "./styles";

import Text from "../Text";
import Icon from "../Icon";

export default function Button(props) {
  const currentColor = !props.outlined ? "#ffffff" : "#0984E3";

  return (
    <Container {...props}>
      {props.leftIcon && (
        <Icon
          name={props.leftIcon}
          size={22}
          color={currentColor}
          marginRight={8}
        />
      )}

      <Text color={currentColor} weight="bold">
        {props.text}
      </Text>

      {props.rightIcon && (
        <Icon
          name={props.rightIcon}
          size={22}
          color={currentColor}
          marginLeft={8}
        />
      )}
    </Container>
  );
}
