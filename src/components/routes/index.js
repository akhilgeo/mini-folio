import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {sitename} from './customize.json'


class Nav extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-static-top">
                        <a class="navbar-brand" href="#">{sitename}</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </Switch>



                </React.Fragment>




            </Router>

        )
    }


}
export default Nav;