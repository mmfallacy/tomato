import { Transition } from 'framer-motion';
import {
    Animation,
    RouteComponentVariants,
    AnimationTimings,
    RouteVariants,
} from '../../utils/types';

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
};

const OnMount: Animation = {
    Circle: {
        transform: 'scale(1)',
        transition: { ...DefaultTransitions, type: 'spring', stiffness: 100 },
    },
    Illustration: {
        opacity: 1,
        y: 0,
        transition: { ...DefaultTransitions, delay: 0.2 },
    },
    Header: {
        x: 0,
        opacity: 1,
        transition: {
            default: { DefaultTransitions },
            x: { type: 'spring', stiffness: 100 },
        },
    },
    Subheader: {
        x: 0,
        opacity: 1,
        transition: {
            default: { DefaultTransitions },
            x: { type: 'spring', stiffness: 100, delay: 0.2 },
        },
    },
};

const generateComponentVariants = (
    obj: RouteVariants
): RouteComponentVariants => {
    const newObj: RouteComponentVariants = {};
    console.log(obj);
    for (const timing in obj)
        for (const component in obj[timing as AnimationTimings]) {
            if (!(component in newObj)) newObj[component] = {};
            newObj[component][timing as AnimationTimings] =
                obj[timing as AnimationTimings][component];
        }

    return newObj;
};

const Animations: RouteComponentVariants = generateComponentVariants({
    initial: Initial,
    in: OnMount,
} as RouteVariants);

console.log(Animations);
export default Animations;
