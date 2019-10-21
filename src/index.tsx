import * as React from 'react';
import { useState, useEffect, useLayoutEffect, useMemo } from 'react'
import * as ReactDOM from 'react-dom'
import './ui/Styles.css'
import Category from './ui/toc/Category';

// load marked...
import * as marked from 'marked'
// set the options for marked...
marked.setOptions({
    /**
     * Set a header prefix to query for the toc.
     */
    headerPrefix: 'pabs-header-',
    highlight: function(code: string) {
        return require('highlight.js').highlightAuto(code).value;
    }
})
// import the highlight style,
import 'highlight.js/styles/ocean.css'

// import the content markdown by requiring the index.js file. This returns an object with properties
// pointing to markdown files imported as a string using the raw-loader.
const markdownContent = require('./content')

/**
 * A Content interface defines the index of a Category and a 
 */
export interface ContentSelection {
    category: number,
    item: number
}

/**
 * This website's React entrypoint.
 */
export default function App() {

    /**
     * Stores the header elements in the .main-content section of this page to
     * display in the .page-content nav element.
     */
    const [headers, setHeaders] = useState({
        height: '0px',
        content: []
    })

    /**
     * Stores the content category and item index selected.
     */
    const [contentSelection, setContentSelection] = useState({
        category: 0,
        item: 0
    })

    /**
     * Stores the current markdown text.
     */
    const markdown = useMemo(() => Object.values(Object.values(markdownContent)[contentSelection.category])[contentSelection.item].default,
    // depends on the index of the content loaded...
    [contentSelection])

    /**
     * textarea controlled text.
     */
    const [text, setText] = useState(markdown)

    /**
     * Layout effect to read from the content markdown file and parse to html.
     * Injects the html to the main section html tag of this component.
     * @see markdown-loader
     */
    useLayoutEffect(() => {
        // grab the main content section,
        const main = document.getElementById('main-content')
        
        // set the html to the markdown parsed html
        main.innerHTML = marked(text)

        // query all headers that start with the marked.js header prefix in the md file,
        const headers = [...main.querySelectorAll("[id^='pabs-header-']")]

        // calculate the total height of the header elements with a counter,
        var headerHeight = 0

        // add to counter...
        headers.forEach(header => headerHeight += header.clientHeight)

        //set the headers queried to render the page content nav element,
        setHeaders({ 
            content: headers,
            height: headerHeight - 24 + 'px'
        })
    },
    // run only at the first load,
    [text])

    /**
     * Effect to get the count of headers in the section 'main-content' and their 
     * titles to display in the page-content nav element.
     */
    useEffect(() => {
        // finally set the new text
        setText(markdown)
    },
    [contentSelection])

    /**
     * Handles a content item click.
     * @param event 
     */
    function handleContentClick(content: ContentSelection) {
        setContentSelection(content)
    }

     /**
     * Handles text area text change.
     * @param event 
     */
    function handleOnChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.currentTarget.value)
    }

    return (
        <>
            <header>
                <h2>I/O Pabs</h2>
            </header>
            <main>
                <nav className="toc">
                    {
                        Object.keys(markdownContent).map((value, index) => {
                        return <Category key={value}
                                    index={index}
                                    contentClick={handleContentClick}
                                    title={value}
                                    content={markdownContent[value]}/>
                        })
                    }
                </nav>
                <section id="main-content-editor">
                    <textarea onChange={handleOnChange} value={text}/>
                </section>
                <section id="main-content">

                </section>
                <div className="nav-divider"
                    style={{ height: headers.height }}/>
                <nav className="page-content">
                    <ul>
                        {
                            headers.content.map(header => {
                                return <span key={header.id}
                                 className="page-content-header">
                                    {header.innerText}
                                 </span>
                            })
                        }
                    </ul>
                </nav>
            </main>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))