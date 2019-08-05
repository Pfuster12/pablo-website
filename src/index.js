import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom'
import './ui/styles/Styles.css'

import 'highlight.js/styles/ocean.css'

// import the index md file, the markdown-loader uses marked to
// parse it into html already, ie this is already a string of html.
import indexMarkdown from './markdown/index.md'
import CategoryTitle from './ui/CategoryTitle';

/**
 * This website's React entrypoint.
 */
export default function App() {

    /**
     * Stores the header elements in the .main-content section of this page to
     * display in the .page-content nav element.
     */
    const [headers, setHeaders] = useState([])

    /**
     * Layout effect to read from markdown file and parse to html.
     * Injects the html to the main section html tag of this component.
     * @see markdown-loader
     */
    useLayoutEffect(() => {
        console.log(indexMarkdown);

        // grab the main content section,
        const content = document.getElementById('main-content')

        // set the html to the showdown parsed html
        content.innerHTML = indexMarkdown
    },
    // run only at the first load,
    [])

    /**
     * Effect to get the count of headers in the section 'main-content' and their 
     * titles to display in the page-content nav elemenet.
     */
    useEffect(() => {
        // grab the content section,
        const content = document.getElementById('main-content')

        // query all headers that start with the marked.js header prefix in the md file,
        const headers = [...content.querySelectorAll("[id^='pabs-header-']")]

        console.log('Header count is ' + headers.length, headers);

        // map the headers queried into the page content nav element,
        setHeaders(headers)
    },
    [])

    return (
        <>
            <header>
                <h2>I/O Pabs</h2>
            </header>
            <main>
                <nav className="toc">
                    <CategoryTitle title={'index'}/>
                </nav>
                <section id="main-content">

                </section>
                <div className="nav-divider"/>
                <nav className="page-content">
                    <ul>
                        {
                            headers.map(header => {
                                return <span key={header.id} className="page-content-headers">{header.innerText}</span>
                            })
                        }
                    </ul>
                </nav>
            </main>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))