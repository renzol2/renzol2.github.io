import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
