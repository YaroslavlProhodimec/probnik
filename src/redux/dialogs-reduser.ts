const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MASSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi bro'},
        {id: 2, message: 'Yo dirty talk?'},
        {id: 3, message: 'Yo bullshit'},
        {id: 4, message: 'Yo XAXAXAXA'},
        {id: 5, message: 'You stupid bitch!!!!'},

    ],
    // newMessageBody: 'kamasutra',
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
}

const dialogsReduser = (state = initialState, action: any) => {

switch (action.type)  {
    // case UPDATE_NEW_MESSAGE_BODY :
    //     return {
    //         ...state,
    //         newMessageBody: action.body
    //     }
        //stateCopy.newMessageBody = action.body


    case SEND_MASSAGE:
        let body = action.updateNewPostText;
      return {
            ...state,
            // newMessageBody: '',
            messages: [...state.messages, {id: 6, message: body}]
        }



    default:
    return state;
}
}
export let sendMessage = (updateNewPostText:any) => ({type: SEND_MASSAGE,updateNewPostText})

export default dialogsReduser