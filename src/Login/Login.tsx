import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import s from "../Components/common/FormsControls/FormsControls.module.css";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {text} from "stream/consumers";

// делаем импорт redux-form потом делаем отдельную компоненту LoginForm
// её помещаем другую константу в метод reduxForm
// потом заменяем все инпуты на Field и прописываем инпутыы в компонентах смотреть ниже
// В этих Field  за сеттаны onchange
// Обязательно надо дать обьектам name
let maxLength50 = maxLengthCreator(50)
export const LoginForm = ({handleSubmit}: any, {error}: any) => {
    debugger
    return (
        <div>

            <form onSubmit={handleSubmit}>
                {createField(s.text, 'email', 'email', [required, maxLength50], Input)}
                {createField(s.text, 'Password', "password", [required, maxLength50], Input, {type: 'password'})}
                {createField(null, null, "rememberMe", [ ], Input, {type: 'checkbox'}, 'remember me')}
                {/*<Field className={s.text} type={"checkbox"} name={"rememberMe"} component={Input}*/}

                {/*        validate={[required, maxLength50]}/> remember meremember me*/}

                <div>
                    <button>Login</button>
                </div>
                {error && <div className={s.error}>
                    {error} </div>}
            </form>
        </div>
    )
}
export const createField = (className: any, placeholder: any, name: any, validate: any, component: any, props = {}, text = '') => (
    <div>
        <Field
            className={className}
            placeholder={placeholder}
            name={name}
            validate={validate}
            component={component}
            {...props}
        /> {text}</div>
)

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)