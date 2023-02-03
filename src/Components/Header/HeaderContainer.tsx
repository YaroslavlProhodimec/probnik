import Header from "./Header";
import React from 'react';
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import { logout, } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component <any, any> {
    // Ниже делаем запрос на сервер с  /auth/me чтобы законнектиться что мы залогинины
    // вместе  с url указываем withCredentials : true это говорит о том что мы авторизованы
    // В гет вторым параметром передается обьект с настройками withCredentials : true
    //

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state:any) =>( {
isAuth: state.auth.isAuth,
    login:state.auth.login
})

export default connect ((mapStateToProps),{logout}) (HeaderContainer)