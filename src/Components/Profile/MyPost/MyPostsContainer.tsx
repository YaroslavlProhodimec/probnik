import React from 'react';
import {addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props: any) => {
//     debugger
//
//     let addPost = () => {
//         props.store.dispatch(addPostCreator());
//     }
//     let onPostChange = (text: string) => {
//         debugger
//
//         props.store.dispatch(updateNewPostTextCreator(text));
//
//
//     }
//     return (
//         <StoreContext.Consumer>
//             {(store:any) => {
//                 let state = props.store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostCreator());
//                 }
//                 let onPostChange = (text: string) => {
//                     debugger
//
//                     store.dispatch(updateNewPostTextCreator(text));
//
//
//                 }
//
//                return  <MyPosts updateNewPostText={onPostChange}
//                          addPost={addPost}
//                          posts={state.profilePage.posts}
//                          newPostsText={state.getState().profilePage.newPostsText}/>}
//         }
//         </StoreContext.Consumer>
//                 }
let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText

    }


}
// let mapDispatchToProps = (dispatch: any) => {
//     return {
// // СНИЗУ ДИСПАТЧИМ ACTION КОТОРЫЫЙ КАК МИНИМУМ ДОЛЖЕН СОДЕРЖАТЬ TYPE
//         addPost: (updateNewPostText:any) => {
//             dispatch(addPostCreatorprops.updateNewPostText))
//         },
//         updateNewPostText: (text:any) =>
//         {dispatch(updateNewPostTextCreator(text))
//         },
//     }
// }
const MyPostsContainer = connect(mapStateToProps, {addPostCreator}) (MyPosts);
export default MyPostsContainer;