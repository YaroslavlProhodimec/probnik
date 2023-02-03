import s from "./Dialogs.module.css"
import * as React from "react"
import DialogsItem from "./DialogsItem/DialogsItem";
 import Message  from "./Message/Message";
import {

    DialogsType,
    MessageType,

} from "../../redux/store";
import Login from "../../Login/Login";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import AddMessageForm from "./addMessageForm/AddMessageForm";



const maxLength = maxLengthCreator(10)
const Dialogs =  (props:any)  => {
    debugger
     let state = props.dialogsPage

   let dialogsElement = state.dialogs.map((dialog: any) => <DialogsItem  id={dialog.id} name={dialog.name}  />)
    let messagesElement = state.messages.map((m: any) => <Message message={m.message}  />)
let updateNewPostText = props.dialogsPage
        let addNewMessage = (values:any) => {
        props.sendMessage(values.updateNewPostText)
        }
// Если мы не залогинины то указываем условие и ретурнем  редирект
//      if (!props.isAuth )      return   <Redirect to={"/login"} /> ;
    return (
        <div className={s.wrapper}>

            <div className={s.items}>

                <div className={s.item}>
                    {dialogsElement}
                </div>


            </div>
            <div className={s.flex}>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
            <div className={s.message}>
                {messagesElement}
            </div>




        </div>
    );
};


export default Dialogs;
