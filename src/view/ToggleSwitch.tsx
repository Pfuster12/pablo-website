import * as React from 'react'

/**
 * Displays a toggle for Language localization.
 */
export default function ToggleSwitch() {

    /**
     * Switch the theme data.
     * @param event 
     */
    function switchTheme(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }    
    }

    return (
        <>
            <span className="p-2">🌚dark</span>
            <input type="checkbox" onChange={switchTheme} id="toggle" className="check"/>
            <label htmlFor="toggle" className="switch"/>
            <span className="p-2">🌞light</span>
        </>
    )
}