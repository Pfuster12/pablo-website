import React from 'react';
import chevron_right from '../assets/chevron_right.svg'

/**
 * Displays a category title in the nav bar.
 * @function
 */
export default function CategoryTitle(props) {

    /**
     * Title of this Category.
     */
    const title = props.title

    function handleClick(event) {
        
    }

    // return views,
    return (
    <div className="category-title"
        onClick={}>
        <h4 className="category-title-text">{title}</h4>
        <img src={chevron_right}/>
    </div>
    )
}

CategoryTitle.defaultProps = {
    title: 'Item'
}