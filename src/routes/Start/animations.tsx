import { Transition } from 'framer-motion';
import {
    Animation,
    RouteComponentVariants,
    RouteVariants,
    generateComponentVariants,
} from '@/utils/animation';
import { Colors } from '@/utils/colors';

const DefaultTransitions: Transition = {
    duration: 0.75,
    ease: 'easeOut',
};

const Initial: Animation = {
    Circle: {
        transform: 'scale(0.1) rotateY(0deg)',
        top: '-8rem',
        left: '0%',
        background: Colors.brand[300],
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
    Page: {
        perspective: '200px',
    },
};

const OnMount: Animation = {
    Circle: {
        transform: 'scale(1) rotateY(0deg)',
        left: '0%',
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

const OnDismount: Animation = {
    Circle: {
        transform: 'scale(1) rotateY(-180deg)',
        top: '-2rem',
        left: '-82%',
        background: 'rgb(255,255,255)',
        transition: {
            default: {
                ...DefaultTransitions,
                delay: 1,
                duration: 0.3,
                ease: 'linear',
            },
            background: { delay: 1.1, duration: 0.2 },
            transform: {
                delay: 0.3,
                duration: 2,
            },
        },
    },
    Illustration: {
        opacity: 0,
    },
    Subheader: {
        opacity: 0,
    },
    Header: {
        opacity: 0,
    },
    Action: {
        opacity: 0,
    },
    Page: {
        background: Colors.brand[300],
        transition: {
            ...DefaultTransitions,
            delay: 1.1,
            duration: 0.2,
            ease: 'linear',
        },
    },
};

const Animations: RouteComponentVariants = generateComponentVariants({
    initial: Initial,
    in: OnMount,
    out: OnDismount,
} as RouteVariants);

export default Animations;
