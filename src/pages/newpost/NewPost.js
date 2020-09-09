import React from 'react'
import './NewPost.css'
import setInputHeight from '../../components/setInputHeight'

class NewPost extends React.Component {

    inputRef = null

    componentDidMount() {
        console.log(this.inputRef)
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
                            onChange={(event) => setInputHeight(event, '100px')}  
                        />
                    </div>
                    <div className="createMenu">
                        <i className="far fa-times-circle"><span>Cancel</span></i>
                        <i className="far fa-check-circle"><span>Publich</span></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPost