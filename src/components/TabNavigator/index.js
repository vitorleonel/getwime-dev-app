import React from "react";

import { Container, Item } from "./styles";

import Icon from "../Icon";
import Text from "../Text";

export default function TabNavigator({ state, descriptors, navigation }) {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = options.title;
        const icon = options.icon;
        const isFocused = state.index === index;
        const currentColor = isFocused ? "#0984E3" : "#BABABA";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Item onPress={onPress} onLongPress={onLongPress} key={index}>
            <Icon name={icon} size={22} color={currentColor} />

            <Text weight="bold" size={16} color={currentColor} marginLeft={8}>
              {label}
            </Text>
          </Item>
        );
      })}
    </Container>
  );
}
