import React, { createContext, useContext, useState } from "react";

// Import translations from JSON file
import translations from './translation/Translation.json'

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const toggleLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const translate = (key) => {
    // Access translation based on selected language and key
    return translations[selectedLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
