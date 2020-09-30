import React from 'react'
import './Feed.css'
import moment from 'moment'
import Post from '../Post'
import { loadPosts} from '../../core/CoreFunctions'

class Feed extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: loadPosts()
        }
    }

    getCurrentDate() {
        const date = moment().format('L')
        const time = moment().format('LT')

        return `${date} ${time}`
    }

    getPosts() {
        this.setState(
            {posts: loadPosts()}
        )
    }

    renderPosts() {
        let posts = this.state.posts.map((post) => {
            return (
                <Post post={post} />
            )
        }) 
        return posts
    }

    render() {

        return (
            <div className="Feed">
                <div className="wrapper">
                    {this.renderPosts()}
                    {this.state.posts.length === 0 &&
                    <div className="noPosts">
                        <h1>Nothing to show here yet.</h1>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Feed