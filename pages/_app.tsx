import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head>
        <title>Renzo Ledesma</title>
      </Head>      
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
