import { Route, Routes } from 'react-router-dom';
import { MobileWrapper } from './components';
import { Login, Start } from './routes';

function App() {
    return (
        <MobileWrapper>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </MobileWrapper>
    );
}

export default App;
