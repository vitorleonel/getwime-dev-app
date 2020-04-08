import React from "react";

import { Container } from "./styles";

import Icon from "../../components/Icon";
import Row from "../../components/Row";
import Text from "../../components/Text";
import Field from "../../components/Field";
import Button from "../../components/Button";

export default function CreateChat({ navigation }) {
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

        <Row marginBottom={16}>
          <Field
            label="Nome do bate-papo"
            placeholder="Crie um nome para seu bate-papo"
          />
        </Row>

        <Row marginBottom={16}>
          <Field
            label="Descrição"
            placeholder="Conte um pouco do propósito desse bate-papo"
          />
        </Row>

        <Row>
          <Field label="Privacidade" placeholder="Público" />
        </Row>

        <Button text="Criar bate-papo" marginTop={16} onPress={() => {}} />
      </Row>
    </Container>
  );
}
