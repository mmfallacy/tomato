import {
    AnimationTimings,
    RouteComponentVariants,
    RouteVariants,
} from './types';

export const generateComponentVariants = (
    obj: RouteVariants
): RouteComponentVariants => {
    const newObj: RouteComponentVariants = {};
    for (const timing in obj)
        for (const component in obj[timing as AnimationTimings]) {
            if (!(component in newObj)) newObj[component] = {};
            newObj[component][timing as AnimationTimings] =
                obj[timing as AnimationTimings][component];
        }

    return newObj;
};
