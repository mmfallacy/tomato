import { Transition } from 'framer-motion';
import {
    Animation,
    RouteComponentVariants,
    RouteVariants,
    generateComponentVariants,
} from '@/utils/animation';

const DefaultTransitions: Transition = {
    duration: 0.75,
    ease: 'easeOut',
};

const Initial: Animation = {
    Header: {
        opacity: 0,
        x: '-100%',
    },
    Illustration: {
        opacity: 0,
        x: '-100%',
    },
    Primary: {
        opacity: 0,
        x: '-100%',
    },
    Secondary: {
        opacity: 0,
        x: '-100%',
    },
};

const OnMount: Animation = {
    Header: {
        opacity: 1,
        x: 0,
        transition: { ...DefaultTransitions, delay: 0.2 * 0 },
    },
    Illustration: {
        opacity: 1,
        x: 0,
        transition: { ...DefaultTransitions, delay: 0.2 * 1 },
    },
    Primary: {
        opacity: 1,
        x: 0,
        transition: { ...DefaultTransitions, delay: 0.2 * 2 },
    },
    Secondary: {
        opacity: 1,
        x: 0,
        transition: { ...DefaultTransitions, delay: 0.2 * 3 },
    },
};

const OnDismount: Animation = {};

const Animations: RouteComponentVariants = generateComponentVariants({
    initial: Initial,
    in: OnMount,
    out: OnDismount,
} as RouteVariants);

export default Animations;
