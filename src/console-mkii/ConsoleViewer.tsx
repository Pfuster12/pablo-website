import * as React from 'react'
import './styles.css'
import * as close from './assets/close.svg'
import { useState } from 'react'

/**
 * A pseudo console viewer to append on top of websites.
 */
export default function ConsoleViewer() {

    // text stream.
    const [stream, setStream] = useState('output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...output here...')

    /**
     * Flush stream of text.
     */
    function flush() {
        setStream('')
    }

    /**
     * Append a line to the stream.
     */
    function appendLine(newline: string) {
        setStream((prevStream) => {
            const str = prevStream + newline
            return str
        })
    }

    /**
     * Handle on close click.
     */
    function onClose(event: React.SyntheticEvent) {
        const console = document.querySelector('.console')
        console.remove()
    }

    return (
        <div className="console">
            <div className="flex-row pt-1 items-center">
                <span className="console-title">console mk-II</span>
                <span className="console-close flex-row items-center"onClick={onClose}>[x]</span>
            </div>
            <div className="console-stream-container">
                <span className="console-stream">{stream}</span>
            </div>
        </div>
    )
}