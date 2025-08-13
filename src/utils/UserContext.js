import { createContext } from "react";

const UserContext = createContext(
  {userLoggedIn: "DefaultUser"}
);

export default UserContext;