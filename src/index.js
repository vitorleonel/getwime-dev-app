import React, { useState, useEffect } from "react";
import Navigation from "./navigation";

import UserContext from "./contexts/User";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ...
  }, []);

  return (
    <UserContext.Provider value={{ user, defineUser: setUser }}>
      <Navigation />
    </UserContext.Provider>
  );
}
