import { Route } from 'react-router-dom';
import { AnimatedRoutes, MobileWrapper } from './components';
import { Login, Start } from './routes';

function App() {
    return (
        <MobileWrapper>
            <AnimatedRoutes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
            </AnimatedRoutes>
        </MobileWrapper>
    );
}

export default App;
