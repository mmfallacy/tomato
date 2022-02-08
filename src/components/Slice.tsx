import { Flex, Heading, Text } from '@chakra-ui/react';

interface SliceProps {
    bg?: string;
}

const defaultProps: SliceProps = {
    bg: 'gray',
};

const Slice = ({ bg }: SliceProps) => {
    return (
        <Flex
            bg={bg}
            boxSize="min(17.125rem,67vw)"
            borderRadius="1.5rem"
            p="1rem"
            flexDir="column-reverse"
            alignItems="end"
            color="white"
        >
            <Text fontSize="lg">4 sessions</Text>
            <Heading fontSize="2xl" textAlign="right">
                A Very Long Slice Name And Slice Number #1
            </Heading>
        </Flex>
    );
};
Slice.defaultProps = defaultProps;

export default Slice;
