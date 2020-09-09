import React from 'react'
import './Feed.css'
import moment from 'moment'

class Feed extends React.Component {
    render() {

        const date = moment().format('L')
        const time = moment().format('LT');

        return (
            <div className="Feed">
                <div className="wrapper">
                    <div className="post">
                        <div className="postProfile">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" alt="Pic"/>
                            <div className="postInfo">
                                <h3>Asmodaeuz</h3>
                                {`${date} ${time}`} 
                            </div>
                        </div>
                        <p>We won't be forgotten</p>
                        <div className="postMenu">
                            <i className="far fa-edit"><span>Edit</span></i>
                            <i className="far fa-bookmark"><span>Save</span></i>
                            <i className="far fa-trash-alt"><span>Delete</span></i>
                        </div>
                    </div>
                    <div className="post">
                        <div className="postProfile">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" alt="Pic"/>
                            <div className="postInfo">
                                <h3>Asmodaeuz</h3>
                                {`${date} ${time}`}
                            </div>
                        </div>
                        <p>We'll never give in</p>
                        <div className="postMenu">
                            <i className="far fa-edit"><span>Edit</span></i>
                            <i className="far fa-bookmark"><span>Save</span></i>
                            <i className="far fa-trash-alt"><span>Delete</span></i>
                        </div>
                    </div>
                    <div className="post">
                        <div className="postProfile">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" alt="Pic"/>
                            <div className="postInfo">
                                <h3>Asmodaeuz</h3>
                                {`${date} ${time}`}
                            </div>
                        </div>
                        <p>This war we've achieved</p>
                        <div className="postMenu">
                            <i className="far fa-edit"><span>Edit</span></i>
                            <i className="far fa-bookmark"><span>Save</span></i>
                            <i className="far fa-trash-alt"><span>Delete</span></i>
                        </div>
                    </div>
                    <div className="post">
                        <div className="postProfile">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" alt="Pic"/>
                            <div className="postInfo">
                                <h3>Asmodaeuz</h3>
                                {`${date} ${time}`}
                            </div>
                        </div>
                        <p>Has allowed us to win</p>
                        <div className="postMenu">
                            <i className="far fa-edit"><span>Edit</span></i>
                            <i className="far fa-bookmark"><span>Save</span></i>
                            <i className="far fa-trash-alt"><span>Delete</span></i>
                        </div>
                    </div>
                    <div className="post">
                        <div className="postProfile">
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/demon-1428972-1207165.png" alt="Pic"/>
                            <div className="postInfo">
                                <h3>Asmodaeuz</h3>
                                {`${date} ${time}`}
                            </div>
                        </div>
                        <p>'Till we die</p>
                        <div className="postMenu">
                            <i className="far fa-edit"><span>Edit</span></i>
                            <i className="far fa-bookmark"><span>Save</span></i>
                            <i className="far fa-trash-alt"><span>Delete</span></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed