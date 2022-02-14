import {
    BoxProps,
    Flex,
    Heading,
    HeadingProps,
    Text,
    TextProps,
} from '@chakra-ui/react';

import * as Patterns from './Patterns';

export type PatternEnumType = keyof typeof Patterns | undefined;

export const PatternEnum = Object.keys(Patterns) as PatternEnumType[];

type SliceVariants = 'sm' | 'lg' | 'xl';

type SliceVariantObject = {
    [key in SliceVariants]: {
        body: BoxProps;
        label: HeadingProps;
        subtext: TextProps;
    };
};

interface SliceProps {
    bg?: string;
    variant: SliceVariants;
    pattern: PatternEnumType;
    title: string;
    numberOfSessions: number;
}

const defaultProps: SliceProps = {
    bg: 'gray',
    variant: 'lg',
    pattern: undefined,
    title: 'Sample Slice',
    numberOfSessions: 4,
};

const Slice = ({
    bg,
    variant,
    pattern,
    title,
    numberOfSessions,
}: SliceProps) => {
    const Variants: SliceVariantObject = {
        sm: {
            body: {
                boxSize: 'min(12rem,48vw)',
            },
            label: {
                fontSize: 'xl',
            },
            subtext: {
                fontSize: 'sl',
            },
        },
        lg: {
            body: {
                boxSize: 'min(17.125rem,67vw)',
            },
            label: {
                fontSize: '2xl',
            },
            subtext: {
                fontSize: 'lg',
            },
        },
        xl: {
            body: {
                boxSize: 'min(22.75rem,88vw)',
                height: '10.8125rem',
            },
            label: {
                fontSize: '2xl',
            },
            subtext: {
                fontSize: 'lg',
            },
        },
    };

    const currentVariant = Variants[variant];

    return (
        <Flex
            bg={bg}
            borderRadius="1.5rem"
            p="1rem"
            flexDir="column-reverse"
            alignItems="end"
            color="white"
            pos="relative"
            bgBlendMode="overlay"
            _before={{
                content: `' '`,
                d: 'block',
                pos: 'absolute',
                left: 0,
                top: 0,
                w: '100%',
                h: '100%',
                opacity: 0.3,
                bgImage: `url(${pattern != undefined && Patterns[pattern]})`,
                borderRadius: '1.5rem',
            }}
            {...currentVariant.body}
        >
            <Text {...currentVariant.subtext} pos="relative">
                {numberOfSessions} sessions
            </Text>
            <Heading
                {...currentVariant.label}
                pos="relative"
                textAlign="right"
                w="80%"
            >
                {title}
            </Heading>
        </Flex>
    );
};
Slice.defaultProps = defaultProps;

export default Slice;
//
