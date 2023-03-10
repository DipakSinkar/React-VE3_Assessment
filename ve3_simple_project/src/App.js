import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Modules_list from './Modules_list';
import ModuleThree from './ModuleThree';

import SearchPage from './SearchPage';
import ModuleTwo from './ModuleTwo';
import ModuleOne from './ModuleOne';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/Modules_list.js' element={<Modules_list />}></Route>
          <Route exact path='/module_one' element={<ModuleOne/>}></Route>
          <Route exact path='/module_two' element={<ModuleTwo/>}></Route>
          <Route exact path='/search_page' element={<SearchPage/>}></Route>
          <Route exact path='/module_three' element={<ModuleThree/>}></Route>
        </Route></Routes>        
      </Router>
     {/* <Router></Router> */}
      {/* <HomePage/> */}
    </div>
  );
};

export default App;
