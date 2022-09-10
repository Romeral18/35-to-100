import React from 'react'
import style from './Dialogs.module.scss'
import DialogsItem from './DialogsItem/DialogItem'
import Messages from './Messages/Messages'
import {updateNewMessageBodyCreator} from "../../redux/state";



const Dialogs = (props) => {

let state = props.store.getState().dialogsPage;

    const dialogsElements = props.dialogs.map(d => (<DialogsItem name={d.name} id={d.id} />));
    const messagesElements = props.messages.map(m => (<Messages message={m.message} />))
    const newMessageBody=props.state.newMessageBody;




    const onSendMessageClick = () => {
    state.dispatch(updateNewMessageBodyCreator())
    }

    const onNewMessageChange = (e) => {
        // const messageText = newMessage.current.value;
        let body = e.target.value;
        state.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <textarea  onChange={onNewMessageChange} value={newMessageBody} placeholder={'Enter your message'} />
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs