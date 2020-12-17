import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
