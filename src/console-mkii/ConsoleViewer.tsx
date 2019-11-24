import * as React from 'react'
import './styles.css'
import * as react from '../assets/react.svg'
import { useState } from 'react'

/**
 * A pseudo console viewer to append on top of websites.
 */
export default function ConsoleViewer() {

    // text stream.
    const [stream, setStream] = useState('output here...')

    return (
        <div className="console">
            <div className="flex-row">
                <span className="console-title">console mk-II</span>
                <img className="console-close" src={react}/>
            </div>
            <span>{stream}</span>
        </div>
    )
}