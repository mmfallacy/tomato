import { extendTheme } from '@chakra-ui/react';
import { Colors } from './colors';

const ButtonOverrides = {
    baseStyle: {
        _hover: {
            transform: 'scale(1.025)',
        },
        _active: {
            transform: 'scale(0.975)',
        },
    },
    variants: {
        outline: {
            border: '0.1875rem solid',
        },
    },
    defaultProps: {
        textStyle: 'heading',
    },
};

const Fonts = {
    body: 'Open Sans, Segoe UI, Tahoma, sans-serif;',
    heading: 'Raleway, Trebuchet MS, Avenir, Segoe UI, sans-serif',
};

export const Theme = extendTheme({
    components: {
        Button: ButtonOverrides,
    },
    styles: {
        global: {
            'html, body, .root': {
                overflowY: 'hidden',
            },
        },
    },
    colors: Colors,
    fonts: Fonts,
    textStyles: Fonts,
});
