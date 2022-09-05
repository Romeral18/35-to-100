import React from 'react'
import style from './../Dialogs.module.scss'



const Messages = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}


export default Messages