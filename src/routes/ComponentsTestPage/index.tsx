import Slice from '@/components/Slice';
import { Box, Heading } from '@chakra-ui/react';

const ComponentsTestPage = () => {
    return (
        <Box pos="relative" bg="white" boxSize="100%">
            <Heading fontSize="2xl" m="2rem auto" w="80%" textAlign="center">
                This is a test page for component development
            </Heading>
            <Slice bg="brand.500" variant="xl" />
        </Box>
    );
};

export default ComponentsTestPage;
