import React from 'react'
import { savePost } from '../core/CoreFunctions'

export default function Post (props) {

    return(
        <div className="post">
            <div className="postProfile">
                <img src={props.post.user.profilePicture}/>
                <div className="postInfo">
                    <h3>{props.post.user.name}</h3>
                    {props.post.data} 
                </div>
            </div>
            <p>{props.post.content}</p>
            <div className="postMenu">
                <i className="far fa-edit"><span>Edit</span></i>
                <i 
                    className="far fa-bookmark"
                    onClick={() => {savePost(props.post)}}
                ><span>Save</span></i>
                <i className="far fa-trash-alt"><span>Delete</span></i>
            </div>
        </div>
    )
}