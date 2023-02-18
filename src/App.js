import './App.css';

import {Home,Login} from './pages'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ='/' element= {<Home />}></Route>
          <Route path = 'login' element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
