import { createContext } from "react";
import { useState } from "react";
import React from "react";

export const darkTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === null ? true : JSON.parse(stored);
  });

  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  return (
    <darkTheme.Provider value={{ dark, toggleTheme }}>
      {children}
    </darkTheme.Provider>
  );
};
