import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom';
import Settings from './components/Settings/Settings'
import News from './components/News/News'

// Single Responsibility ( S in SOLID )
// DRY - don't repeat yourself
// KISS - keep it simple stupid




function App (props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar links={props.state.staticPages.links}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}  store={props.store} newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={ <Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App

