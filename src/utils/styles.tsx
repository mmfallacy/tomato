import { extendTheme } from '@chakra-ui/react';
import { Colors } from './colors';

export const Theme = extendTheme({
    styles: {
        global: {
            'html, body, .root': {
                overflowY: 'hidden',
            },
        },
    },
    colors: Colors,
    fonts: {
        body: 'Open Sans, Segoe UI, Tahoma, sans-serif;',
        heading: 'Raleway, Trebuchet MS, Avenir, Segoe UI, sans-serif',
    },
});
