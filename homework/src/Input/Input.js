import React from 'react'
import './Input.css'

function Input({onChange, value}) {
    return (
        <div className="getInput">
            <input
                type="text"
                className="Input"
                placeholder="Search by ..."
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input

