import { createContext, useContext } from 'react';

const AppContext = createContext({language: "C++"});

export function AppWrapper({ children }) {
  let sharedState = {language: "C++"}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
