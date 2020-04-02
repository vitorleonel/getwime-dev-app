import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Search,
  SearchInput,
  SearchAddChat,
  ChatList,
  Chat,
  ChatImage
} from "./styles";

import Row from "../../components/Row";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function Chats({ navigation }) {
  const [loading, setLoading] = useState(false);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Treinar Dev",
        image:
          "https://images.unsplash.com/photo-1582653984995-905583e4d3c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting",
        membersTotal: 146
      },
      {
        id: 2,
        name: "Ajude um Pet",
        image:
          "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting",
        membersTotal: 817
      }
    ];

    setChats(data);
  }, []);

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

  function renderChat({ item }) {
    return (
      <Chat onPress={() => navigation.navigate("Conversation", { chat: item })}>
        <ChatImage source={{ uri: item.image }} />

        <Row flex={1}>
          <Text weight="bold" marginBottom={4}>
            {item.name} ({item.membersTotal})
          </Text>
          <Text size={14} color="#BABABA" numberOfLines={2}>
            {item.description}
          </Text>
        </Row>
      </Chat>
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

      {loading ? (
        <Row flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color="#0984E3" size="large" />
        </Row>
      ) : !chats.length ? (
        <EmptyChats />
      ) : (
        <ChatList
          data={chats}
          keyExtractor={item => String(item.id)}
          renderItem={renderChat}
        />
      )}
    </Container>
  );
}
