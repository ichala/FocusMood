import React, { createContext, useState } from 'react';

export const PreferencesContext = createContext();

const defaultPreferences = {
  timer: 15,
  theme: 'night',
};

export const Preferences = ({ children }) => {
  const [Config, setConfig] = useState(JSON.parse(localStorage.getItem('focus-mood')) || defaultPreferences);
  localStorage.setItem('focus-mood', JSON.stringify(Config));
  return (
    <PreferencesContext.Provider value={{ Config, setConfig }}>
      {children}
    </PreferencesContext.Provider>
  );
};
