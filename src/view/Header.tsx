import * as React from 'react'
import LanguageToggle from './LanguageToggle'
import ToggleSwitch from './ToggleSwitch'
interface HeaderProps {
}

/**
 * Displays the web header.
 */
export default function Header() {
    return (
        <header className="flex flex-row items-center">
            <h1 className="flex-grow font-bold">I/O Pabs</h1>
            <ToggleSwitch/>
        </header>
    )
}