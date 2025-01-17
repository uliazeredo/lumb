import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { load, save } from 'redux-localstorage-simple'

import logo from './logo.svg'
import './App.css'

import rootReducer from './rootReducer'

import MoviesList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'

const middleware = [ thunk]

const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(...middleware, save()))
)

const App = () => (
    <Provider store={ store }>
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <Link to='/'>
                        <img src={ logo } className='App-logo' alt='logo' />
                    </Link>
                </header>
                <main className='App-main'>
                    <Switch>
                        <Route exact path='/' component={ MoviesList } />
                        <Route path='/:id' component={ MovieDetails } />
                    </Switch>
                </main>
            </div>
        </Router>
    </Provider>
)

export default App
