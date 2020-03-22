import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Горилла" id="1"/>
                <DialogItem name="Орангутан" id="2"/>
                <DialogItem name="Шимпанзе" id="3"/>
                <DialogItem name="Магот" id="4"/>
                <DialogItem name="Мартышка" id="5"/>
                <DialogItem name="Гамадрил" id="6"/>
                <DialogItem name="Гелада" id="7"/>
            </div>
           <div className={classes.messages}>
               <Messages message="Hi!"/>
               <Messages message="What's your name?"/>
               <Messages message="Do you want to be my friend?"/>
           </div>
        </div>
    );
};

export default Dialogs;