import React from 'react'
// import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";
// import profile from "../Components/Profile/Profile";
//
// it('length of posts should be incremented', () => {
//     //1. test data
//     let action = addPostCreator('it-kamasutraa')
//     let state = {
//         posts: [
//             {id: 1, message: 'Hi,how are you?', likesCount: 12},
//             {id: 2, message: 'My first project?', likesCount: 11},]
//     }
//     //2 action
//     let newState = profileReducer(state,action)
//
//
//     //3 expectation
//     expect(newState.posts.length) .toBe(3)
//  })
// it('message of new post should be corred', () => {
//     //1. test data
//     let action = addPostCreator('it-kamasutraa')
//     let state = {
//         posts: [
//             {id: 1, message: 'Hi,how are you?', likesCount: 12},
//             {id: 2, message: 'My first project?', likesCount: 11},]
//     }
//     //2 action
//     let newState = profileReducer(state,action)
//
//
//     //3 expectation
//
//     expect(newState.posts[2].message) .toBe('it-kamasutraa')
// })
// it('after deleting length of messages should be decrement', () => {
//     //1. test data
//     let action = deletePost(1)
//     let state = {
//         posts: [
//             {id: 1, message: 'Hi,how are you?', likesCount: 12},
//             {id: 2, message: 'My first project?', likesCount: 11},]
//     }
//     //2 action
//     let newState = profileReducer(state,action)
//
//
//     //3 expectation
//
//     expect(newState.posts.length) .toBe(1)
// })
// it('after deleting length of messages should be decrement', () => {
//     //1. test data
//     let action = deletePost(1000)
//     let state = {
//         posts: [
//             {id: 1, message: 'Hi,how are you?', likesCount: 12},
//             {id: 2, message: 'My first project?', likesCount: 11},]
//     }
//     //2 action
//     let newState = profileReducer(state,action)
//
//
//     //3 expectation
//
//     expect(newState.posts.length) .toBe(1)
// })