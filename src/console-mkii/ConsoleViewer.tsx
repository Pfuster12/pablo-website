import * as React from 'react'
import './styles.css'
import * as close from './assets/close.svg'
import { useState, useMemo } from 'react'
import { KeyCodes } from './KeyCodes'
import {Mk2Console} from './Mk2Console'

/**
 * A pseudo console viewer to append on top of websites.
 */
export default function ConsoleViewer() {

    const [input, setInput] = useState('')

    /**
     * Flush stream of text.
     */
    function flush() {
        // flush stream text,
        const stream = document.querySelector('.console-stream')
        stream.innerHTML = ''
        // focus on input
        const textarea = document.querySelector('.console-input') as HTMLTextAreaElement
        textarea.focus()
    }

    /**
     * Handle input change.
     * @param event 
     */
    function onInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(event.currentTarget.value)
    }

    function onKeyPress(event: React.KeyboardEvent) {
        console.log(event.keyCode);
        const str = input.trim()
        
        if (event.keyCode == KeyCodes.KEY_ENTER) {
            event.preventDefault()
            switch (str) {
                case 'clear':
                    flush()
                    break;
                default:
                    Mk2Console.log(str)
                    break;
            }
            // clear input
            setInput('')
            return
        }

        if (event.keyCode == KeyCodes.KEY_L && event.ctrlKey) {
            event.preventDefault()
            flush()
            return
        }
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
                <span className="console-title">mk-II Console</span>
                <span className="console-close flex-row items-center"onClick={onClose}>[x]</span>
            </div>
            <div className="console-stream-container">
                <span className="console-stream"></span>
                <span className="console-input-block">>&nbsp;&nbsp;
                    <textarea value={input}
                        onChange={onInputChange}
                        onKeyDown={onKeyPress}
                        className="console-input console-stream"/>
                </span>
            </div>
        </div>
    )
}