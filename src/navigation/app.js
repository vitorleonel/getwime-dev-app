import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import TabNavigator from "../components/TabNavigator";

import ChatsScreen from "../screens/Chats";
import AccountScreen from "../screens/Account";
import ConversationScreen from "../screens/Conversation";

function GeneralNavigation() {
  return (
    <Tab.Navigator tabBar={TabNavigator} initialRouteName="Chats">
      <Tab.Screen
        name="Chats"
        options={{ title: "Bate-papos", icon: "message-square" }}
        component={ChatsScreen}
      />
      <Tab.Screen
        name="Account"
        options={{ title: "Minha Conta", icon: "user" }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="General" headerMode="none">
      <Stack.Screen name="General" component={GeneralNavigation} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  );
}
