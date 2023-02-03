import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";
import {StoreType} from "./store";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-auth-reducer";
import {  compose } from 'redux';
// СОздаем переменную redusers здесь соединяем все редюсеры
// редюсер это функция которая принимает стейт и экшион и возращает изменненный стейт
//помни что у экшина ввсегда есть type
//   form:formReducer именно так должно быть написано
let redusers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReduser,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});
//
// type PropsType ={
//     state: any;
//     dispatch: any;
//     subscriber: (store: (store: StoreType) => void) => void
//     getState(): void;
// value:null
// }


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//Создаем переменную store с помощью встроенного метода в неё погружаем редюсеры
// Создаём промежуточный слой который умеет обрабатывать функции applyMiddleware
 let store = createStore(redusers,applyMiddleware(thunkMiddleware));


// window.store = store
export default store