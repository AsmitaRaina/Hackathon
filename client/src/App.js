import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginScreen';
import CategoryScreen from './pages/CategoryScreen';
import StudentScreen from './pages/StudentScreen';
import RegisterPage from './pages/RegisterScreen';
import AdminScreen from './pages/AdminScreen';
import CompanyScreen from './pages/CompanyScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/register' element={<RegisterPage/>}/>
          <Route exact path='/' element={<CategoryScreen/>}/>
          <Route exact path='/student' element={<StudentScreen/>}/>
          <Route exact path='/admin' element={<AdminScreen/>}/>
          <Route exact path='/company' element={<CompanyScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
