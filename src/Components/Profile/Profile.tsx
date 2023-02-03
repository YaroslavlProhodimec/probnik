import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import * as React from "react";


const Profile = (props:any) => {



    return (
        <div >
            <Profileinfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} />

            <MyPostsContainer   />
        </div>
    );
};
export default Profile;
