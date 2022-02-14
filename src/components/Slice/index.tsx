import {
    BoxProps,
    Flex,
    Heading,
    HeadingProps,
    Text,
    TextProps,
} from '@chakra-ui/react';

import * as Patterns from './Patterns';

export type PatternEnumType = keyof typeof Patterns;

export const PatternEnum = Object.keys(Patterns) as PatternsEnumType[];

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
    pattern: PatternEnum;
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
            bgImage={`url(${pattern != undefined && Patterns[pattern]})`}
            bgBlendMode="overlay"
            {...currentVariant.body}
        >
            <Text {...currentVariant.subtext}>{numberOfSessions} sessions</Text>
            <Heading {...currentVariant.label} textAlign="right" w="80%">
                {title}
            </Heading>
        </Flex>
    );
};
Slice.defaultProps = defaultProps;

export default Slice;
//
