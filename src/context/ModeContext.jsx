import { createContext, useEffect, useReducer } from 'react';

export const ModeContext = createContext();

export const modeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT':
      return { mode: 'LIGHT' };
    case 'DARK':
      return { mode: 'DARK' };
    default:
      return { ...state };
  }
};

export const ModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modeReducer, { mode: 'DARK' });

  useEffect(() => {
    const mode = localStorage.getItem('mode');

    if (mode) {
      dispatch({ type: mode });
    }
  }, []);

  return (
    <ModeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModeContext.Provider>
  );
};
