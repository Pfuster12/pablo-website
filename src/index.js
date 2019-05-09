import React, { useState, useEffect } from 'react';
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
        console.log(window.scrollY)
        window.scrollY > 400 ? setShowHeader(true) : setShowHeader(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },
    [])

    return (
        <main onScroll={handleScroll}>
            { showHeader && <Header/> }
            <section className="image church" >
                <h1 className="section-title">Welcome</h1>
            </section>
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