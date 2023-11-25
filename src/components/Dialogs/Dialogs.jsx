import React from 'react';
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsElements =
        props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElements =
        props.messages.map(message => <Message id={message.id} message={message.message}/>)

    return (
        <>
            <DialogItem/>
            <Message/>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </>
    );
};

export default Dialogs;