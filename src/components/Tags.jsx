import React from 'react'

const Tags = ({ tags }) => {
    return (
        <ul className="tags">
            {tags.map((tag) => {
                return (
                    <li className="tag" key={tag}>
                        <span className="tag__content">{tag}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Tags
