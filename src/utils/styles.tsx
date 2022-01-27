import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
    styles: {
        global: {
            'html, body, .root': {
                overflowY: 'hidden',
            },
        },
    },
});
