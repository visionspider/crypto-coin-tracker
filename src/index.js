import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import { theme } from './configs/theme';
import { CoinsProvider } from './contexts/CoinsContext';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'react-alice-carousel/lib/alice-carousel.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

console.log(theme);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <CoinsProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </CoinsProvider>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
