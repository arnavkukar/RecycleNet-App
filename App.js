import React, { useState } from 'react';
import MainContainer from './navigation/MainContainer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MainContainer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  );
}
