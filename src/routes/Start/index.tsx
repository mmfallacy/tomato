import {
    Box,
    Button,
    ButtonProps,
    chakra,
    Circle,
    Flex,
    Heading,
} from '@chakra-ui/react';
import { AiOutlineArrowRight as AiOutlineArrowRightRaw } from 'react-icons/ai';
import { Filler } from '../../components';
import { ReactComponent as Illustration1Raw } from './Illustration1.svg';

/**
 * Pass React SVG Components to chakra factory for chakra props support
 */
const Illustration1 = chakra(Illustration1Raw);
const AiOutlineArrowRight = chakra(AiOutlineArrowRightRaw);

/**
 * Action Button
 */
const Action = (props: ButtonProps) => (
    <Button
        boxSize="4rem"
        p="0"
        bg="accent.600"
        borderRadius="full"
        _hover={{ transform: 'scale(1.1)', bg: 'accent.300' }}
        _active={{ transform: 'scale(0.9)', bg: 'accent.700' }}
        {...props}
    >
        <AiOutlineArrowRight boxSize="50%" fill="white" />
    </Button>
);

/**
 * Start page for first time users
 */
const Start = () => {
    return (
        <Box pos="relative" bg="white" boxSize="100%">
            <Circle bg="brand.300" size="3xl" pos="absolute" top="-8rem" />

            <Illustration1 pos="absolute" right="0" top="8rem" />

            <Flex direction="column" p="20px" pos="absolute" bottom="4rem">
                <Heading fontSize="5xl" color="accent.600">
                    Tomato
                </Heading>

                <Filler h="2rem" />

                <Heading fontSize="xl" maxW="70%" color="accent.600">
                    A pomodoro app that gets you working
                </Heading>

                <Action alignSelf="end" />
            </Flex>
        </Box>
    );
};

export default Start;
