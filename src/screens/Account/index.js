import React from "react";
import { Clipboard, Alert } from "react-native";

import { Container, Image, ImageChange, Divider } from "./styles";

import Row from "../../components/Row";
import Text from "../../components/Text";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Account() {
  function copyKeyAccess() {
    Clipboard.setString("ab8d36ea-4fcc-4e4a-82ce-b6c5f925637");

    Alert.alert(
      "Chave de acesso copiada!",
      "Salve essa chave em algum lugar para que você possa entrar ou recuperar sua conta."
    );
  }

  return (
    <Container>
      <Image
        source={{
          uri:
            "https://ui-avatars.com/api/?name=vitorleonel&bold=true&rounded=true&size=512",
        }}
      >
        <ImageChange>
          <Icon name="camera" size={16} color="#2D3436" />
        </ImageChange>
      </Image>

      <Row width={100} marginTop={32} paddingLeft={24} paddingRight={24}>
        <Row>
          <Text weight="bold" marginBottom={8}>
            Nome
          </Text>
          <Input placeholder="Nome da sua conta" value="as812as1" />
        </Row>

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

        <Text
          color="#0984E3"
          align="center"
          marginTop={24}
          onPress={() => copyKeyAccess("ab8d36ea-4fcc-4e4a-82ce-b6c5f925637")}
        >
          ab8d36ea-4fcc-4e4a-82ce-b6c5f925637
        </Text>
      </Row>
    </Container>
  );
}
