import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import main from './components/main/main'
import Feed from './components/feed/Feed'

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
                            {/*<Route path="/" exact>
                                <Home />
                            </Route>*/}
                            {/*<Route path="/new-post">
                                <Feed />
                            </Route>*/}
                            <Route path="/feed">
                                <Feed />
                            </Route>
                            {/*<Route path="/saved">
                                <Feed />
                            </Route>*/}
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App