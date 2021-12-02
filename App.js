import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router,Route,Link,Switch } from 'react-router-dom';
//import Count from './reduxixiono';
import {Provider} from 'react-redux';
import store from './ixonostore/store'
//import Main from './loginpage';
//import Register from './Registrationform';
import Land from './landingpage';
import Home from './Home';
function App() {
  
  return (
    //<Provider store={store}>
    <div >
     
     <Land/>
    
    </div>
    //</Provider>
  );
}

export default App;
