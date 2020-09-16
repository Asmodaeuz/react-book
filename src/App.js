import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import main from './components/main/main'
import Home from './pages/home/Home'
import NewPost from './pages/newpost/NewPost'
import Feed from './components/feed/Feed'
import Saved from './pages/saved/Saved'

const Header = main.Header
const SideBar = main.SideBar

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="head">
                        <Header />
                    </div>
                    <div className="content">
                        <SideBar />
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/new-post">
                                <NewPost />
                            </Route>
                            <Route path="/feed">
                                <Feed />
                            </Route>
                            <Route path="/saved">
                                <Saved />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App