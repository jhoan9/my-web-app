// src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  values: { [key: string]: string };
  setValue: (key: string, value: string) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const setValue = (key: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ values, setValue }}>
      {children}
    </AppContext.Provider>
  );
};
