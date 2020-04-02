import React from "react";

import { Container, Image, ImageChange, Divider } from "./styles";

import Row from "../../components/Row";
import Text from "../../components/Text";
import Icon from "../../components/Icon";
import Field from "../../components/Field";
import Button from "../../components/Button";

export default function Account() {
  return (
    <Container>
      <Image
        source={{
          uri:
            "https://ui-avatars.com/api/?name=vitorleonel&bold=true&rounded=true&size=512"
        }}
      >
        <ImageChange>
          <Icon name="camera" size={16} color="#2D3436" />
        </ImageChange>
      </Image>

      <Row width={100} marginTop={32} paddingLeft={24} paddingRight={24}>
        <Field label="Nome (Opcinal)" placeholder="Nome da sua conta" />

        <Text color="#bababa" lineHeight={20} marginTop={16} marginBottom={16}>
          Lembre-se sempre de manter seu anônimato, evite utilizar nome e foto
          que te identifique, a menos que queira.
        </Text>

        <Button text="Salvar alterações" />
      </Row>

      <Row
        width={100}
        paddingLeft={24}
        paddingRight={24}
        paddingTop={32}
        paddingBottom={32}
      >
        <Divider />
      </Row>

      <Row width={100} paddingLeft={24} paddingRight={24}>
        <Text align="center" weight="bold">
          Chave de acesso
        </Text>

        <Text color="#bababa" align="center" marginTop={8}>
          Salve essa chave em algum lugar para que você possa entrar ou
          recuperar sua conta.
        </Text>

        <Text color="#0984E3" align="center" marginTop={24} onPress={() => {}}>
          ab8d36ea-4fcc-4e4a-82ce-b6c5f925637
        </Text>
      </Row>
    </Container>
  );
}
