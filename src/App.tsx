import { Box, Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

const [MOBILE_VW, MOBILE_VH] = ['414px', '896px'] as const;

const MobileWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Center h="100vh">
            <Box
                w={`min(100vw,${MOBILE_VW})`}
                h={`min(100vh,${MOBILE_VH})`}
                bg="gray.100"
                position="absolute"
            >
                {children}
            </Box>
        </Center>
    );
};

function App() {
    return <MobileWrapper>test</MobileWrapper>;
}

export default App;
