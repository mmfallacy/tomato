import Slice, { PatternEnum } from '@/components/Slice';
import { Box, VStack, Heading } from '@chakra-ui/react';

const ComponentsTestPage = () => {
    return (
        <Box pos="relative" bg="white" boxSize="100%" overflow="auto">
            <Heading fontSize="2xl" m="2rem auto" w="80%" textAlign="center">
                This is a test page for component development
            </Heading>
            <VStack
                flexDir="column"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="2rem"
            >
                <Slice
                    bg="brand.500"
                    variant="sm"
                    title="A very very very very long slice name #1"
                    numberOfSessions={4}
                    key="sm"
                />
                <Slice
                    bg="brand.500"
                    variant="lg"
                    title="A very very very very long slice name #1"
                    numberOfSessions={4}
                    key="lg"
                />
                <Slice
                    bg="brand.500"
                    variant="xl"
                    title="A very very very very long slice name #1"
                    numberOfSessions={4}
                    key="xl"
                />
                {PatternEnum.map((pattern, i) => (
                    <Slice
                        bg={i % 2 ? 'accent.300' : 'brand.500'}
                        variant="xl"
                        title={`Sample Slice for pattern ${pattern}`}
                        pattern={pattern}
                        key={pattern}
                    />
                ))}
            </VStack>
        </Box>
    );
};

export default ComponentsTestPage;
