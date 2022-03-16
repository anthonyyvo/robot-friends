import React, {Component} from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
        console.log(event.target.value)
        
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(searchField.toLowerCase())
            }
        );
        console.log(filteredRobots)
        return !robots.length ? <h1>Loading</h1> : ( 
        <div className="tc">
        <h1>Hellooo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobots} />
            </ErrorBoundry>
        </Scroll>
        </div>)

           
        
    }
};
export default App;

