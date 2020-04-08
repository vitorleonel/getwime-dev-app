import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./auth";
import AppNavigation from "./app";

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
