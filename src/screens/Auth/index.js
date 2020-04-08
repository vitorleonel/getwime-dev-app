import React from "react";

import { Container } from "./styles";

import Icon from "../../components/Icon";
import Row from "../../components/Row";
import Text from "../../components/Text";
import Field from "../../components/Field";
import Button from "../../components/Button";

export default function Auth({ navigation }) {
  return (
    <Container>
      <Icon
        name="arrow-left"
        size={22}
        color="#2D3436"
        onPress={() => navigation.goBack()}
      />

      <Row marginTop={40}>
        <Text marginBottom={24}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Field
          label="Chave de acesso"
          placeholder="Digite sua chave de acesso"
        />

        <Button text="Entrar" marginTop={16} onPress={() => {}} />
      </Row>
    </Container>
  );
}
