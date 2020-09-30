import React from 'react'
import setInputHeight from './setInputHeight'
import { savePost, deletePost, asdPost } from '../core/CoreFunctions'

export default class Post extends React.Component {

    state = {
        edit: false,  
        content: ''     
    }

    renderVariant() {
        if(this.state.edit) {
            return this.renderEditPost()
        } else {
            return this.renderPost()
        }
    }

    renderPost() {
        return(
            <div className="post">
                <div className="postProfile">
                    <img src={this.props.post.user.profilePicture} alt="User's visual profile identification"/>
                    <div className="postInfo">
                        <h3>{this.props.post.user.name}</h3>
                        {this.props.post.data} 
                    </div>
                </div>
                <p>{this.props.post.content}</p>
                <div className="postMenu">
                    <i 
                        className="far fa-edit"
                        onClick={() => {this.editPost()}}    
                    ><span>Edit</span></i>
                    {this.renderSaveButton(this.props.post.isSaved)}
                    <i 
                        className="far fa-trash-alt"
                        onClick={() => {deletePost(this.props.post)}}
                    ><span>Delete</span></i>
                </div>
            </div>
        )
    }

    renderEditPost() {
        return (
            <div className="post">
                <div className="postProfile">
                    <img src={this.props.post.user.profilePicture} alt="User's visual profile identification"/>
                    <div className="postInfo">
                        <h3>{this.props.post.user.name}</h3>
                        {this.props.post.data} 
                    </div>
                </div>
                <div className="textArea">
                        <textarea
                            ref={(ref) => this.inputRef = ref}
                            placeholder="What's on your mind?"
                            onChange={(event) => this.postContent(event)}
                        />
                    </div>
                    <div className="createMenu">
                        <i 
                            className="far fa-times-circle"
                            onClick={(event) => {this.cancelPost(event)}}
                        ><span>Cancel</span></i>
                        <i 
                            className="far fa-check-circle"
                            onClick={() => {this.confirmPost()}}
                        ><span>Confirm</span></i>
                    </div>
            </div>
        )
    }

    renderSaveButton(isSaved) {

        if(isSaved) {
            return(
                <i 
                    className="fas fa-bookmark"
                    onClick={() => {savePost(this.props.post)}}
                ><span>Saved</span></i>
            )
        } 

        return(
            <i 
                className="far fa-bookmark"
                onClick={() => {savePost(this.props.post)}}
            ><span>Save</span></i>
        )

    }

    postContent(event) {
        setInputHeight(event, '100px')
        if(event.target.value!== '') {
            this.setState({
                content: event.target.value
            })
        } else {
            return
        }
    }

    cancelPost() {
        this.setState({
            edit: false
        })
        const inputValue = document.querySelector('textarea')
        inputValue.value = ''
        inputValue.style.height = '100px'
    }

    editPost() {
        this.setState({
            edit: true
        }, () => {
            const inputValue = document.querySelector('textarea')
            inputValue.value = this.props.post.content
        })
    }

    confirmPost() {
        const asd = this.props.post
        asd.content = this.state.content
        asdPost(asd)
    }

    render() {
        return this.renderVariant()
    }
}