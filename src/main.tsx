import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const Providers = ({ children }: { children: ReactNode }) => (
    <ChakraProvider> {children} </ChakraProvider>
);

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>,
    document.getElementById('root')
);
