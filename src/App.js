import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import Chat  from './components/chat/Chat'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Login from './components/login/Login'
import { useStateValue } from './StateProvider';
import {initialState} from './reducer'
function App() {
const [{user} , dispatch] = useStateValue()

  return (
    <div className="App">
    {/* header */}
    <Router>
      {!user? (
        <Login />
      ):(
        <>
        <Header />
    <div className = 'app__body'>
    <Sidebar />
    <Switch>
      <Route path = "/room/:roomId">
        <Chat /> 
      
      </Route>
      <Route path ="/">
        <h1> welcome</h1>
      </Route>
    </Switch>
    </div>
    {/* sidebar */}
  
      </>)}
        </Router>
    {/* React-router -> chat screen */}
    </div>
    
  );
}

export default App;
