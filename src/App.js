import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/hello/:name' component={Hello} />
                <Route path='*' component={PageNotFound} />
                </Route>
            </Router>
        )
    }
}

const Navigation = props => (
    <div>
        <ul>
            <li><Link to='/' activeStyle={{color: '#48abee', textDecoration: 'none'}} onlyActiveOnIndex>Home</Link></li>
            <li><Link to='/contact' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Contact</Link></li>
        </ul>
        {props.childer}
    </div>
);

const Hello = (props) => <h1>Witaj, {props.params.name}</h1>

const PageNotFound = () => <h1>404 Not Found</h1>;
const Home = () => <h1>Tu home component</h1>
const Contact = () => <h1>tu contact</h1>
export default App