import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./auth";
import AppNavigation from "./app";

import UserContext from "../contexts/User";

export default function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
