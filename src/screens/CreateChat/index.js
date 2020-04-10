import React from "react";

import { Container } from "./styles";

import Icon from "../../components/Icon";
import Row from "../../components/Row";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Select from "../../components/Select";
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
          Você esta a um passo de começar a construir sua própria sala de
          bate-papo.
        </Text>

        <Row marginBottom={16}>
          <Text weight="bold" marginBottom={8}>
            Nome do bate-papo
          </Text>
          <Input placeholder="Crie um nome para seu bate-papo" />
        </Row>

        <Row marginBottom={16}>
          <Text weight="bold" marginBottom={8}>
            Descrição
          </Text>
          <Input
            maxHeight={160}
            multiline={true}
            placeholder="Conte um pouco do propósito desse bate-papo"
          />
        </Row>

        <Row>
          <Text weight="bold" marginBottom={8}>
            Privacidade
          </Text>

          <Select
            value="public"
            placeholder={{}}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Público", value: "public" },
              { label: "Não Listado", value: "unlisted" },
            ]}
          />
        </Row>

        <Button text="Criar bate-papo" marginTop={16} onPress={() => {}} />
      </Row>
    </Container>
  );
}
