import React from "react";

import { Container, Search, SearchInput, SearchAddChat } from "./styles";

import Row from "../../components/Row";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function Chats({ navigation }) {
  function EmptyChats() {
    return (
      <Row flex={1} alignItems="center" justifyContent="center">
        <Text color="#BABABA" align="center" lineHeight={20}>
          Você ainda não faz parte de nenhum bate-papo. Crie um agora mesmo e
          convide seus amigos!
        </Text>

        <Button
          width={60}
          text="Novo bate-papo"
          leftIcon="plus-circle"
          marginTop={32}
        />
      </Row>
    );
  }

  return (
    <Container>
      <Search>
        <Icon name="search" size={22} color="#BABABA" marginLeft={12} />
        <SearchInput placeholder="Encontre bate-papos" />

        <SearchAddChat>
          <Icon
            name="plus-circle"
            size={22}
            color="#BABABA"
            marginLeft={16}
            marginRight={16}
          />
        </SearchAddChat>
      </Search>

      <EmptyChats />
    </Container>
  );
}
