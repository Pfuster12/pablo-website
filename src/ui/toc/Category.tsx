import * as React from 'react';
import { useState } from 'react'
import * as chevron_right from '../../assets/chevron_right.svg'
import { ContentSelection } from '../..';

interface CategoryProps {
    title: string,
    content: ContentSelection,
    contentClick: (category: ContentSelection) => void,
    index: number
}

/**
 * Displays a category title in the nav bar.
 * @function
 */
export default function Category(props: CategoryProps) {

    /**
     * Toggles the category content to be shown or hidden.
     */
    const [expanded, setExpanded] = useState(false)

    /**
     * Handle the category title click to expand content.
     * @param event 
     */
    function handleClick(event: React.SyntheticEvent) {
        setExpanded(!expanded)
    }

    // return views,
    return (
        <div className="toc-category">
            <div className="toc-category-item"
                onClick={handleClick}>
                <h4 className="toc-category-title">{props.title}</h4>
                <img src={chevron_right}/>
            </div>
            <section style={{ display: expanded ? 'block' : 'none'}} 
                className="toc-category-content">
                    {
                        Object.keys(props.content).map((value, index) => {
                            return <span className="toc-category-content-item"
                                            onClick={() => props.contentClick({category: props.index, item: index})}>{value}</span>
                        })
                    }
            </section>
        </div>
    )
}