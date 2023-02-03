import React from 'react'
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Prealoder} from "../Prealoder/Preloader";
import ProfileContainer from "../../Profile/ProfileContainer";
// Достаём деструктуризацией инпут и мета
// @ts-ignore
// мета данные приходят к нам в пропсах
export const FormControl = ({input,meta:{touched,error,},children,}) => {

    const showError = touched && error
    return (
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <div>

                {children}
            </div>
            { showError && <span>{error}</span>}
        </div>
    )
}
// @ts-ignore
export const Textarea = (props:any) => {
const {input,meta,child,...restProps} = props
    return  <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}// @ts-ignore
export const Input = (props:any) => {
    const {input,meta,child,...restProps} = props
    return  <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}
// @ts-ignore
// export const FormLazy = ({props,children }) => {
//
//     return (
//         <React.Suspense fallback={<div>Loading</div>}>
//             {children}
//         </React.Suspense>
//
//
//
//     )
// }
// // @ts-ignore
// export const Profile = (props:any) => {
//     return  <FormLazy {...props}><ProfileContainer/></FormLazy>

// @ts-ignore
// export const Input = (props:any) => {
//     const {input,meta,child,...restProps} = props
//     return  <FormControl {...props}><input {...input} {...restProps} /></FormControl>
//
// }
