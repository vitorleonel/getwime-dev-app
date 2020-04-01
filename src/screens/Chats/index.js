import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

export default function Chats({ navigation }) {
  return (
    <Container>
      <Text onPress={() => navigation.navigate("Conversation")}>
        Ir para a conversa
      </Text>
    </Container>
  );
}
