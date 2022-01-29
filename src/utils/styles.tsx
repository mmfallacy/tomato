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
});
