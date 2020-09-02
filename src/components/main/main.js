import React from 'react'
import './main.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="logo">
                    <img src={require("../../assets/logo.svg")} alt="React Book Logo"/>
                    <h1>React Book</h1>
                </div>
                <div className="searchBar">
                    <input 
                        type="text"
                        placeholder="Search Posts" />
                    <button>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        )
    }
}

class SideBar extends React.Component {
    render() {
        return (
            <nav className="sideBar">
                <ul>
                    <Link to="/">
                        <i class="fas fa-home"></i>
                        <li>Home</li>
                    </Link>
                    <Link to="/new-post">
                        <i class="fas fa-pen"></i>
                        <li>New Post</li>
                    </Link>
                    <Link to="/feed">
                        <i class="fas fa-rss"></i>
                        <li>Feed</li>
                    </Link>
                    <Link to="/saved">
                        <i class="fas fa-bookmark"></i>
                        <li>Saved</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

const main = {Header: Header, SideBar: SideBar}
export default main 