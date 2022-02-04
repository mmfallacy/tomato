import { Box, Button, chakra, Circle, Flex } from '@chakra-ui/react';
import { Filler, Header } from '@/components';
import { ReactComponent as Illustration2Raw } from './Illustration2.svg';
import { motion } from 'framer-motion';
import LoginAnimations from './animations';

/**
 * Pass React SVG Components to chakra factory for chakra props support
 */
const Illustration2 = chakra(Illustration2Raw);

/**
 * Pass Chakra Components to motion factory for framer-motion support
 */
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Login = () => {
    return (
        <Box
            pos="relative"
            bg="brand.300"
            boxSize="100%"
            initial="initial"
            animate="in"
        >
            <MotionBox
                initial="initial"
                animate="in"
                variants={LoginAnimations.Header}
                pos="relative"
                zIndex="docked"
            >
                <Header />
            </MotionBox>

            <Circle
                bg="white"
                size="3xl"
                pos="absolute"
                top="-2rem"
                right="-1rem"
            />

            <MotionBox
                pos="absolute"
                top="8rem"
                initial="initial"
                animate="in"
                variants={LoginAnimations.Illustration}
            >
                <Illustration2 />
            </MotionBox>

            <Flex
                pos="absolute"
                direction="column"
                p="1.25rem 3rem"
                bottom="4rem"
                w="100%"
            >
                <MotionButton
                    colorScheme="accent"
                    fontSize="lg"
                    initial="initial"
                    animate="in"
                    variants={LoginAnimations.Primary}
                >
                    Sign In
                </MotionButton>
                <Filler h="2rem" />
                <MotionButton
                    colorScheme="accent"
                    variant="outline"
                    fontSize="lg"
                    initial="initial"
                    animate="in"
                    variants={LoginAnimations.Secondary}
                >
                    Use as Guest
                </MotionButton>
            </Flex>
        </Box>
    );
};

export default Login;
