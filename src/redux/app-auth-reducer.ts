import {getUserData,} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false,

}
const appReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                initialized: true

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
export const setInitialized = () => ({
    type: SET_INITIALIZED,

})
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}
export default appReducer;