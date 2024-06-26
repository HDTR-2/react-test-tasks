import './App.scss';

import {Profile} from "./Profile/Profile";

import {Todo} from "./Todo/Todo";

import {Users} from "./Users/Users";


function App() {
    return (
        <div className="App">
            <Profile/>
            <Todo/>
            <Users/>
        </div>
    );
}

export default App;
