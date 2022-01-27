import { Box, Center, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { MOBILE_VW, MOBILE_VH } from '../utils/constants';

const Notch = ({ oH, oW }: { oH: number; oW: number }) => (
    <Box
        h={`${oH}px`}
        w={`${oW * 30}px`}
        bg="black"
        position="absolute"
        top={`${oH}px`}
        borderBottomRadius="10px"
    ></Box>
);

const PhoneContainer = ({
    oW,
    oH,
    children,
}: {
    oW: number;
    oH: number;
    children: ReactNode;
}) => {
    const [largerH, largerW] = useMediaQuery([
        '(min-width:500px)',
        '(min-height:1000px)',
    ]);
    return (
        <Box
            h={`calc(${MOBILE_VH} + ${oH * 2}px)`}
            w={`calc(${MOBILE_VW} + ${oW * 2}px)`}
            bg="black"
            borderRadius="10px"
            position="relative"
            boxShadow="5px 5px 16px 4px rgba(0,0,0, 0.2)"
        >
            <Center h="100%">
                {children}
                {(largerH || largerW) && <Notch oH={oH} oW={oW} />}
            </Center>
        </Box>
    );
};

export const MobileWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Center h="100vh">
            <PhoneContainer oW={8} oH={16}>
                <Box
                    w={`min(100vw,${MOBILE_VW})`}
                    h={`min(100vh,${MOBILE_VH})`}
                    bg="gray.100"
                    position="absolute"
                    borderRadius={5}
                >
                    {children}
                </Box>
            </PhoneContainer>
        </Center>
    );
};
MobileWrapper.displayName = 'MobileWrapper';
