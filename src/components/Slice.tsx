import { Flex, Heading, Text } from '@chakra-ui/react';

const Slice = () => {
    return (
        <Flex
            bg="gray"
            boxSize="min(17.125rem,67vw)"
            borderRadius="1.5rem"
            p="1rem"
            flexDir="column-reverse"
            alignItems="end"
        >
            <Text fontSize="lg">4 sessions</Text>
            <Heading fontSize="2xl" textAlign="right">
                A Very Long Slice Name And Slice Number #1
            </Heading>
        </Flex>
    );
};

export default Slice;
