import React from 'react'
import './NewPost.css'
import setInputHeight from '../../components/setInputHeight'
import { generateId, createPost } from '../../core/CoreFunctions'
import moment from 'moment'

class NewPost extends React.Component {

    constructor(props) {
        super()

        this.state = {
            content: ''
        }
    }

    inputRef = null

    createPost() {
        const post = {
            id: generateId(),
            user: {
                name: "Asmodaeuz",
                profilePicture: "https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" 
            },
            data: this.getCurrentDate(),
            content: this.state.content,
            isSaved: false
        }
        if(this.state.content !== '') {
            createPost(post)
            window.location.reload()
        } else {
            return
        }
        
    }

    getCurrentDate() {
        const date = moment().format('L')
        const time = moment().format('LT')

        return `${date} ${time}`
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
            content: ''
        })
        const inputValue = document.querySelector('textarea')
        inputValue.value = ''
        inputValue.style.height = '100px'
    }

    render() {
        return(
            <div className="NewPost">
                <div className="createSection">
                    <h3>Create post</h3>
                    <div className="profile">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" alt="Profile"/>
                        <p>Asmodaeuz</p>
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
                            onClick={() => {this.createPost()}}
                        ><span>Publish</span></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost