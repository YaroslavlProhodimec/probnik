import {authAPI} from "../api/api";
import {AxiosResponse} from "axios";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,

            }

        default :
            return state;
    }
}
// ниже тут создаём константы которые будем диспачить при клики каждый в своей компоненте
// которые передадим через компоненту контейнер
// в этих константах находиться обьект action тот который справа и слева от него находиться его же type
// там где any  это то что приходит и оно повязано с тем что в самой правой стороне
// то что мы сверху перезатираем мы тут такое же  имя указываем
export const setAuthUserData = (userId: any, email: any, login: any,isAuth:any) => ({type: SET_USER_DATA,
    payload: {userId, email, login,isAuth}
})
 export const  getUserData = () => async (dispatch:any) => {
   let response =  await authAPI.me()

    if (response.data.resultCode === 0){
        let {id, login, email, } = response.data.data
        dispatch(setAuthUserData(id,  email, login,true))}
}
export const  login = (email:any,password:any,rememberMe:any) => async (dispatch:any) => {
  let response = await authAPI.login(email,password,rememberMe)

            if (response.data.resultCode === 0){
                dispatch(getUserData())
            }else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] :"SOME error"
                dispatch(stopSubmit('login',{_error: message}))
            }
       }
//        Другой вариант thunk ниже
export const  logout = () => (dispatch:any) => {
    authAPI.logout()
        .then((response: AxiosResponse) => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserData(null,  null, null,false))
            }
        })}
export default authReducer;