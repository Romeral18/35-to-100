import React from 'react'
import style from './Dialogs.module.scss'
import DialogsItem from './DialogsItem/DialogItem'
import Messages from './Messages/Messages'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../Context";



const DialogsContainer = (props) => {



    return <StoreContext.Consumer>{ (store) => {
            const newMessageBody=store.getState().dialogsPage.newMessageBody;
            const dialogs = store.getState().dialogsPage.dialogs;
            const messages = store.getState().dialogsPage.messages;

            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            const onNewMessageChange = (e) => {
                let body = e.target.value;
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            debugger;
        return <Dialogs dialogs={dialogs}
                    messages={messages}
                    sendMessage ={onSendMessageClick}
                    updateNewMessageBody={onNewMessageChange}
                    newMessageBody={newMessageBody}/>
        }
        }
    </StoreContext.Consumer>

}

export default DialogsContainer;