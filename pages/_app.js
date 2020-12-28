import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <title>Renzo Ledesma</title>
      </Head>      
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
