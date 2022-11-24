import React from 'react'

const Tags = ({ tags }) => {
    return (
        <ul className="tags">
            {tags.map((tag) => {
                return (
                    <li className="tag" key={tag}>
                        <h6>{tag}</h6>
                    </li>
                )
            })}
        </ul>
    )
}

export default Tags
