import React, { useCallback} from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';


import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/globals'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark: light)
  }, [theme.title, setTheme])



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
