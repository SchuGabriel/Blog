import { ReactNode, createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../lib/axios";

export interface User {
  login: string;
  id: number;
  name: string;
  bio: string;
  followers: number;
  avatar_url: URL;
}

interface UserContextType {
  user: User | null;
}

interface UserProvidersProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: UserProvidersProps) {
  const { username = "" } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser(user: string) {
      console.log("NOE", username);
      try {
        const { data } = await api.get(`/${user}`);
        setUser(data);
        console.log(data);
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    }

    if (username) fetchUser(username);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
