import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {Route, Routes} from 'react-router-dom';
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";



// Single Responsibility ( S in SOLID )
// DRY - don't repeat yourself
// KISS - keep it simple stupid




function App (props) {
debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/dialogs' element={<DialogsContainer />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={ <Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App

