import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Header from './components/Header';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/register'} element={<Auth regsiter/>}/>
      <Route path={'/login'} element={<Auth/>}/>
      <Route path={'/dashboard'} element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
