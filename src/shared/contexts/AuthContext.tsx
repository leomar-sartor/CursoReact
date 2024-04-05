import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { AuthService } from "../services/api/auth/AuthService";


interface IAuthContextData {
  logout: () => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string | void>;
}

const AuthContext = createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = "APP_ACCESS_TOKEN";

interface IAuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);

    if (accessToken) {
      console.log("** PARSE", accessToken);
      const token = JSON.parse(accessToken);
      console.log("** PARSE", token);
      setAccessToken(token);
    } else {
      setAccessToken(undefined);
    }
  }, []);


  const handleLogin = useCallback(async (email: string, password: string) => {
    console.log("** LOGIN");
    const result = await AuthService.auth(email, password);

    console.log("** LOGIN", result);
    console.log("** EMAIL", email);
    console.log("** SENHA", password);

    if (result instanceof Error) {
      return result.message;
    } else {
      const strvar = JSON.stringify(result.accessToken);
      console.log("** JSON.stringify", strvar);

      localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, strvar);
      setAccessToken(result.accessToken);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    setAccessToken(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);


  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);