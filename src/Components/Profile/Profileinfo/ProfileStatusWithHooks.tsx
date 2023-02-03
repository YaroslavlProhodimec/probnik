import React, {useEffect, useState} from 'react';
import s from "./Profileinfo.module.css";
import {Prealoder} from "../../common/Prealoder/Preloader";
const ProfileStatusWithHooks = (props:any) =>
{

    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)
    // stateWithSetState = useState(true)
    // let editMode = stateWithSetState[0]
    // let setEditMode = stateWithSetState[1]
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
   let deactivateEditMode =()=>{
       setEditMode(
           false
       )
   }
  const activateMode = () => {
      setEditMode(
          true
      )
       props.updateStatus(status)
  }
    const onStatusChange = (e:any) =>{

        setStatus(e.currentTarget.value)
    }
    return(
    <div>

        { !editMode &&
            <div>
                <span onDoubleClick={activateMode} >{props.status || 'No Status'}</span>
            </div>}
        {editMode &&
            <div>
                <input onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                       autoFocus={true}
                       />
            </div>}
    </div>)
}

export default ProfileStatusWithHooks;