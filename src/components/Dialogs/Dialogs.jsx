import React from 'react'
import style from './Dialogs.module.scss'
import DialogsItem from './DialogsItem/DialogItem'
import Messages from './Messages/Messages'



const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map( d => (<DialogsItem name={d.name} id={d.id}/>));
    const messagesElements = props.messages.map( m => (<Messages message={m.message}/>))

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs