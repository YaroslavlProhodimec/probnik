import s from "./Users.module.css";
import Vladik from "./Vladik.png";
import React from "react";
import {NavLink} from "react-router-dom";




let User = (props:any) => {

return (
        <div>
            <span>
                <div className={s.flex}>
                <div>
                    <NavLink to={'/profile/' + props.user.id }>
                    <img src={props.user.photos.small != null  ? props.user.photos.small : Vladik} className={s.img}  />
                    </NavLink>
                </div>

                <div>

                   {props.user.followed
                       ? <button disabled={props.followingInProgress.some((u: { id: any; })=>u === u.id)}
                                 onClick={(e) =>{props.unfollow(props.user.id)}}> Unfollow </button>
                       : <button disabled={props.followingInProgress.some((u: { id: any; })=>u === u.id)}
                                 onClick={(e) => {props.follow(props.user.id)}}> Follow </button>}
                </div>
                </div>

            </span>
            <span>
                <span>
                <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
            </span>
            {/*<div>{'u.location.country'}</div>*/}
            {/*<div>{'u.location.city'}</div>*/}


        </div>



     )


}
export default User;