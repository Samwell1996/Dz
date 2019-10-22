import React from 'react'
import "./MoreButton.css"

function MoreButton({onClick, isVisibleMoreButton}) {
    return (
        <div className='Button'>
            { isVisibleMoreButton && (
            <button className='MoreButton' onClick={onClick} >Show more</button>
            )}
        </div>
    )
}

export default MoreButton
