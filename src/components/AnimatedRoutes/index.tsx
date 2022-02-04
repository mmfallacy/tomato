import { Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {children}
            </Routes>
        </AnimatePresence>
    );
};
