import React from 'react'
import style from './Dialogs.module.scss'
import DialogsItem from './DialogsItem/DialogItem'
import Messages from './Messages/Messages'




const Dialogs = (props) => {


    const dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogsItem name={d.name} id={d.id} />));
    const messagesElements = props.dialogsPage.messages.map(m => (<Messages message={m.message} />));
    const newMessageBody = props.dialogsPage.newMessageBody;


    const onSendMessageClick = () => {
       props.sendMessage();
    }

    const onNewMessageChange = (body) => {
        props.updateNewMessageBody(body);
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