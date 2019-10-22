import React from 'react'

function PostListItem({title, body, id}) {
    return (
        <li>
            <div> Id: {id} </div>
            <div> Title : {title}</div>
            <div> Body : {body}</div>
        </li>
    )
}

export default React.memo(PostListItem)
