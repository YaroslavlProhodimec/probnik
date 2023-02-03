import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
// const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'My first project?', likesCount: 11},

     ],
    // newPostsText: 'kamasutra',
    profile: null,
    status: ""

}
const profileReducer = (state= initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost =  action.updateNewPostText
            return {
                ...state,
                posts: [...state.posts, {id: 2, message: newPost, likesCount: 11}],

            }
         }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostsText: action.text
        //     }
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        //
        // case DELETE_POST: {
        //     return {
        //         ...state,
        //         posts: state.posts.filter(n => n.id != postId),
        //     }
        // }
default:
            return state;
    }
}
    export let addPostCreator = (updateNewPostText:any) => ({type: 'ADD_POST',updateNewPostText})
 let setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
let setStatus = (status:any) => ({type: SET_STATUS, status})
// export let deletePost = (postId:any) => ({type: DELETE_POST, postId})
export let getUserProfile = (userId: any) => (dispatch:any) => {
        userAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        })
}

export let getUserStatus = (userId: any) => (dispatch:any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export let updateStatus = (status: any) => (dispatch:any) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(response.data));
        }
    })
}
    // export let updateNewPostTextCreator = (text: string) => ({type: 'UPDATE_NEW_POST_TEXT', text: text})




    export default profileReducer