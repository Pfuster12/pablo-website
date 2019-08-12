import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import ReactDOM from 'react-dom'
import './ui/styles/Styles.css'

// load marked...
import marked from 'marked'
// set the options for marked...
marked.setOptions({
    headerPrefix: 'pabs-header-',
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    }
})

// import the highlight style,
import 'highlight.js/styles/ocean.css'

// import the content markdown by requiring the index.js file. This returns an object with properties
// pointing to markdown files imported as a string using the raw-loader.
const content = require('./content')
import Category from './ui/toc/Category';

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
    const [index, setIndex] = useState({
        category: 0,
        item: 0
    })

    /**
     * Stores the current markdown text.
     */
    const markdown = useMemo(() => Object.values(Object.values(content)[index.category])[index.item].default,
    // depends on the index of the content loaded...
    [index])

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
    [index])

    /**
     * Handles a content item click.
     * @param {React.SyntheticEvent} event 
     */
    function handleContentClick(index) {
        setIndex(index)
    }

     /**
     * Handles text area text change.
     * @param {React.SyntheticEvent} event 
     */
    function handleOnChange(event) {
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
                        Object.keys(content).map((value, index) => {
                        return <Category key={value}
                                    index={index}
                                    contentClick={handleContentClick}
                                    title={value}
                                    category={content[value]}/>
                        })
                    }
                </nav>
                <section id="main-content-editor">
                    <textarea
                        onChange={handleOnChange}
                        value={text}/>
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