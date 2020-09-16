import React from 'react'
import './Saved.css'
import moment from 'moment'
import Post from '../../components/Post'
import { loadSavedPosts } from '../../core/CoreFunctions'

class Saved extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: loadSavedPosts()
        }
    }

    getCurrentDate() {
        const date = moment().format('L')
        const time = moment().format('LT')

        return `${date} ${time}`
    }

    getPosts() {
        this.setState(
            {posts: loadSavedPosts()}
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
            <div className="Saved">
                <div className="wrapper">
                    {this.renderPosts()}
                    {this.state.posts.length === 0 &&
                    <div className="noSaves">
                        <h1>Your saved posts will be here.</h1>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Saved