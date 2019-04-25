import React from 'react';
import ReactDOM from 'react-dom'
import styles from './styles/Styles.css'

export default function App() {
    return (
        <div id="App" className="flex-column center">
            <h1 id="Title">Hi this is Pablo.</h1>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))