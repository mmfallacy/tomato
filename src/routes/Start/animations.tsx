import {
    Animation,
    RouteComponentVariants,
    AnimationTimings,
    RouteVariants,
} from '../../utils/types';

const Initial: Animation = {
    Circle: {
        transform: 'scale(0.1)',
    },
};

const OnMount: Animation = {
    Circle: {
        transform: 'scale(1)',
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
