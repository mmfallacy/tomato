import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@/utils/styles';

const Providers = ({ children }: { children: ReactNode }) => (
    <ChakraProvider theme={Theme}> {children} </ChakraProvider>
);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Providers>
                <App />
            </Providers>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
