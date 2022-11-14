import React from 'react'
import { useState } from 'react'
import VectorT from '../asset/vector_t.png'
import VectorF from '../asset/vector_f.png'
import Data from '../data/about.json'

const Collapse = (i) => {
    const [stateCollapse, setStateCollapse] = useState(null)
    const toogle = (i) => {
        if (stateCollapse === i) {
            return setStateCollapse(null)
        }

        setStateCollapse(i)
    }

    return Data.map((item, i) => {
        return (
            <div className="collapse-container" key={item.id}>
                <button
                    className="collapse"
                    typeof="button"
                    onClick={() => toogle(i)}
                >
                    <h6 className="collapse__title">{item.title}</h6>
                    <img
                        className="collapse__vector"
                        src={stateCollapse === i ? VectorF : VectorT}
                        alt="vector"
                    />
                </button>

                {stateCollapse === i ? (
                    <div className="collapse__content">{item.content}</div>
                ) : null}
            </div>
        )
    })
}

export default Collapse
