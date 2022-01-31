import {
    chakra,
    Flex,
    FlexProps,
    Heading,
    Icon,
    IconButton,
} from '@chakra-ui/react';

const defaultProps = {
    text: 'Tomato',
    headerColor: 'accent.500',
};
interface HeaderAction {
    icon: React.ElementType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => null;
    label: string;
}

interface HeaderProps extends FlexProps {
    //** Default props: */
    text?: string;
    headerColor?: string;
    //** Required props:  */
    action?: HeaderAction;
}

const _Header = (props: HeaderProps) => {
    const { headerColor, text, action, ...rest } = props;
    return (
        <Flex {...rest} h="5.875rem" alignItems="center" p="1.25rem">
            <Heading marginRight="auto" fontSize="3xl" color={headerColor}>
                {text}
            </Heading>
            {action && (
                <IconButton
                    icon={
                        <Icon
                            as={action.icon}
                            boxSize="90%"
                            fill={headerColor}
                        />
                    }
                    aria-label={action.label}
                    onClick={action?.onClick}
                    variant="unstyled"
                    boxSize="2.25rem"
                    minWidth="0"
                />
            )}
        </Flex>
    );
};

export const Header = chakra(_Header);
Header.defaultProps = defaultProps;
