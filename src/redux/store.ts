
// const ADD_POST = 'ADD_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MASSAGE = 'SEND_MESSAGE';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MessageType = {
    id?:number
    message: string
}
export type DialogsType = {
    id:number
    name:string
}

export type StateType = {

    posts: PostsType[]
    newPostsText:string | number | readonly string[] | undefined
    messages: MessageType[]
    newMessageBody:string | number | readonly string[] | undefined
    dialogs:DialogsType[]


}

export type StoreType = {

    _state: StateType
    getState:()=>void
    _callSubscriber:(props:any)=>void

    subscriber: (store: (store: StoreType) => void) => void
    dispatch: { bind: (arg0: StoreType) => any }
}

let store: StoreType = {

    _state: {
        posts: [
            {id: 1, message: 'Hi,how are you?', likesCount: 12},
            {id: 2, message: 'My first project?', likesCount: 11},

        ],
        newPostsText: 'kamasutra',
        messages: [
            {id: 1, message: 'Hi bro'},
            {id: 2, message: 'Yo dirty talk?'},
            {id: 3, message: 'Yo bullshit'},
            {id: 4, message: 'Yo XAXAXAXA'},
            {id: 5, message: 'You stupid bitch!!!!'},

        ],
        newMessageBody: 'kamasutra',
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
    },
     _callSubscriber(_state: { newMessageBody: string; newPostsText: string; messages: ({ id: number; message: string } | { id: number; message: string } | { id: number; message: string } | { id: number; message: string } | { id: number; message: string })[]; posts: ({ likesCount: number; id: number; message: string } | { likesCount: number; id: number; message: string })[]; dialogs: ({ name: string; id: number } | { name: string; id: number } | { name: string; id: number } | { name: string; id: number } | { name: string; id: number } | { name: string; id: number })[] })  {
        console.log('wqfqwfwqf')
    },

    getState() {
        return this._state;
    },
    subscriber  (observer: (store: StoreType) => void) {
        this._callSubscriber = observer;

    },

    dispatch: function (action: any) {
        debugger
        // this._state = profileReducer(this._state, action);
        // this._state = dialogsReduser(this._state, action);
        this._callSubscriber(this._state);
    }
}





export default store