import React, { useContext } from "react";

import { Container } from "./styles";

import Icon from "../../components/Icon";
import Row from "../../components/Row";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

import UserContext from "../../contexts/User";

export default function Auth({ navigation }) {
  const { defineUser } = useContext(UserContext);

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
          Digíte sua chave de acesso abaixo para entrar na sua conta.
        </Text>

        <Row marginBottom={16}>
          <Text weight="bold" marginBottom={8}>
            Chave de acesso
          </Text>
          <Input placeholder="Digite sua chave de acesso" />
        </Row>

        <Button
          text="Entrar"
          onPress={() => defineUser({ name: "Vitor Leonel" })}
        />
      </Row>
    </Container>
  );
}
