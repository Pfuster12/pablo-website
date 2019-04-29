import React from 'react';
import ReactDOM from 'react-dom'
import styles from './styles/Styles.css'
import banner_image from './assets/greg-dragon-banner.jpg'

export default function App() {
    return (
        <main id="App">
            <section className="parallax banner-image">
                <h1 className="white-text">Hi this is Pablo.</h1>
            </section>
            <section className="static">
                <h1 className="white-text">This is my website.</h1>
            </section>
            <section className="parallax banner-image-2">
                <h1 className="white-text">Welcome.</h1>
            </section>
        </main>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))