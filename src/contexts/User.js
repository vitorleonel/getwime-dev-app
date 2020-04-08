import React from "react";

const initialUserContext = {
  user: null,
  defineUser: () => {},
};

export default React.createContext(initialUserContext);
