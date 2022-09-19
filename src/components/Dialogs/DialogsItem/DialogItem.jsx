import React from 'react'
import style from './../Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogsItem = (props) => {
    return (
        <div className={style.dialogs + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem