import React from 'react'
import { useState } from 'react'
import VectorT from '../asset/vector_t.png'
import VectorF from '../asset/vector_f.png'
import Data from '../data/about.json'

const Collapse = ({ title, content }) => {
    var coll = document.getElementsByClassName('collapse')
    var i

    for (i = 1; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            this.classList.toggle('active')
            var content = this.nextElementSibling
            if (content.style.display === 'block') {
                content.style.display = 'none'
            } else {
                content.style.display = 'block'
            }
        })
    }

    const [stateCollapse, setStateCollapse] = useState(0)
    const stateCollapseUpdate = () => {
        setStateCollapse(!stateCollapse)
        console.log(stateCollapse)
    }

    return Data.map((item) => {
        return (
            <div className="collapse-container">
                <button
                    className="collapse"
                    typeof="button"
                    onClick={stateCollapseUpdate}
                >
                    <h6 className="collapse__title">{item.title}</h6>
                    <img
                        className="collapse__vector"
                        src={stateCollapse ? VectorF : VectorT}
                        alt="vector"
                    />
                </button>

                {stateCollapse ? (
                    <div className="collapse__content">{item.content}</div>
                ) : null}
            </div>
        )
    })
}

export default Collapse
