import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginScreen';
import CategoryScreen from './pages/CategoryScreen';
import StudentScreen from './pages/StudentScreen';
import RegisterPage from './pages/RegisterScreen';
import AdminScreen from './pages/AdminSection/AdminScreen';
import Dashboard from "./components/company components/dashboard"
import { ThemeProvider } from '@emotion/react';
import {ColorModeContext, useMode} from './theme.js'
import { CssBaseline, Drawer } from '@mui/material';
import Sidebar from './components/company components/global/Sidebar';
import { useState } from 'react';
import CompanyScreen from './pages/CompanyScreen';
import Contacts from './components/company components/contacts';
import AnnouncementScreen from './pages/AdminSection/AnnouncementScreen';
import TemporaryDrawer from './components/Drawer';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/register' element={<RegisterPage/>}/>
            <Route exact path='/' element={<CategoryScreen/>}/>
            <Route exact path='/student' element={<StudentScreen/>}/>
            <Route exact path='/admin/' element={<AdminScreen/>}/>
            <Route exact path='/admin/announcements/' element={<AdminScreen/>}/>
            <Route exact path='/admin/calendar/' element={<AdminScreen/>}/>
            <Route exact path='/company' element={<CompanyScreen/>}/>
            <Route exact path='/admin/history/' element={<AdminScreen/>}/>
            <Route exact path='/company/history/' element={<CompanyScreen/>}/>
            <Route exact path='/company/hr/' element={<CompanyScreen/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
