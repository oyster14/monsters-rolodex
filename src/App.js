import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users =>
                this.setState(() => {
                    return { monsters: users };
                },)
            );
    }
    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map(({ name, id }) => {
                        return <h1 key={id}>{name}</h1>;
                    })
                }
            </div>
        );
    }
}

export default App;
