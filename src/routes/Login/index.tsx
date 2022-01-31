import { Box, Button, chakra, Circle, Flex } from '@chakra-ui/react';
import { Filler, Header } from '../../components';
import { ReactComponent as Illustration2Raw } from './Illustration2.svg';

const Illustration2 = chakra(Illustration2Raw);

const Login = () => {
    return (
        <Box pos="relative" bg="brand.300" boxSize="100%">
            <Header pos="relative" zIndex="docked" />
            <Circle
                bg="white"
                size="3xl"
                pos="absolute"
                top="-2rem"
                right="-1rem"
            />
            <Illustration2 pos="absolute" top="8rem" />

            <Flex
                pos="absolute"
                direction="column"
                p="1.25rem 3rem"
                bottom="4rem"
                w="100%"
            >
                <Button colorScheme="accent" fontSize="lg">
                    Sign In
                </Button>
                <Filler h="2rem" />
                <Button colorScheme="accent" variant="outline" fontSize="lg">
                    Use as Guest
                </Button>
            </Flex>
        </Box>
    );
};

export default Login;
