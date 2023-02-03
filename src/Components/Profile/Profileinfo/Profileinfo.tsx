import React from 'react';
import {Prealoder} from "../../common/Prealoder/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ImageProfile} from "./ProfileImage";
// @ts-ignore
const Profileinfo = ({profile, status, updateStatus}) => {
    // Если у нас не profile то есть у нас нет его
    if (!profile) {
        return <div><Prealoder/></div>
    }

    return (
        <div>
            <ImageProfile/>
            <div>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
        </div>)
}


export default Profileinfo;