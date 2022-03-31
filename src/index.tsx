import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './pages/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import theme from './styles/global';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement!);
root.render((
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
