import { Transition } from 'framer-motion';
import {
    Animation,
    RouteComponentVariants,
    RouteVariants,
    generateComponentVariants,
} from '../../utils/animation';

const DefaultTransitions: Transition = {
    duration: 0.75,
    ease: 'easeOut',
};

const Initial: Animation = {
    Circle: {
        transform: 'scale(0.1)',
    },
    Illustration: {
        opacity: 0,
        y: '2rem',
    },
    Header: {
        x: '-110%',
        opacity: 0,
    },
    Subheader: {
        x: '-110%',
        opacity: 0,
    },
    Action: {
        x: '-40%',
        opacity: 0,
    },
};

const OnMount: Animation = {
    Circle: {
        transform: 'scale(1)',
        transition: { ...DefaultTransitions },
    },
    Illustration: {
        opacity: 1,
        y: 0,
        transition: { ...DefaultTransitions, duration: 0.5, delay: 0.2 },
    },
    Header: {
        x: 0,
        opacity: 1,
        transition: { ...DefaultTransitions, delay: 0.2 },
    },
    Subheader: {
        x: 0,
        opacity: 1,
        transition: { ...DefaultTransitions, delay: 0.4 },
    },
    Action: {
        x: 0,
        opacity: 1,
        transition: {
            ...DefaultTransitions,
            delay: 0.4,
        },
    },
};

const Animations: RouteComponentVariants = generateComponentVariants({
    initial: Initial,
    in: OnMount,
} as RouteVariants);

console.log(Animations);
export default Animations;
