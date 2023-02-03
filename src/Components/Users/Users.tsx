import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


// @ts-ignore
let Users = (props:any) => {

     return <div>

             <Paginator currentPage={props.currentPage} onPageChange={props.onPageChange}
                        totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
             />
         <div>
    {
        props.users.map((u: any) => <User user={u}
                                    followingInProgress={props.followingInProgress}
                                    key={u.id}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                                   />)
    }
     </div>
     </div>
}
export default Users;