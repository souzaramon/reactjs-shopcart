import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "../styles/default.theme.json";
import darkTheme from "../styles/dark.theme.json";

interface ThemeContextData {
  toggleTheme: any;
  theme: any;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ProviderTheme = ({ children }: any) => {
  const [theme, setTheme] = useState(() => {
    const lsTheme = localStorage.getItem("@reactjs-cart/theme");

    return lsTheme ? JSON.parse(lsTheme) : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem("@reactjs-cart/theme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme(theme.variant === "dark" ? defaultTheme : darkTheme);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
