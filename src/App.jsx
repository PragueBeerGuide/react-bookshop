import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(''); // empty '' means homepage

    return (
        <div className="app">
            <Header
                page={ page }
                setPage={ setPage }
            />

            <MainContent
                page={ page }
            />

            <Footer />
        </div>
    )
}

export default App
