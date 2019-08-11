import React, { useState } from 'react';
import chevron_right from '../../assets/chevron_right.svg'

/**
 * Displays a category title in the nav bar.
 * @function
 */
export default function Category(props) {

    /**
     * Toggles the category content to be shown or hidden.
     */
    const [expanded, setExpanded] = useState(false)

    /**
     * Title of this Category.
     */
    const title = props.title

    /**
     * Category object with content.
     */
    const category = props.category

    /**
     * Content click callback to change the main section html.
     */
    const contentClick = props.contentClick

    /**
     * Stores the index of this category
     */
    const categoryIndex = props.index

    /**
     * Handle the category title click to expand content.
     * @param {React.SyntheticEvent} event 
     */
    function handleClick(event) {
        setExpanded(!expanded)
    }

    // return views,
    return (
        <div className="toc-category">
            <div className="toc-category-item"
                onClick={handleClick}>
                <h4 className="toc-category-title">{title}</h4>
                <img src={chevron_right}/>
            </div>
            <section style={{ display: expanded ? 'block' : 'none'}} 
                className="toc-category-content">
                    {
                        Object.keys(category).map((value, index) => {
                            return <span className="toc-category-content-item"
                                            onClick={() => contentClick({category: categoryIndex, item: index})}>{value}</span>
                        })
                    }
            </section>
        </div>
    )
}

Category.defaultProps = {
    title: 'Item'
}