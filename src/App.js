import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Switch} from 'react-router-dom';
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
                <Switch>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </Switch>
            </div>
        </div>
    )
}

export default App

