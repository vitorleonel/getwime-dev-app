import React from "react";

import { Container } from "./styles";

import Text from "../Text";

export default function Button(props) {
  return (
    <Container {...props}>
      <Text color={!props.outlined ? "#ffffff" : "#0984E3"} weight="bold">
        {props.text}
      </Text>
    </Container>
  );
}
