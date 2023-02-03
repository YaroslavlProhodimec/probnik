import {Field, reduxForm} from "redux-form";
import s from "../../Profile/MyPost/MyPosts.module.css";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.text}
                       placeholder='Post message'
                       name='updateNewPostText'
                       component={Input}

                       validate={[required, maxLength50]}
                />
            </div>
            <button  className={s.button}>Send</button>
        </form>
    )
}
export default  reduxForm({form:"addPost"})(AddMessageForm)