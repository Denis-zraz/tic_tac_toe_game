// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LOGIN } from './constants/path';
import Layout from './components/Layout';
import Login from './pages/Login';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path={LOGIN} element={<Layout />}>
                <Route index element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;
