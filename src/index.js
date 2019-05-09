import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './styles/Styles.css'
import Header from './components/Header';

export default function App() {

    /**
     * Header visibility toggle state.
     */
    const [showHeader, setShowHeader] = useState(false)

    /**
     * Handles the scroll event.
     * @param {React.SyntheticEvent} event 
     */
    function handleScroll(event) {
        event.target.scrollY > 400 ? setShowHeader(true) : setShowHeader(false)
    }

    return (
        <main onScroll={handleScroll}>
            { showHeader && <Header/> }
            <section className="image church" />
            <section className="content">
                <h1 className="section-title">It's ma website.</h1>
            </section>
            <section className="image dragon"/>
            <section className="content">
                <h1 className="section-title">It's ma website.</h1>
            </section>
        </main>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))