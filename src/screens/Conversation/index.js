import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

import {
  Container,
  Header,
  Messages,
  Message,
  Write,
  WriteInput
} from "./styles";

import Icon from "../../components/Icon";
import Text from "../../components/Text";

export default function Conversation({ navigation }) {
  const route = useRoute();

  const [chat, setChat] = useState({});
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: { id: 1, name: "as812as12", color: "#BD1D1D" },
      description: "salve pessoal, tudo bem?"
    },
    {
      id: 2,
      author: { id: 2, name: "as812as12", color: "#BD1D1D" },
      description:
        "Estou na pás, e por ai, como esta o estudo com react native?"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setChat(route.params.chat);
  }, []);

  function sendMessage() {
    setMessages([
      ...messages,
      {
        id: Math.random(),
        author: { id: 2, name: "aaaa", color: "red" },
        description: newMessage
      }
    ]);

    setNewMessage("");
  }

  return (
    <Container>
      <Header>
        <Icon
          name="arrow-left"
          size={22}
          color="#2D3436"
          onPress={() => navigation.goBack()}
        />

        {chat.name && chat.membersTotal && (
          <Text weight="bold" marginLeft={16}>
            {chat.name} ({chat.membersTotal})
          </Text>
        )}
      </Header>

      <Messages
        data={messages}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Message me={item.author.id === 2}>
            {item.author.id !== 2 && (
              <Text color={item.author.color} weight="bold" marginBottom={4}>
                {item.author.name}
              </Text>
            )}

            <Text color={item.author.id === 2 && "#ffffff"}>
              {item.description}
            </Text>
          </Message>
        )}
      />

      <Write>
        <WriteInput
          placeholder="Escreva sua mensagem"
          value={newMessage}
          onChangeText={setNewMessage}
        />

        <Icon
          name="send"
          size={22}
          color={!newMessage.length ? "#bababa" : "#0984E3"}
          onPress={sendMessage}
        />
      </Write>
    </Container>
  );
}
