import React, { Component } from 'react';
import CardList from './CardList.js'
import SearchBox from './SearchBox.js'
import Scroll from './Scroll.js'
import { robots } from './robots'
import './App.css'
import ErrorBoundary from './ErrorBoundary'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        this.setState({robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>KoolKats</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundary>           
                </Scroll>
                
            </div>  
        )
    }
}

export default App