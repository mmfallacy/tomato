import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Theme } from './utils/styles';

const Providers = ({ children }: { children: ReactNode }) => (
    <ChakraProvider theme={Theme}> {children} </ChakraProvider>
);

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>,
    document.getElementById('root')
);
