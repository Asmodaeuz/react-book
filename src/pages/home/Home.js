import React from 'react'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="wrapper">
                    <h1>Welcome to React Book</h1>
                    <div className="features">
                        <div className="feature">
                                <div>
                                    <h1>See</h1>
                                    <p>
                                        See what your friends and family are doing, inspire yourself on the work of others
                                        and be close of what and who you like, even in distance.
                                    </p>
                                </div>
                                <i class="far fa-eye"></i>
                        </div>
                        <div className="feature">
                                <div>
                                    <h1>Share</h1>
                                    <p>
                                        Share your thoughts, emotions and let your creativity flow through your posts for the 
                                        world to see.
                                    </p>
                                </div>
                                <i class="fas fa-retweet"></i>
                        </div>
                        <div className="feature">
                                <div>
                                    <h1>Save</h1>
                                    <p>
                                        Save what you like the most so you can always revisit that meme, get details on the project 
                                        your firm is working on or learn a few things with those videos.
                                    </p>
                                </div>
                                <i class="far fa-save"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home