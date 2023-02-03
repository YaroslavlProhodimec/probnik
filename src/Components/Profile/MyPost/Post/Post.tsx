import s from "./Post.module.css";
import React from "react";
import {PostsType} from "../../../../redux/store";





const Post = (props: PostsType) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img
                    src="https://images.all-free-download.com/images/graphicwebp/user_astronaut_sign_icon_flat_contrast_black_white_sketch_6923675.webp"
                    alt=""
                />
                {props.message}
            </div>
            <span>like</span>{props.likesCount}
        </div>
    );
};
export default Post;
