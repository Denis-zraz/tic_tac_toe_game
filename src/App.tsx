import { Route, Routes } from 'react-router-dom';
import './App.module.scss';
import { BASE_PATH, GAME, HISTORY, LOGIN } from './constants/path';
import Layout from './components/Layout';
import Login from './pages/Login';
import Game from './pages/Game';
import History from './pages/History';

function App() {
    return (
        <Routes>
            <Route path={BASE_PATH} element={<Layout />}>
                <Route path={LOGIN} element={<Login />} />
                <Route path={GAME} element={<Game />} />
                <Route path={HISTORY} element={<History />} />
            </Route>
        </Routes>
    );
}

export default App;
