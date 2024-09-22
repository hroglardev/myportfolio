import { createContext, useEffect, useReducer } from 'react';
import setUpLanguageAndMode from '../utils/setUpLanguageAndMode';
export const LanguageContext = createContext();

export const languageReducer = (state, action) => {
  switch (action.type) {
    case 'ENGLISH':
      return { language: 'ENGLISH' };
    case 'SPANISH':
      return { language: 'SPANISH' };
    case 'ITALIAN':
      return { language: 'ITALIAN' };
    default:
      return { ...state };
  }
};

export const LanguageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, {
    language: 'ENGLISH'
  });

  useEffect(() => {
    const language = localStorage.getItem('language');

    if (language) {
      dispatch({ type: language });
    }
    setUpLanguageAndMode();
  }, []);

  return (
    <LanguageContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
