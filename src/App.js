
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './components/Main';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/main' element={<Main />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
