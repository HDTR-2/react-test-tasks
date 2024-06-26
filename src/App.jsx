import './App.scss';

import {Todo} from "./Todo/Todo";

import {Users} from "./Users/Users";


function App() {
    return (
        <div className="App">
            <Todo/>
            <Users/>
        </div>
    );
}

export default App;
