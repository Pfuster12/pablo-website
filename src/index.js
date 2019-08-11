import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom'
import './ui/styles/Styles.css'

// import the highlight style,
import 'highlight.js/styles/ocean.css'

// import the index md file, the markdown-loader uses marked to
// parse it into html already, ie this is already a string of html.

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
    const [markdown, setMarkdown] = useState(() => {
        return Object.values(Object.values(content)[index.category])[index.item]
    })

    /**
     * Layout effect to read from the content markdown file and parse to html.
     * Injects the html to the main section html tag of this component.
     * @see markdown-loader
     */
    useLayoutEffect(() => {
        // grab the main content section,
        const main = document.getElementById('main-content')

        // set the html to the markdown parsed html
        main.innerHTML = Object.values(Object.values(content)[index.category])[index.item]
    },
    // run only at the first load,
    [index])

    /**
     * Effect to get the count of headers in the section 'main-content' and their 
     * titles to display in the page-content nav element.
     */
    useEffect(() => {
        // grab the content section,
        const content = document.getElementById('main-content')

        // query all headers that start with the marked.js header prefix in the md file,
        const headers = [...content.querySelectorAll("[id^='pabs-header-']")]

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
    [index])

    /**
     * Handles a content item click.
     * @param {React.SyntheticEvent} event 
     */
    function handleContentClick(index) {
        setIndex(index)
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
                        value={markdown}/>
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