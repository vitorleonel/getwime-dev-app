import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import ChatsScreen from "../screens/Chats";
import AccountScreen from "../screens/Account";
import ConversationScreen from "../screens/Conversation";

function GeneralNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
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
