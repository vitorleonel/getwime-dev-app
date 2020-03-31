import React from "react";

import { Container, Image } from "./styles";

import Row from "../../components/Row";
import Text from "../../components/Text";
import Button from "../../components/Button";

export default function Welcome() {
  return (
    <Container>
      <Image />

      <Text
        size={24}
        lineHeight={28}
        align="center"
        paddingLeft={24}
        paddingRight={24}
        marginTop={32}
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

      <Row paddingLeft={48} paddingRight={48} marginTop={128}>
        <Button text="Entrar com chave de acesso" outlined onPress={() => {}} />
        <Button text="Criar conta anônima" marginTop={16} onPress={() => {}} />

        <Text color="#BABABA" align="center" marginTop={64} onPress={() => {}}>
          Termos de Uso e Política de Privacidade
        </Text>
      </Row>
    </Container>
  );
}
