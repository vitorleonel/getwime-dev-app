import React from "react";

import { Container } from "./styles";

export default function Text(props) {
  return <Container {...props}>{props.children}</Container>;
}
