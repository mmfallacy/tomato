import { Box, BoxProps, Button, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ReactComponent as Illustration1 } from './Illustration1.svg';

/**
 * Box component with 100vh as border radius and width === height
 */
const Circle = (props: BoxProps) => (
    <Box {...props} w={props.h} borderRadius="100vh"></Box>
);

const Start = () => {
    return (
        <Box>
            <Text>Tomato</Text>
            <Circle bg="brand.300" h="200px" />
            <Text>A pomodoro app that gets you working</Text>
            <Button>
                <AiOutlineArrowRight />
            </Button>
            <Illustration1 />
        </Box>
    );
};

export default Start;
