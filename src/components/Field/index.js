import React from "react";

import { Container, Input } from "./styles";

import Text from "../Text";

export default function Field(props) {
  return (
    <Container>
      {props.label && (
        <Text weight="bold" marginBottom={8}>
          {props.label}
        </Text>
      )}

      <Input placeholder={props.placeholder} />
    </Container>
  );
}
