import * as React from 'react'
import * as react_icon from '../assets/react.svg'
import * as android_icon from '../assets/android.svg'
import * as typescript_icon from '../assets/typescript.svg'
import * as electron_icon from '../assets/electron.svg'

export default function TechStack() {
    return (
        <div className="flex flex-row items-center">
            <a className="stack-item" href="https://developer.android.com/">
                <img className="cursor-pointer p-1 m-4 w-16 h-12" src={android_icon}/>
            </a>
            <a className="stack-item" href="https://reactjs.org/">
                <img className="cursor-pointer m-3 w-52 h-18" src={react_icon}/>
            </a>
            <a className="stack-item" href="https://www.typescriptlang.org/">
                <img className="cursor-pointer p-1 m-4 w-12 h-12" src={typescript_icon}/>
            </a>
            <a className="stack-item" href="https://electronjs.org/">
                <img className="cursor-pointer p-1 m-2 w-52 h-12" src={electron_icon}/>
            </a>
        </div>
    )
}