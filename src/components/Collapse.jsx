import React from 'react'
import { useState } from 'react'
import VectorT from '../asset/vector_t.png'
import VectorF from '../asset/vector_f.png'

const Collapse = ({ title, content, id }) => {
    const [stateCollapse, setStateCollapse] = useState(0)
    const stateCollapseUpdate = () => {
        setStateCollapse(!stateCollapse)
        console.log(stateCollapse)
    }

    return (
        <div className="collapse-container" key={id}>
            <button
                className="collapse"
                typeof="button"
                onClick={stateCollapseUpdate}
            >
                <h6 className="collapse__title">{title}</h6>
                <img
                    className="collapse__vector"
                    src={stateCollapse ? VectorF : VectorT}
                    alt="vector"
                />
            </button>

            {stateCollapse ? (
                <div className="collapse__content">{content}</div>
            ) : null}
        </div>
    )
}

export default Collapse
