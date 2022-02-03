import {
    Box,
    Button,
    ButtonProps,
    chakra,
    Circle,
    Flex,
    Heading,
    forwardRef,
} from '@chakra-ui/react';
import { AiOutlineArrowRight as AiOutlineArrowRightRaw } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Filler } from '../../components';
import { ReactComponent as Illustration1Raw } from './Illustration1.svg';
import { default as StartAnimation } from './animations';
import { motion } from 'framer-motion';

/**
 * Pass React SVG Components to chakra factory for chakra props support
 */
const Illustration1 = chakra(Illustration1Raw);
const AiOutlineArrowRight = chakra(AiOutlineArrowRightRaw);

/**
 * Pass Chakra Components to motion factory for framer-motion support
 */
const MotionCircle = motion(Circle);
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

/**
 * Action Button
 */

const Action = forwardRef<ButtonProps, 'button'>((props, ref) => (
    <Button
        boxSize="4rem"
        p="0"
        borderRadius="full"
        colorScheme="accent"
        {...props}
        ref={ref}
    >
        <AiOutlineArrowRight boxSize="50%" fill="white" />
    </Button>
));
/**
 * Start page for first time users
 */
const Start = () => {
    console.log(StartAnimation);
    return (
        <Box pos="relative" bg="white" boxSize="100%">
            <MotionCircle
                bg="brand.300"
                size="3xl"
                pos="absolute"
                top="-8rem"
                initial="initial"
                animate="in"
                variants={StartAnimation.Circle}
            />

            <MotionBox
                pos="absolute"
                right="0"
                top="8rem"
                initial="initial"
                animate="in"
                variants={StartAnimation.Illustration}
            >
                <Illustration1 />
            </MotionBox>

            <Flex direction="column" p="1.25rem" pos="absolute" bottom="4rem">
                <MotionHeading
                    fontSize="5xl"
                    color="accent.500"
                    initial="initial"
                    animate="in"
                    variants={StartAnimation.Header}
                >
                    Tomato
                </MotionHeading>

                <Filler h="2rem" />

                <MotionHeading
                    fontSize="xl"
                    maxW="70%"
                    color="accent.500"
                    initial="initial"
                    animate="in"
                    variants={StartAnimation.Subheader}
                >
                    A pomodoro app that gets you working
                </MotionHeading>

                <Action as={Link} to="/login" alignSelf="end" />
            </Flex>
        </Box>
    );
};

export default Start;
