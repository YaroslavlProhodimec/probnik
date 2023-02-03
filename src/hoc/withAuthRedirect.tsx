import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
let mapStateToPropsForRedirect = (state: any) => {
    return {

        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends  React.Component<any, any> {
        render () {
    if (!this.props.isAuth )      return   <Redirect to={"/login"} /> ;
        return <Component {...this.props}/>
}
}

// @ts-ignore
   let  ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
return ConnectedAuthRedirectComponent
}

