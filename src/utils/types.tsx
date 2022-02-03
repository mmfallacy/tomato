import { Variant } from 'framer-motion';

/**
 * Export project-specific type definitions for Animations
 *
 * Animations are placed in a route's own `animation.tsx` file which contains
 * objects with this type pertaining to animation timing (initial, on page mount, on page dismount, etc.)
 */
export interface Animation {
    [key: string]: Variant;
}

/**
 * Valid recognized animation timings
 */
export type AnimationTimings = 'initial' | 'in' | 'out';

export interface RouteComponentVariants {
    [key: string]: {
        [key in AnimationTimings]?: Variant;
    };
}

export type RouteVariants = {
    [key in AnimationTimings]: Animation;
};
