import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

//
// export type MyPostsTypeProps = {
//     posts: PostsType[]
//        dispatch:()=>void
//     newPostsText:string | number | readonly string[] | undefined
//     pushPost:()=>void
//     updateNewPostText:(newText:string | number | readonly string[] | undefined)=>void
// }

// const a = [1, 2,3,4].map(() => ())
// const a = [1, 2,3,4].map((el, index) => {
//     const bl   a = () => {}
// return index === 2 ? <></> : <>{'bla bla'}</>) }))

const maxLength10 = maxLengthCreator(10)

const  MyPosts = React.memo((props: any) => {

    let posts = props.posts

    let postElements =
        [...posts]
            .reverse()
            .map((p: any) => (<Post
                id={p.id}
                message={p.message}
                likesCount={p.likesCount}/>
        ))

    let addNewMessage = (values: any) => {
        props.addPostCreator(values.updateNewPostText)
    }
    return <div>

        <div className={s.content}>
            <div className={s.my}>My Posts</div>
            <div>
                <AddPostForm onSubmit={addNewMessage}/>

            </div>
            <div className={s.new}>New Post</div>

            <div className={s.posts}>
                {postElements}


            </div>
        </div>

    </div>
})

const AddPost = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.text}
                placeholder='enter'
                   name='updateNewPostText'
                   component={Textarea}
                   validate={[required, maxLength10]}
            />
        </div>
            <button  className={s.button}>Send</button>
        </form>
    )
}
const AddPostForm = reduxForm({form:"addPost"})(AddPost)
export default MyPosts;
