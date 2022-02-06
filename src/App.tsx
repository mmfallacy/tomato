import { Route } from 'react-router-dom';
import { AnimatedRoutes, MobileWrapper } from '@/components';
import { ComponentsTestPage, Login, Start } from '@/routes';

function App() {
    return (
        <MobileWrapper>
            <AnimatedRoutes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dev" element={<ComponentsTestPage />} />
            </AnimatedRoutes>
        </MobileWrapper>
    );
}

export default App;
