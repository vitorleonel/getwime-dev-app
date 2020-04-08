import React, { useContext } from "react";

import { Container, Image } from "./styles";

import Row from "../../components/Row";
import Text from "../../components/Text";
import Button from "../../components/Button";

import UserContext from "../../contexts/User";

export default function Welcome({ navigation }) {
  const { defineUser } = useContext(UserContext);

  return (
    <Container>
      <Image />

      <Text
        size={20}
        lineHeight={28}
        align="center"
        marginTop={20}
        paddingLeft={32}
        paddingRight={32}
      >
        Divirta-se conversando em{" "}
        <Text size={20} weight="bold">
          bate-papos
        </Text>{" "}
        de forma{" "}
        <Text size={20} weight="bold">
          totalmente anônima
        </Text>
        .
      </Text>

      <Row
        flex={1}
        justifyContent="flex-end"
        paddingTop={64}
        paddingLeft={32}
        paddingRight={32}
      >
        <Button
          text="Entrar com chave de acesso"
          outlined
          onPress={() => navigation.navigate("Auth")}
        />

        <Button
          text="Criar conta anônima"
          marginTop={16}
          onPress={() => defineUser({ name: "Vitor Leonel" })}
        />

        <Text
          size={14}
          color="#BABABA"
          align="center"
          marginTop={48}
          onPress={() => {}}
        >
          Termos de Uso e Política de Privacidade
        </Text>
      </Row>
    </Container>
  );
}
