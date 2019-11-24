import * as React from 'react'

/**
 * Displays a toggle for Language localization.
 */
export default function LanguageToggle() {
    return (
        <label className="switch">
            <input type="checkbox" checked></input>
            <span className="slider round"></span>
        </label>
    )
}